import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';

const BookDetails = () => {
    const { id } = useParams();
    const { user, setLoading } = useContext(AuthContext);
    // console.log(user?.displayName);

    const [bookDetails, setBookDetails] = useState([]);
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    // console.log(bookDetails);
    const { img, name, author, description, qty, publisher, published_date, pages, } = bookDetails;

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/books/${id}`)
            .then(res => res.json())
            .then(data => setBookDetails(data))
    }, [])


    const handleBorrowSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const date = form.date.value;
        console.log(name, email, date);
        console.log('inside from Modal')
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Submit"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Submited",
                icon: "success"
              });
              onCloseModal();
            }
          });
    }

    const handleRead = async () => {

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
                            <button onClick={onOpenModal} className="btn btn-outline btn-secondary">Borrow</button>
                            <button onClick={handleRead} className="btn btn-outline btn-info">Read Now</button>

                        </div>
                    </div>
                </div>

                {/* Modal Details */}

                <div>
                    <Modal open={open} onClose={onCloseModal} center
                    >
                        <div>
                            <form onSubmit={handleBorrowSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" disabled />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" disabled />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Return Date</span>
                                    </label>
                                    <input type="date" name="date" className="input input-bordered" required />
                                </div>
                                <div className="grid grid-cols-2 gap-6 w-44 mx-auto my-6">
                                    <div className="">
                                        <input type="submit" className="btn" value="Submit" />
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