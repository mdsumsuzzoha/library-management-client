import PropTypes from 'prop-types';
const BorrowBookCard = ({idx, borrowBook, handleReturn }) => {
    return (
        <tr>
            {/* column 1 */}
            <th>
                <div className="font-bold text-xl">{idx + 1}</div>
                
            </th>
            {/* column 2 */}
            <td>
                <div className="flex items-center gap-3 ">
                    <div className="avatar">
                        <div className="w-32 object-contain rounded">
                            <img src={borrowBook?.img} alt="Avatar CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-lg">{borrowBook?.bookName}</div>
                        <div className=" font-bold">{borrowBook?.author}</div>
                        <div className=" opacity-50">Category: {borrowBook?.category}</div>
                    </div>
                </div>
            </td>
            {/* column 3 */}
            <td>
                <span className="badge badge-ghost badge-sm my-2">About {borrowBook?.bookName}</span>
                <br />
                <div className="text- w-full max-w-xl">{borrowBook?.description}l Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi alias ipsam quae repellat sint voluptatem odio ut, architecto nemo delectus libero praesentium nam saepe culpa, sunt animi? Deleniti ex, sunt, id distinctio expedita commodi aliquid officiis nemo dicta ducimus perspiciatis pariatur explicabo cupiditate recusandae aut, incidunt culpa aliquam ea debitis.</div>
                {/* {bookedItem.facility.map((x,idx)=><span key={idx}>{x.name}</span>)} */}
                {/* <br /> */}
            </td>
            {/* column 4 */}
            <td>{borrowBook?.borrowDate}</td>
            {/* column 5 */}
            <td>{borrowBook?.returnDate}</td>
            <th>
                <button onClick={()=>handleReturn(borrowBook._id, borrowBook.bookId)} className="btn btn-outline btn-warning">Return Now</button>
            </th>
        </tr>
    );
};
BorrowBookCard.propTypes = {
    borrowBook: PropTypes.object,
    idx: PropTypes.number,
    handleReturn: PropTypes.func,
  };
export default BorrowBookCard;