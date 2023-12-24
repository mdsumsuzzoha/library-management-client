import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BorrowBookCard from "./BorrowBookCard";

const BorrowedBooks = () => {
    const { user, setLoading } = useContext(AuthContext);
    // const [userRender, setUserRender] = useState(user);
    const [borrowBooks, setBorrowBooks] = useState([]);
    console.log(user?.email);
    console.log(borrowBooks);


    const url = `http://localhost:5000/borrowed?email=${user?.email}`
    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => setBorrowBooks(data))
    }, [user])
    console.log(borrowBooks);

    const handleReturn = id => {
        console.log(id);
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
                            borrowBooks.map((borrowBook, idx) =>  <BorrowBookCard
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