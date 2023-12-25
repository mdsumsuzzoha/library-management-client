import { useEffect, useState } from 'react';
import './AllBook.css';
import axios from 'axios';
import AllBookCard from '../AllBookCard/AllBookCard';
import Swal from 'sweetalert2';

const AllBook = () => {
    const [books, setBooks] = useState([]);


    const url = `http://localhost:5000/allBooks`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBooks(res.data);
            }).catch(error => {
                console.error('Error fetching borrowed books:', error);
            });
    }, [])

    const handleDeleteBook = (_id) => {
        console.log(_id)
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
                fetch(`http://localhost:5000/allBooks/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = books.filter(borrowBook => borrowBook._id !== _id);
                            setBooks(remaining);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    }).catch(error => {
                        console.error('Error fetching borrowed books:', error);
                    });
            }

        });
    }


    return (
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 justify-items-center">
                {
                    books.map(book => (
                        <AllBookCard
                            key={book._id}
                            book={book}
                            handleDeleteBook={handleDeleteBook}
                        ></AllBookCard>
                    ))
                }
            </div>

    );
};

export default AllBook;