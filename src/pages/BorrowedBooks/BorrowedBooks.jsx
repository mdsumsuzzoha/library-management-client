import { useContext, useEffect, useState, } from "react";
import BorrowBookCard from "./BorrowBookCard";
import { DataContext } from "../../providers/DataProvider";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";

const BorrowedBooks = () => {

    // borrow books data from DataProviders bt using DataContext;
    const {loading, } =useContext(AuthContext);
    const { borrowBooks } = useContext(DataContext);
    const [borrowBooksRe, setBorrowBooksRe] = useState(borrowBooks);

    useEffect(()=>{
        // setLoading(true);
        // setBorrowBooksRe(borrowBooks);
    },[borrowBooks])


    if (loading) {
        return <div className='p-10 flex justify-center'><span className="loading loading-dots loading-lg text-error"></span></div>
    }

    // console.log(borrowBooksRe);

    const handleReturn = (id, bookId) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Return"
        }).then((result) => {
            if (result.isConfirmed) {
                // increase book qty by return the book
                fetch(`http://localhost:5000/books/${bookId}/increase`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ _id: bookId })
                });
                // console.log(bookId);

                // delete book from borrowed qty by return the book
                fetch(`http://localhost:5000/borrowed/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            const remaining = borrowBooksRe.filter(borrowBook=>borrowBook._id !== id);
                            setBorrowBooksRe(remaining);
                            Swal.fire({
                                title: "Returned",
                                text: "Your Book has been Returned.",
                                icon: "success"
                            });
                        }

                    })

            }
        });
        //   .then((result) => {

        //     if (result.isConfirmed) {

        //       window.location.href = '/';
        //     }
        //   });
        // fetch(`http://localhost:5000/borrowed?email=${id}`, {
        //     method: 'DELETE'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         // if (data.deletedCount > 0) {
        //         //     const remaining = bookings.filter(booking => booking._id !=id);
        //         //     setBookings(remaining);
        //         // }
        //     }
        //     )
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                </label>
                            </th>
                            <th>Book Name</th>
                            <th>Book Description</th>
                            <th>Borrow Date</th>
                            <th>Returning Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            borrowBooksRe.map((borrowBook, idx) => <BorrowBookCard
                                key={borrowBook._id}
                                idx={idx}
                                borrowBook={borrowBook}
                                handleReturn={handleReturn}
                            ></BorrowBookCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BorrowedBooks;