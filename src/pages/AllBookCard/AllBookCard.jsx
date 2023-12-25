// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import BookRating from '../BookRatings/BookRatings';
import './AllBookCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const AllBookCard = ({ book, handleDeleteBook }) => {
    // console.log(book);

    const { _id, img, name, category, author, rating, } = book;
    // const handleAddToCart = props.handleAddToCart;


    return (
        <div key={_id}
            className="card-book-cointainer bg-base-100 shadow-xl" >
            <img src={img} alt="" className="" />
            <div className='card-book-info'>
                <h6 className='card-book-name'>{name}</h6>
                <p>{author}</p>
                <p>Category: {category}</p>
                <BookRating rating={rating}></BookRating>
            </div>
            <div className='flex justify-around pb-4 btn-container'>
                <Link to={`/bookUpdate/${_id}`} ><button className='btn btn-sm btn-outline btn-info'>Update</button></Link>
                <Link onClick={() => handleDeleteBook(_id)} ><button className='btn btn-sm btn-outline btn-error'>Delete</button></Link>
            </div>
        </div >
    );
};
AllBookCard.propTypes = {
    book: PropTypes.object,
    handleDeleteBook: PropTypes.func,
};
export default AllBookCard;