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
    const { _id, name, author,  img, description, qty, rating, ISBN, pages, publisher, language } = book;
    const { control, register, handleSubmit, formState: { errors }, reset,   } = useForm();

    const url = `https://library-management-server-flame.vercel.app/books/${id}`;
    useEffect(() => {
        axios.get(url,)
            .then(res => {
                setBook(res.data);
            }).catch()
            ;
    }, [])


    const handleAddBook = async (data) => {
        // console.log(data)
        const bookInfo = data;
        try {
            axios.put(`https://library-management-server-flame.vercel.app/books/${_id}`, bookInfo,)
                .then(res => {
                    console.log(res.data)
                    if (res.data.modifiedCount > 0) {
                        reset();
                        Swal.fire({
                            title: "Succeded",
                            text: "Your Book has been Updated.",
                            icon: "success"
                        });
                        // console.log('add book succedd')
                    }
                })

        } catch (error) {
            console.log(error)
        }
    }


    // Maximum words allowed in short desc
    const maxWords = 50;
    const validateWordCount = (input) => {
        const wordCount = input.trim().split(/\s+/).filter(Boolean).length; // Count words (exclude empty strings)
        return wordCount <= maxWords || `Please enter a description with a maximum of ${maxWords} words`;
    };



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
                            defaultValue={name}
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
                            defaultValue={author}
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
                            <option value="Fantasy">Fantasy</option>
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
                            defaultValue={img}
                            placeholder="Image URL"
                            className="input input-bordered" required />
                    </div>
                </div>

                {/* Books Short description sec. */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <textarea
                        id="description"
                        {...register('description', { validate: validateWordCount })}
                        defaultValue={description}
                        aria-invalid={errors.description ? 'true' : 'false'}
                        placeholder="Short description"
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
                            <span className="label-text">Quantity</span>
                        </label>
                        <input
                            type="text"
                            {...register('qty', {
                                pattern: {
                                    value: /^\d+$/,
                                    // value: /^[0-9]{1}$/, // Regular expression pattern for the format 00.00
                                    message: "Enter positive number only & Don't use fraction!",
                                },
                            })}
                            defaultValue={qty}
                            className="input input-bordered"
                        />
                        {errors.qty && (
                            <p style={{ color: 'red' }}>{errors.qty.message}</p>
                        )}

                    </div>
                    {/* Rating section */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating </span>
                        </label>
                        <input
                            type="text"
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
                            defaultValue={rating}
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
                            <span className="label-text">ISBN Number </span>
                        </label>
                        <input type="text"
                            {...register("ISBN",)}
                            defaultValue={ISBN}
                            placeholder="ISBN"
                            className="input input-bordered" />
                    </div>
                    {/* published_date section */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Published date </span>
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
                            <span className="label-text">Pages </span>
                        </label>
                        <input
                            type="text"
                            {...register('pages', {
                                pattern: {
                                    value: /^\d+$/,
                                    // value: /^[0-9]{1}$/, // Regular expression pattern for the format 00.00
                                    message: "Enter positive number only & Don't use fraction!",
                                },
                            })}
                            defaultValue={pages}
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
                            <span className="label-text">publisher </span>
                        </label>
                        <input type="text"
                            {...register("publisher", { min: 0, max: 5 })}
                            defaultValue={publisher}
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
                            defaultValue={language}
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
