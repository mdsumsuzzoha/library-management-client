import { Link } from "react-router-dom";

const BookCategory = () => {

  return (
    <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4  gap-6 px-4">
      <div className="card bg-stone-300	 shadow-xl" >
        <figure className="px-10 pt-10 w-full max-w-sm rounded">
          <img src='https://i.ibb.co/1Q1G6Q9/Fantasy-cover.jpg' alt="Shoes" className="rounded-xl object-fill h-64 w-64" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Fantasy</h2>
          <div className="card-actions">
            <Link to={`/booksByCat/${"Fantasy"}`} ><button className="btn btn-outline btn-info btn-sm">See Books</button></Link>
          </div>
        </div>
      </div >
      <div className="card bg-stone-300 shadow-xl" >
        <figure className="px-10 pt-10 w-full rounded">
          <img src='https://i.ibb.co/v1xKRpg/Mystery-cover.jpg' alt="Shoes" className="rounded-xl object-fill h-64 w-64" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Mystery</h2>
          <div className="card-actions">
            <Link to={`/booksByCat/${'Mystery'}`}><button className="btn btn-outline btn-info btn-sm">See Books</button></Link>
          </div>
        </div>
      </div >
      <div className="card bg-stone-300 shadow-xl" >
        <figure className="px-10 pt-10 w-full rounded">
          <img src='https://i.ibb.co/nsyp7Rc/Science-Fiction-cover.jpg' alt="Shoes" className="rounded-xl object-fill h-64 w-64" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Science-Fiction</h2>
          <div className="card-actions">
            <Link to={`/booksByCat/${'Science-Fiction'}`}><button className="btn btn-outline btn-info btn-sm">See Books</button></Link>
          </div>
        </div>
      </div >
      <div className="card bg-stone-300 shadow-xl" >
        <figure className="px-10 pt-10 w-full rounded">
          <img src='https://i.ibb.co/dcTr5CY/Romance-cover.jpg' alt="Shoes" className="rounded-xl object-fill h-64 w-64" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Romance</h2>
          <div className="card-actions">
            <Link to={`/booksByCat/${'Romance'}`}><button className="btn btn-outline btn-info btn-sm">See Books</button></Link>
          </div>
        </div>
      </div >
      <div className="card bg-stone-300 shadow-xl" >
      <figure className="px-10 pt-10 w-full rounded">
          <img src='https://i.ibb.co/LZhjxKJ/Thriller-cover.jpg' alt="Shoes" className="rounded-xl object-fill h-64 w-64" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Thriller</h2>
          <div className="card-actions">
            <Link to={`/booksByCat/${'Thriller'}`}><button className="btn btn-outline btn-info btn-sm">See Books</button></Link>
          </div>
        </div>
      </div >
      <div className="card bg-stone-300 shadow-xl" >
      <figure className="px-10 pt-10 w-full rounded">
          <img src='https://i.ibb.co/qsSjKtW/Non-fiction-Cover.jpg' alt="Shoes" className="rounded-xl object-fill h-64 w-64" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Non-fiction</h2>
          <div className="card-actions">
            <Link to={`/booksByCat/${'Non-fiction'}`}><button className="btn btn-outline btn-info btn-sm">See Books</button></Link>
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
