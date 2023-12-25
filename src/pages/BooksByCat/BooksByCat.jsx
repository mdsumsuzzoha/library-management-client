import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookRating from "../BookRatings/BookRatings";
import './BooksByCat.css';

const BooksByCat = () => {
    const { cat } = useParams();
    const [books, setBooks] = useState([]);

    const url = `http://localhost:5000/booksByCat?category=${cat}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
    }, [])

    return (<div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {books.map(book => <div key={book._id}
            className="book-cointainer bg-base-100 shadow-xl" >
            <img src={book?.img} alt="" className="" />
            <div className='book-info'>
                <h6 className='book-name'>{book?.name}</h6>
                <p>{book?.author}</p>
                <p>Category: {book?.category}</p>
                <BookRating rating={book.rating}></BookRating>
            </div>
            <Link to={`/bookDetails/${book._id}`} ><button className='btn-detail'>Details</button></Link>

        </div >
        )}
    </div>



    );
};

export default BooksByCat;