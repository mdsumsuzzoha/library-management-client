import { useContext, useEffect, useState, } from "react";
import BorrowBookCard from "./BorrowBookCard";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProviders";

const BorrowedBooks = () => {

    // borrow books data from DataProviders bt using DataContext;
    const { user } = useContext(AuthContext);

    const [borrowedBooks, setBorrowedBooks] = useState([]);


    const url = `https://library-management-server-flame.vercel.app/borrowed?email=${user?.email}`;
    useEffect(() => {
        axios.get(url,
            // { withCredentials: true }
        )
            .then(res => {
                setBorrowedBooks(res.data);
            })
            .catch();

    }, []);

    // if (loading) {
    //     return <div className='p-10 flex justify-center'><span className="loading loading-dots loading-lg text-error"></span></div>
    // }

    // console.log(borrowBooksRe);

const handleReturn = (_id, bookId) => {
        console.log(_id, bookId);
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
                axios.patch(`https://library-management-server-flame.vercel.app/books/${bookId}/increase`,)
                .then(res=>{
                    console.log(res.data)
                    
                })
                // fetch(`https://library-management-server-flame.vercel.app/books/${bookId}/increase`, {
                //     method: 'PATCH',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify({ _id: bookId })
                // });
                // console.log(bookId);

                // delete book from borrowed qty by return the book
                axios.delete(`https://library-management-server-flame.vercel.app/borrowed/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            const remaining = borrowedBooks.filter(borrowBook => borrowBook._id !== _id);
                            setBorrowedBooks(remaining);
                            Swal.fire({
                                title: "Returned",
                                text: "Your Book has been Returned.",
                                icon: "success"
                            });
                        }
                    })
                // fetch(`https://library-management-server-flame.vercel.app/borrowed/${id}`, {
                //     method: 'DELETE'
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         // console.log(data)


                //     })

            }
        });
        //   .then((result) => {

        //     if (result.isConfirmed) {

        //       window.location.href = '/';
        //     }
        //   });
        // fetch(`https://library-management-server-flame.vercel.app/borrowed?email=${id}`, {
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
                            borrowedBooks.map((borrowBook, idx) => <BorrowBookCard
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