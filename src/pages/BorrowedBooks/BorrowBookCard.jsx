import PropTypes from 'prop-types';
const BorrowBookCard = ({ idx, borrowBook, handleReturn }) => {

    const { _id, bookName, author, category,bookDebtor,  description, img, borrowDate, returnDate, bookId } = borrowBook;
    // console.log(_id, bookId);
    // console.log(borrowBook);


    return (
        <div className="stats bg-neutral text-neutral-content border w-full mx-auto">

            <div className="stat w-14 m-auto">
                <div className="stat-value">{idx + 1}</div>
            </div>
            <div className="stat">
                <div className="">
                    <div className="w-36 h-36 rounded">
                        <img src={img} className='w-36 h-36 object-fill' alt="Avatar CSS Component" />
                    </div>
                </div>
            </div>
            <div className="stat w-72">
                <div className="text-2xl font-bold">{bookName}</div>
                <div className="text-lg font-semibold">{author}</div>
                <div className="">Categoty: {category}</div>
            </div>
            <div className="stat w-80">
                <div className="test-sm">Descriptions</div>
                <div className="">{description}</div>
            </div>
            <div className="stat w-60 m-auto text-start">
                <div className="">Name: {bookDebtor}</div>
                <div className="font-semibold">Borrowed: {borrowDate}</div>
                <div className="font-semibold">To be Return: {returnDate}</div>
            </div>
            <div className="stat m-auto">
                <button onClick={() => handleReturn(_id, bookId)} className="btn btn-outline btn-warning">Return Now</button>
            </div>

        </div>

    );
};
BorrowBookCard.propTypes = {
    borrowBook: PropTypes.object,
    idx: PropTypes.number,
    handleReturn: PropTypes.func,
};
export default BorrowBookCard;