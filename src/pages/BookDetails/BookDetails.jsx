import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import axios from "axios";
// import { DataContext } from "../../providers/DataProvider";

const BookDetails = () => {
    const { id } = useParams();
    const { user, } = useContext(AuthContext);
    // const { borrowBooks } = useContext(DataContext);

    // const [borrowBooksRe, setBorrowBooksRe] = useState(borrowBooks);
    // console.log(borrowBooksRe);

    const [borrowedBooks, setBorrowedBooks] = useState([]);


    const [bookDetails, setBookDetails] = useState([]);
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    // console.log(bookDetails);

    const { _id, img, name, category, author, description, qty, publisher, published_date, pages, } = bookDetails;

    useEffect(() => {
        axios.get(`https://library-management-server-flame.vercel.app/books/${id}`)
            .then(res => {
                setBookDetails(res.data)
            })
    }, [open])

    const url = `https://library-management-server-flame.vercel.app/borrowed?email=${user?.email}`;
    useEffect(() => {
        axios.get(url,)
            .then(res => {
                setBorrowedBooks(res.data);
            })
            .catch();

    }, [open]);

    // handle borrow btn and show a modal
    const handleBorrow = () => {
        const checkAlredyBorrowed = borrowedBooks.filter(borrowBook => borrowBook.bookId === _id)
        // console.log(checkAlredyBorrowed);
        if (checkAlredyBorrowed.length < 1) {
            return onOpenModal();
        }
        Swal.fire({
            title: "Try others..",
            text: "You already Borrowed this book",
            icon: "error"
        });

    }

    // hendle submit to borrow book after input return date
    const handleBorrowSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const bookDebtor = form.name.value;
        const returnDate = form.date.value;
        const borrowDate = new Date().toISOString().split('T')[0];

        const borrow = {
            bookId: _id,
            bookName: name,
            img,
            author,
            category,
            email,
            bookDebtor,
            borrowDate,
            returnDate,
            description,
        }

        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Submit"
        }).then((result) => {
            if (result.isConfirmed) {
                // add to server this book info in borrow
                axios.patch(`https://library-management-server-flame.vercel.app/books/${_id}/decrease`)
                    .then(res=>{
                        console.log(res.data);
                    });
                axios.post('https://library-management-server-flame.vercel.app/borrowed', borrow)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Submited",
                                icon: "success"
                            });
                            onCloseModal();
                        }
                    })
                    .catch();

            }
        })

    }



    const handleRead = async () => {
        console.log();

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="w-full max-w-sm rounded-lg shadow-2xl " />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-4 text-lg">Author: {author}</p>
                        <p className="py-2">Ratings: {''}</p>
                        <p className="py-2 text-lg">Available Quantity: <span className="badg text-lg font-bold p-2">{qty}</span> </p>
                        <p className="py-4">{description}</p>
                        <div className="py-4 overflow-x-auto card shrink-0 w-full max-w-sm">
                            <table className="table">
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th className="px-0">publisher</th>
                                        <td className="px-0">{publisher}</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <th className="px-0">published_date</th>
                                        <td className="px-0">{published_date}</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <th className="px-0">pages</th>
                                        <td className="px-0">{pages}</td>
                                    </tr>
                                    {/* row 4 */}
                                    <tr>
                                        <th className="px-0">ISBN</th>
                                        <td className="px-0">{bookDetails?.ISBN}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="grid grid-cols-2 gap-6 w-64">
                            <button onClick={handleBorrow} className="btn btn-outline btn-secondary"
                                disabled={qty < 1}
                            >Borrow</button>
                            <button onClick={handleRead} className="btn btn-outline btn-info">Read Now</button>

                        </div>
                    </div>
                </div>

                {/* Modal Details */}

                <div >
                    <Modal open={open} onClose={onCloseModal} center
                    >
                        <div >
                            <form onSubmit={handleBorrowSubmit} className="card-body w-full">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" disabled />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Return Date</span>
                                    </label>
                                    <input type="date" name="date" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <div className=" text-center pt-4">
                                        <input type="submit" className="btn btn-outline btn-secondary" value="Submit" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;