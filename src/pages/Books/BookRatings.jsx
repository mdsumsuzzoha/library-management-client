
const BookRating = ({ rating }) => {


    const renderStars = () => {
        const starArray = [];
        const maxStars = 5;
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            starArray.push(<input key={`full-${i}`} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            // <i key={`full-${i}`} className="icon-solid-star text-yellow-500"></i>
            );
        }

        if (hasHalfStar) {
            starArray.push(
                // <input key="half" type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input key="half" type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            
            // <i key="half" className="icon-half-star text-yellow-500"></i>
            );
        }

        const remainingStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < remainingStars; i++) {
            starArray.push(
                <input key={`full-${i}`} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            // <i key={`empty-${i}`} className="icon-empty-star text-gray-300"></i>
            );
        }

        console.log(starArray);
        
        return starArray;
    };

    return <div className="rating rating-lg rating-half">{renderStars()}</div>;
};


export default BookRating;