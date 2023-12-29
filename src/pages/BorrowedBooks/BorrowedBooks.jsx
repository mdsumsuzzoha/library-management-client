import { useContext, useEffect, useState, } from "react";
import BorrowBookCard from "./BorrowBookCard";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import { DataContext } from "../../providers/DataProvider";

const BorrowedBooks = () => {

    // borrow books data from DataProviders bt using DataContext;
    const { user } = useContext(AuthContext);
    const { dataLoading, setDataLoading, } = useContext(DataContext);
    const [borrowedBooks, setBorrowedBooks] = useState([]);


    const url = `https://library-management-server-flame.vercel.app/borrowed?email=${user?.email}`;
    useEffect(() => {
        axios.get(url,
            { withCredentials: true }
        )
            .then(res => {
                // console.log(res.data);
                setBorrowedBooks(res.data);
                setDataLoading(false);
            })
            .catch();

    }, []);



    const handleReturn = (_id, bookId) => {
        // console.log(_id, bookId);
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Return"
        }).then((result) => {
            if (result.isConfirmed) {


                // delete book from borrowed qty by return the book
                axios.delete(`https://library-management-server-flame.vercel.app/borrowed/${_id}`, { withCredentials: true })
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            // increase book qty by return the book
                            axios.patch(`https://library-management-server-flame.vercel.app/booksQtyInc/${bookId}`, null, { withCredentials: true })
                                .then(res => {
                                    // console.log(res.data)
                                    if (res.data.modifiedCount) {
                                        Swal.fire({
                                            title: "Returned",
                                            text: "Your Book has been Returned.",
                                            icon: "success"
                                        });
                                    }
                                    else {
                                        Swal.fire({
                                            title: "",
                                            icon: "error"
                                        });
                                    }

                                })
                                .catch(error => {
                                    // setError(error);
                                    // console.log(error);
                                    return error;
                                });
                            const remaining = borrowedBooks.filter(borrowBook => borrowBook._id !== _id);
                            setBorrowedBooks(remaining);

                        }
                    })
                    .catch(error => {
                        // setError(error);
                        // console.log(error);
                        return error;
                    });


            }
        });

    }

    // console.log(borrowedBooks.length);
    if (dataLoading) {
        return <div className='p-10 flex justify-center'><span className="loading loading-spinner loading-lg text-warning"></span></div>
    }

    return (
        <div className="pt-4">
            <div className="flex items-center justify-center h-32" style={{ display: borrowedBooks.length > 0 ? 'none' : 'block' }}>
                {borrowedBooks.length === 0 && (
                    <div className="text-center"><p className="text-gray-700 text-xl font-bold">No Books found</p>
                        <Link to='/' className="link btn-link">Go, and find your book</Link>
                    </div>
                )}
            </div>
            <div className="overflow-x-auto min-h-screen px-6 space-y-4 " style={{ display: borrowedBooks.length < 1 ? 'none' : 'block' }}>

                {
                    borrowedBooks.map((borrowBook, idx) => <BorrowBookCard
                        key={borrowBook._id}
                        idx={idx}
                        borrowBook={borrowBook}
                        handleReturn={handleReturn}
                        
                    ></BorrowBookCard>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;