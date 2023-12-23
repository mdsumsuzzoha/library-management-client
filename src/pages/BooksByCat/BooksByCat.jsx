import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BooksByCat = () => {
    // const books = useLoaderData();
    const { cat } = useParams();

    const [books, setBooks] = useState([]);

    const url = `http://localhost:5000/booksByCat?category=${cat}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    console.log(cat);
    console.log(books);
    return (<div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {books.map(book => <div key={book._id}
            className="product bg-base-100 shadow-xl" >
            <img src={book?.img} alt="" className="" />
            <div className='product-info'>
                <h6 className='product-name'>{book?.name}</h6>
                <p>{book?.author}</p>
                <p>Category: {book?.category}</p>
                <p>Rating: {book?.rating} Stars</p>
                {/* <BookRating rating={rating} ></BookRating> */}
            </div>
            <Link to={`/bookDetails/${book._id}`} ><button className='btn-cart'>Details</button></Link>

            {/* <figure className="px-10 pt-10">
                <img src={book?.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{book?.name}</h2>
                <p>{book?.author}</p>
                <div className="card-actions">
                    <Link to={`/checkout/${book?._id}`}><button className="btn btn-primary">Book Now</button></Link>
                </div>
            </div> */}
        </div >
        )}
    </div>



    );
};

export default BooksByCat;