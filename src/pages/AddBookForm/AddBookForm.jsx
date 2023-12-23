import { useState } from 'react';
// import axios from 'axios';

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    quantity: 0,
    author: '',
    category: '',
    description: '',
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await axios.post('/api/books', formData);
    //   console.log('New book added:', response.data);
    //   // Optionally, perform other actions after adding the book
    // } catch (error) {
    //   console.error('Error adding book:', error);
    // }
  };

  return (
    <div className="card shrink-0 w-full max-w-5xl shadow-2xl mx-auto bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className='grid grid-cols-2 gap-6'>
          {/* Books Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered" required />
          </div>
          {/* Author Name section */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <input type="text"
              name="author"
              placeholder="Author"
              value={formData.author}
              onChange={handleChange}
              className="input input-bordered" required />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          {/* Books Category sections */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category </span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="input input-bordered"
            >
              <option value="">Select Category</option>
              <option value="Novel">Novel</option>
              <option value="Thriller">Thriller</option>
              <option value="History">History</option>
              <option value="Drama">Drama</option>
              <option value="Sci-Fi">Sci-Fi</option>
              {/* Add other category options */}
            </select>
          </div>
          {/* Books Cover Image section */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Book Image</span>
            </label>
            <input type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              className="input input-bordered" required />
          </div>
        </div>

        {/* Books Short description sec. */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short description</span>
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="Short Description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered"></textarea>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          {/* Quantity of the book sec */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input type="number"
              name="quantity"
              placeholder="Quantity of the book"
              value={formData.quantity}
              onChange={handleChange}
              className="input input-bordered" required />
          </div>
          {/* Rating section */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating </span>
            </label>
            <input type="number"
              name="rating"
              placeholder="Rating"
              value={formData.rating}
              onChange={handleChange}
              className="input input-bordered" required />
          </div>
        </div>
        {/*  */}
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div> */}
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Add Book</button>
        </div>
      </form>

    </div>
  );
};

export default AddBookForm;
