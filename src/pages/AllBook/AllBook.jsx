import { useContext, useEffect, useState } from 'react';
// import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
// import Cart from '../Cart/Cart';
import './AllBook.css';
import Book from '../Books/Book';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProviders';
// import {  useLoaderData } from 'react-router-dom';

const AllBook = () => {
    const { loading, setLoading } = useContext(AuthContext);
    const [books, setBooks] = useState([]);
    // ?email=${user?.email}

    const url = `http://localhost:5000/allBooks`;
    useEffect(() => {
        setLoading(true);
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBooks(res.data);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <div className='p-10 flex justify-center'><span className="loading loading-dots loading-lg text-error"></span></div>
    }

    // console.log(books);

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    books.map(book => <Book
                        key={book._id}
                        book={book}
                    // handleAddToCart={handleAddToCart}
                    ></Book>)
                }
            </div>
            {/* <div className="cart-container">
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link className='proceed-link' to="/orders">
                        <button className='btn-proceed'>Review Order</button>
                    </Link>
                </Cart>
            </div> */}
        </div>
    );
};

export default AllBook;