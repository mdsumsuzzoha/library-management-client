import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './BooksByCat.css';
import axios from "axios";
import { DataContext } from "../../providers/DataProvider";
import BookRating from "../BookRating/BookRating";

const BooksByCat = () => {
    const { dataLoading, setDataLoading, } = useContext(DataContext);
    const { cat } = useParams();
    const [books, setBooks] = useState([]);

    const url = `https://library-management-server-flame.vercel.app/booksByCat?category=${cat}`;
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setDataLoading(false);
                setBooks(res.data)

            })
    }, [])

    if (dataLoading) {
        return <div className='p-10 flex justify-center'><span className="loading loading-spinner loading-lg text-warning"></span></div>
    }

    return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 md:mx-4 justify-items-center">
        {books.map(book => <div key={book._id}
            className="book-cointainer  shadow-xl" >
            <img src={book?.img} alt=" Image not found" className="" />
            <div className='book-info'>
                <h6 className='text-xl font-bold'>{book?.name}</h6>
                <p className="font-semibold">{book?.author}</p>
                <p>Category: {book?.category}</p>
                <div className="flex items-center gap-4">
                <BookRating rating={book.rating}></BookRating>
                <p>Available: {book?.qty}</p>
                </div>
            </div>
            <Link to={`/bookDetails/${book._id}`} ><button className='btn-detail'>Details</button></Link>

        </div >
        )}
    </div>



    );
};

export default BooksByCat;