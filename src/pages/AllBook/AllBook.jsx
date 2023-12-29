import { useContext, useEffect, useState } from 'react';
import './AllBook.css';
import axios from 'axios';
import AllBookCard from '../AllBookCard/AllBookCard';
import Swal from 'sweetalert2';
import Forbidden from '../ErrorPage/Forbidden';
import { DataContext } from '../../providers/DataProvider';
import Select from 'react-select';
import { AuthContext } from '../../providers/AuthProviders';

const AllBook = () => {
    const { dataLoading, setDataLoading, } = useContext(DataContext);
    const { user } = useContext(AuthContext);
    const adminEmail = 'abc_librarian@email.com';
    const isAuthorized = user.email === adminEmail;
    const [books, setBooks] = useState([]);
    const [error, setError] = useState([]);
    const [selectedOption, setSelectedOption] = useState({ value: 'all', label: 'All Books' });


    const options = [
        { value: 'avail', label: 'Available' },
        { value: 'na', label: 'Not-Available' },
        { value: 'all', label: 'All Books' },
    ];
    //  console.log(selectedOption.value)
    const filterBy = selectedOption.value;
    // console.log(filterBy)


    useEffect(() => {
        axios.get(`https://library-management-server-flame.vercel.app/allBooks/${filterBy}`, { withCredentials: true },)
            .then(res => {
                setBooks(res.data);
                setDataLoading(false);
            }).catch(error => {
                setError(`Error fetching borrowed books:${error}`);
                // console.error('Error fetching borrowed books:', error);
                setDataLoading(false);
            });
    }, [ selectedOption])


    const handleDeleteBook = (_id) => {
        // console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://library-management-server-flame.vercel.app/allBooks/${_id}`, { withCredentials: true })
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            const remaining = books.filter(borrowBook => borrowBook._id !== _id);
                            setBooks(remaining);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    }).catch(error => {
                        setError(`Error fetching borrowed books:${error}`);
                    });
            }

        });
    }


    if (dataLoading) {
        return <div className='p-10 flex justify-center'><span className="loading loading-spinner loading-lg text-warning"></span></div>
    }


    return (
        <>
            {isAuthorized ? null : <Forbidden />}
            <div className={isAuthorized ? 'block' : 'hidden'}>
                <div className="text-center w-3/12 py-4 mx-auto">
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 justify-items-center">
                    {
                        books.map(book => (
                            <AllBookCard
                                key={book._id}
                                book={book}
                                error={error}
                                handleDeleteBook={handleDeleteBook}
                            ></AllBookCard>
                        ))
                    }
                </div>
                {error.length > 0 && <Forbidden></Forbidden>}
            </div>
        </>

    );
};

export default AllBook;