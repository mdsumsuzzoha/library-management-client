import { Link } from "react-router-dom";

const BookCategory = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 justify-items-center  gap-6 px-4">
      {/* Fantasy */}
      <div className="card bg-stone-300	 shadow-xl" >
        <figure className="px-10 pt-10 w-full max-w-sm rounded">
          <img src='https://i.ibb.co/1Q1G6Q9/Fantasy-cover.jpg' alt="Shoes" className="rounded-xl object-fill h-64 w-64" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Fantasy</h2>
          <div className="card-actions">
            <Link to={`/booksByCat/${'Fantasy'}`} ><button className="btn btn-outline btn-info btn-sm">See Books</button></Link>
          </div>
        </div>
      </div >
      {/* Mystery */}
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
      {/* Science-Fiction */}
      <div className="card bg-stone-300 shadow-xl" >
        <figure className="px-10 pt-10 w-full rounded">
          <img src='https://i.ibb.co/nsyp7Rc/Science-Fiction-cover.jpg' alt="Shoes" className="rounded-xl object-fill h-64 w-64" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Science-Fiction</h2>
          <div className="card-actions">
            <Link to={`/booksByCat/${'Sci-Fi'}`}><button className="btn btn-outline btn-info btn-sm">See Books</button></Link>
          </div>
        </div>
      </div >
      {/* Comic */}
      <div className="card bg-stone-300 shadow-xl" >
        <figure className="px-10 pt-10 w-full rounded">
          <img src='https://i.ibb.co/nsyp7Rc/Science-Fiction-cover.jpg' alt="Shoes" className="rounded-xl object-fill h-64 w-64" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Comic</h2>
          <div className="card-actions">
            <Link to={`/booksByCat/${'Comic'}`}><button className="btn btn-outline btn-info btn-sm">See Books</button></Link>
          </div>
        </div>
      </div >
      {/* Romance */}
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
      {/* Travel */}
      <div className="card bg-stone-300 shadow-xl" >
        <figure className="px-10 pt-10 w-full rounded">
          <img src='https://i.ibb.co/LZhjxKJ/Thriller-cover.jpg' alt="Shoes" className="rounded-xl object-fill h-64 w-64" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Travel</h2>
          <div className="card-actions">
            <Link to={`/booksByCat/${'Travel'}`}><button className="btn btn-outline btn-info btn-sm">See Books</button></Link>
          </div>
        </div>
      </div >
      {/* History */}
      <div className="card bg-stone-300 shadow-xl" >
        <figure className="px-10 pt-10 w-full rounded">
          <img src='https://i.ibb.co/qsSjKtW/Non-fiction-Cover.jpg' alt="Shoes" className="rounded-xl object-fill h-64 w-64" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">History</h2>
          <div className="card-actions">
            <Link to={`/booksByCat/${'History'}`}><button className="btn btn-outline btn-info btn-sm">See Books</button></Link>
          </div>
        </div>
      </div >
    </div>
  );
};

export default BookCategory;
