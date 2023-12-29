
import './AllBookCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookRating from '../BookRating/BookRating';


const AllBookCard = ({ book, handleDeleteBook, }) => {

    const { _id, img, name, qty, category, author, rating, } = book;
    // const handleAddToCart = props.handleAddToCart;


    return (
        <div key={_id}
            className="card-book-cointainer shadow-xl" >
            <img src={img} alt=" Image not found" className="" />
            <div className='card-book-info'>
                <h6 className='text-xl font-bold'>{name}</h6>
                <p className='font-semibold'>{author}</p>
                <p>Category: {category}</p>
                <div className='flex gap-4 items-center'>
                    <BookRating rating={rating}></BookRating>
                    <p>Available: {qty}</p>
                </div>
            </div>
            <div className='flex justify-around pb-4 btn-container'>
                <Link to={`/bookUpdate/${_id}`} ><button className='btn btn-sm btn-outline btn-accent'>Update</button></Link>
                <Link to={`/bookDetails/${_id}`} ><button className='btn btn-sm btn-outline btn-info'>Details</button></Link>
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