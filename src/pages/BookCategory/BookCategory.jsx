// import { useHistory } from 'react-router-dom'; // Assuming you're using React Router for navigation

import { Link } from "react-router-dom";
import BooksByCat from "../BooksByCat/BooksByCat";

const BookCategory = () => {
  //   const history = useHistory();

  const handleCategoryClick = () => {
    // Navigate to a new page for the selected category's books
    // history.push(`/books/${categoryName}`); // Replace this with your desired route
  };

  return (
    <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
      <div className="card bg-base-100 shadow-xl" >
        <figure className="px-10 pt-10">
          <img src='' alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Fantasy</h2>
          <div className="card-actions">
            {/* <button className="btn btn-primary">
              <BooksByCat></BooksByCat>
              See Books</button> */}
            <Link to={`/booksByCat/${"Fantasy"}`} ><button className="btn btn-primary">See Books</button></Link>
          </div>
        </div>
      </div >
      <div className="card bg-base-100 shadow-xl" >
        <figure className="px-10 pt-10">
          <img src='' alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Mystery</h2>
          <div className="card-actions">
            <Link to={`/bookByCat:${'Mystery'}`}><button className="btn btn-primary">See Books</button></Link>
          </div>
        </div>
      </div >
      <div className="card bg-base-100 shadow-xl" >
        <figure className="px-10 pt-10">
          <img src='' alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Science Fiction</h2>
          <div className="card-actions">
            <Link to={`/booksByCat/${''}`}><button className="btn btn-primary">See Books</button></Link>
          </div>
        </div>
      </div >
      <div className="card bg-base-100 shadow-xl" >
        <figure className="px-10 pt-10">
          <img src='' alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Romance</h2>
          <div className="card-actions">
            <Link to={`/booksByCat/${''}`}><button className="btn btn-primary">See Books</button></Link>
          </div>
        </div>
      </div >
      <div className="card bg-base-100 shadow-xl" >
        <figure className="px-10 pt-10">
          <img src='' alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Thriller</h2>
          <div className="card-actions">
            <Link to={`/booksByCat/${''}`}><button className="btn btn-primary">See Books</button></Link>
          </div>
        </div>
      </div >
      <div className="card bg-base-100 shadow-xl" >
        <figure className="px-10 pt-10">
          <img src='' alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Non-fiction</h2>
          <div className="card-actions">
            <Link to={`/booksByCat/${''}`}><button className="btn btn-primary">See Books</button></Link>
          </div>
        </div>
      </div >

      {/* <div>
        <div className="book-category" onClick={() => handleCategoryClick('Fantasy')}>
          <img src="fantasy_image_url_here" alt="Fantasy" />
          <p>Fantasy</p>
        </div>
        <div className="book-category" onClick={() => handleCategoryClick('Mystery')}>
          <img src="mystery_image_url_here" alt="Mystery" />
          <p>Mystery</p>
        </div>
        <div className="book-category" onClick={() => handleCategoryClick('Science Fiction')}>
          <img src="science_fiction_image_url_here" alt="Science Fiction" />
          <p>Science Fiction</p>
        </div>
        <div className="book-category" onClick={() => handleCategoryClick('Romance')}>
          <img src="romance_image_url_here" alt="Romance" />
          <p>Romance</p>
        </div>
        <div className="book-category" onClick={() => handleCategoryClick('Thriller')}>
          <img src="thriller_image_url_here" alt="Thriller" />
          <p>Thriller</p>
        </div>
        <div className="book-category" onClick={() => handleCategoryClick('Non-fiction')}>
          <img src="non_fiction_image_url_here" alt="Non-fiction" />
          <p>Non-fiction</p>
        </div>
      </div> */}


    </div>
  );
};

export default BookCategory;
