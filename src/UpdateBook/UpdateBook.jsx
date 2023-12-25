import axios from 'axios';
import { Controller, useForm, } from 'react-hook-form';
import Swal from 'sweetalert2';
// import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';




const UpdateBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState([]);
    const { name, author, category, img, description, qty, rating, ISBN, pages, publisher, language } = book;
    const { control, register, handleSubmit, formState: { errors }, reset, } = useForm();

    const url = `http://localhost:5000/books/${id}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBook(res.data);
            }).catch(error => {
                // Handle error here
                console.error('Error fetching borrowed books:', error);
                // You can set an error state here if needed
            });
    }, [])
    console.log(book);



    const handleAddBook = async (data) => {
        //console.log(data)
        const bookInfo = data;
        try {
            axios.put(`http://localhost:5000/books/${id}`, bookInfo, { withCredentials: true })
                .then(res => {
                    console.log(res.data)
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

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="card shrink-0 w-full max-w-5xl shadow-2xl mx-auto bg-base-100">
            <form onSubmit={handleSubmit(handleAddBook)} className="card-body">
                <div className='grid grid-cols-2 gap-6'>
                    {/* Books Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name")}
                            placeholder="Name"
                            className="input input-bordered" required />
                    </div>
                    {/* Author Name section */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <input type="text"
                            {...register("author")}
                            placeholder="Author"
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
                            {...register("category", { required: true })}
                            aria-invalid={errors.category ? "true" : "false"}
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
                        {errors.category?.type === 'required' && <p className='text-red-500' role="alert">Select a Category</p>}
                    </div>
                    {/* Books Cover Image section */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Book Image</span>
                        </label>
                        <input type="text"
                            {...register("img")}
                            placeholder="Image URL"
                            className="input input-bordered" required />
                    </div>
                </div>

                {/* Books Short description sec. */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <input type="text"
                        {...register("description", { maxLength: 200 })}
                        aria-invalid={errors.rating ? 'true' : "false"}
                        placeholder="Short description"
                        className="input input-bordered" required />
                    {errors.description && <p role="alert" className='text-red-500'>Enter description maximum 200 characters</p>}

                </div>

                <div className='grid grid-cols-2 gap-6'>
                    {/* Quantity of the book sec */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number"
                            {...register("qty", { min: 0, })}
                            aria-invalid={errors.qty ? 'true' : "false"}
                            placeholder="Quantity of the book"
                            className="input input-bordered" required />
                        {errors.qty && <p role="alert" className='text-red-500'>Qty should not be negative value</p>}

                    </div>
                    {/* Rating section */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating </span>
                        </label>
                        <input type="number"
                            {...register("rating", { min: 0, max: 5 })}
                            aria-invalid={errors.rating ? 'true' : "false"}
                            placeholder="Rating"
                            className="input input-bordered" required />
                        {errors.rating && <p role="alert" className='text-red-500'>Rating must be entered 0 to 5</p>}
                    </div>

                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* ISBN section */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating </span>
                        </label>
                        <input type="text"
                            {...register("ISBN", { min: 0, max: 5 })}
                            aria-invalid={errors.ISBN ? 'true' : "false"}
                            placeholder="ISBN"
                            className="input input-bordered" />
                        {errors.ISBN && <p role="alert" className='text-red-500'>error</p>}
                    </div>
                    {/* published_date section */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating </span>
                        </label>
                        <div className=''>
                            <Controller
                                control={control}
                                name='date-input'
                                render={({ field }) => (
                                    <DatePicker
                                        placeholderText='Select date'
                                        onChange={(date) => field.onChange(date)}
                                        selected={field.value}
                                        className="input input-bordered"
                                    />
                                )}
                            />
                        </div>
                    </div>

                    {/* pages section */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating </span>
                        </label>
                        <input type="number"
                            {...register("pages", { min: 0, })}
                            aria-invalid={errors.rating ? 'true' : "false"}
                            placeholder="pages"
                            className="input input-bordered" />
                        {errors.pages && <p role="alert" className='text-red-500'>pages are not to be negative</p>}
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    {/* publisher section */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">publisher </span>
                        </label>
                        <input type="number"
                            {...register("publisher", { min: 0, max: 5 })}
                            aria-invalid={errors.publisher ? 'true' : "false"}
                            placeholder="publisher"
                            className="input input-bordered" />
                        {errors.publisher && <p role="alert" className='text-red-500'>error</p>}
                    </div>
                    {/* language section */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating </span>
                        </label>
                        <input type="text"
                            {...register("language", { min: 0, max: 5 })}
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
    );
};

export default UpdateBook;
