// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import BookRating from './BookRatings';
import './Book.css';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    // console.log(book);

    const {_id, img, name, category, author, rating, } = book;
    // const handleAddToCart = props.handleAddToCart;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>{author}</p>
                <p>Category: {category}</p>
                <p>Rating: {rating} Stars</p>
                <BookRating rating={rating} ></BookRating>
            </div>
            <Link to={`/bookDetails/${_id}`} ><button className='btn-cart'>Details</button></Link>
            {/* <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button> */}
        </div>
    );
};

export default Book;