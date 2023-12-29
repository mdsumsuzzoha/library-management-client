import { Box, Rating, } from "@mui/material";
import PropTypes from 'prop-types';

const BookRating = ({ rating }) => {
    // console.log(typeof rating)
    
    let formattedRating = 0;
    if (typeof rating === 'number') {
        formattedRating = parseFloat(rating.toFixed(1));
    } else {
        formattedRating = parseFloat(parseFloat(rating).toFixed(1));
    }
    // console.log(typeof formattedRating);

    return <div>
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >

            {/* This section for readonly ratings */}
            <div className="my-2 flex items-center ">
                <Rating name="read-only" value={formattedRating} precision={0.1} readOnly />
                <p className="my-1 text-sm font-semibold">({formattedRating})</p>
            </div>
        </Box>
    </div>
};

BookRating.propTypes = {
    rating: PropTypes.number

};
export default BookRating;