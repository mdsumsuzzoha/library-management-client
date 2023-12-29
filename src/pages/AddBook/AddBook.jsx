import axios from 'axios';
import { useContext } from 'react';
import { useForm, } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProviders';
import Forbidden from '../ErrorPage/Forbidden';


const AddBook = () => {
  const { user } = useContext(AuthContext);
  const adminEmail = 'abc_librarian@email.com';
  const isAuthorized = user.email === adminEmail;
  // console.log(isAuthorized);

  const { register, handleSubmit, formState: { errors }, reset, getValues } = useForm();

  const handleAddBook = async () => {
    try {

      const formData = {
        name: getValues('name'),
        author: getValues('author'),
        img: getValues('img'),
        description: getValues('description'),
        qty: parseInt(getValues('qty'), 10),
        rating: parseFloat(getValues('rating')),
        ISBN: getValues('ISBN'),
        publisher: getValues('publisher'),
        pages: parseInt(getValues('pages'), 10),
        category: getValues('category'),
        language: getValues('language'),
        publishedYear: getValues('publishedYear'),
      };
      // console.log(formData);

      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm"
      }).then((result) => {
        if (result.isConfirmed) {
          axios.post('https://library-management-server-flame.vercel.app/addBook', formData, { withCredentials: true })
            .then(res => {
              // console.log(res.data)
              if (res.data.insertedId) {
                reset();
                Swal.fire({
                  title: "Succeded",
                  text: "Your Book has been added.",
                  icon: "success"
                });
                // console.log('add book succedd')
              }
            })
            .catch(error => {
              if (error) {
                Swal.fire({
                  title: "Failed",
                  text: "Your Book could not Add.",
                  icon: "error"
                });
              }
            });

        }
      });

    } catch (error) {
      // console.log(error)
    }
  }

  // Maximum words allowed in short desc
  const maxWords = 50;
  const validateWordCount = (input) => {
    const wordCount = input.trim().split(/\s+/).filter(Boolean).length; // Count words (exclude empty strings)
    return wordCount <= maxWords || `Please enter a description with a maximum of ${maxWords} words`;
  };

  return (
    <> {isAuthorized ? null : <Forbidden />}
      <div className={isAuthorized ? 'block' : 'hidden'}>
        <div className="card shrink-0 w-full max-w-5xl shadow-2xl mx-auto ">
          <form onSubmit={handleSubmit(handleAddBook)} className="card-body">
            <div className='grid grid-cols-2 gap-6'>
              {/* Books Name */}
              <div className="form-control">
                <label className="label">
                  <span className="text-left text-sm">Name</span>
                </label>
                <input name='name'
                  {...register("name")}
                  // defaultValue={name}
                  className="input input-bordered" required />
              </div>
              {/* Author Name section */}
              <div className="form-control">
                <label className="label">
                  <span className="text-left text-sm">Author Name</span>
                </label>
                <input
                  {...register("author")}
                  // defaultValue={author}
                  className="input input-bordered" required />
              </div>
            </div>

            <div className='grid grid-cols-2 gap-6'>
              {/* Books Category sections */}
              <div className="form-control">
                <label className="label">
                  <span className="text-left text-sm">Category </span>
                </label>
                <select
                  {...register("category", { required: true })}
                  aria-invalid={errors.category ? "true" : "false"}
                  className="input input-bordered"
                >
                  <option value="">Select Category</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Sci-Fi">Science-Fiction</option>
                  <option value="Comic">Comic</option>
                  <option value="Romance">Romance</option>
                  <option value="Travel">Travel</option>
                  <option value="History">History</option>
                  {/* add more category options */}
                </select>
                {errors.category?.type === 'required' && <p className='text-red-500' role="alert">Select a Category</p>}
              </div>
              {/* Books Cover Image section */}
              <div className="form-control">
                <label className="label">
                  <span className="text-left text-sm">{`Book Image (url)`}</span>
                </label>
                <input
                  {...register("img")}
                  // defaultValue={img}
                  className="input input-bordered" required />
              </div>
            </div>

            {/* Books Short description sec. */}
            <div className="form-control">
              <label className="label">
                <span className="text-left text-sm">Short description</span>
              </label>
              <textarea
                {...register('description', { validate: validateWordCount })}
                // defaultValue={description}
                aria-invalid={errors.description ? 'true' : 'false'}
                className="input input-bordered"
                required
              />
              {errors.description && (
                <p role="alert" className="text-red-500">
                  {errors.description.message}
                </p>
              )}

            </div>

            <div className='grid grid-cols-2 gap-6'>
              {/* Quantity of the book sec */}
              <div className="form-control">
                <label className="label">
                  <span className="text-left text-sm">Quantity</span>
                </label>
                <input

                  {...register('qty', {
                    pattern: {
                      value: /^\d+$/,
                      // value: /^[0-9]{1}$/, // Regular expression pattern for the format 00.00
                      message: "Enter positive number only & Don't use fraction!",
                    },
                  })}
                  // defaultValue={qty}
                  className="input input-bordered"
                />
                {errors.qty && (
                  <p style={{ color: 'red' }}>{errors.qty.message}</p>
                )}

              </div>
              {/* Rating section */}
              <div className="form-control">
                <label className="label">
                  <span className="text-left text-sm">Rating </span>
                </label>
                <input
                  {...register('rating', {
                    pattern: {
                      value: /^[0-9]{1}\.[0-9]{1}$/, // Regular expression pattern for the format 00.00
                      message: 'Please enter a number in format 0.0',
                    },
                    validate: {
                      lessThanFive: (value) =>
                        parseFloat(value) <= 5 || 'Value must be less than or equal to 5',
                      greaterThanZero: (value) =>
                        parseFloat(value) >= 0 || 'Value must be greater than or equal to 0',
                    },
                  })}
                  // defaultValue={rating}
                  className="input input-bordered"
                />
                {errors.rating && (
                  <p style={{ color: 'red' }}>{errors.rating.message}</p>
                )}
              </div>

            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              {/* ISBN section */}
              <div className="form-control">
                <label className="label">
                  <span className="text-left text-sm">ISBN Number </span>
                </label>
                <input
                  {...register("ISBN",)}
                  // defaultValue={ISBN}
                  className="input input-bordered" />
              </div>
              {/* published_date section */}
              <div className="form-control">
                <label className="label">
                  <span className="text-left text-sm">Published Year </span>
                </label>
                <input
                  {...register("publishedYear",)}
                  // defaultValue={publishedYear}
                  placeholder="YYYY"
                  className="input input-bordered" />
              </div>

              {/* pages section */}
              <div className="form-control">
                <label className="label">
                  <span className="text-left text-sm">Pages </span>
                </label>
                <input

                  {...register('pages', {
                    pattern: {
                      value: /^\d+$/,
                      // value: /^[0-9]{1}$/, // Regular expression pattern for the format 00.00
                      message: "Enter positive number only & Don't use fraction!",
                    },
                  })}
                  // defaultValue={pages}
                  className="input input-bordered"
                />
                {errors.pages && (
                  <p style={{ color: 'red' }}>{errors.pages.message}</p>
                )}
              </div>
            </div>
            <div className='grid grid-cols-2 gap-6'>
              {/* publisher section */}
              <div className="form-control">
                <label className="label">
                  <span className="text-left text-sm">publisher </span>
                </label>
                <input
                  {...register("publisher", { min: 0, max: 5 })}
                  // defaultValue={publisher}
                  aria-invalid={errors.publisher ? 'true' : "false"}
                  placeholder="publisher"
                  className="input input-bordered" />
                {errors.publisher && <p role="alert" className='text-red-500'>error</p>}
              </div>
              {/* language section */}
              <div className="form-control">
                <label className="label">
                  <span className="text-left text-sm">Rating </span>
                </label>
                <input
                  {...register("language", { min: 0, max: 5 })}
                  // defaultValue={language}
                  aria-invalid={errors.language ? 'true' : "false"}
                  placeholder="Language"
                  className="input input-bordered" />
                {errors.language && <p role="alert" className='text-red-500'>error</p>}
              </div>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Add Book</button>
            </div>
          </form>

        </div>
      </div>
    </>
  );
};

export default AddBook;
