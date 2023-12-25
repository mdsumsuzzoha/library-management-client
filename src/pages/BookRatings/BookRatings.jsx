import { Box, Rating, } from "@mui/material";
import PropTypes from 'prop-types';

const BookRating = ({ rating }) => {

    // const [value, setValue] = React.useState(rating);
    const formattedRating = parseFloat(rating).toFixed(1);

    return <div>
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >

            {/* This section for readonly ratings */}
            <div className="my-2 flex items-center ">
                <p className="my-1 text-sm font-semibold">({formattedRating})</p>
                <Rating name="read-only" value={formattedRating} precision={0.1} readOnly />
            </div>
        </Box>
    </div>
};

BookRating.propTypes = {
    rating: PropTypes.number
};
export default BookRating;