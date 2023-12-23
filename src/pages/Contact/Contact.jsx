import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
        <div className="min-h-full w-full pt-10 mx-auto ">
            <div className="flex flex-col items-center w-10/12 mx-auto lg:flex-row-reverse">
                <img src='https://i.ibb.co/Rg7z1ck/pexels-albin-berlin-919073.jpg' className="max-w-sm rounded-lg shadow-2xl" />
                <div className='flex flex-col gap-auto items-stretch'>
                    <h3 className="text-lg font-bold pt-10 text-slate-500 ">CONTACT US</h3>
                    <div className="flex flex-col items-stretch md:flex-row w-full ">
                        <div className="w-full">
                            <div className="h-20 flex items-end pb-6">
                                <h1 className="text-xl md:text-5xl font-extrabold ">Get In Touch</h1>
                            </div>
                            <p className="mr-6">Provident cupiditate voluptatem etin. Quaerat fugiat ut assumenda excepturi
                                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <h1 className="text-lg md:text-2xl font-bold py-2">CAR shop</h1>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="h-20 flex items-end pb-6">
                                <h1 className="text-xl md:text-2xl font-bold ">Contact</h1>
                            </div>
                            <h3 className="text-lg">021 Hollywood Boulevard, LA</h3>
                            <h3 className="text-lg p-2">customer@example.com</h3>
                            <h3 className="text-lg p-2">(021) 345-6789</h3>
                            <div className="text-blue-600 flex items-center gap-4">
                                <div className=" avatar  text-3xl">
                                    <Link><FaTwitter /></Link>
                                </div>
                                <div className=" avatar text-2xl">
                                    <Link><FaFacebook /></Link>
                                </div>
                                <div className=" avatar text-3xl">
                                    <Link><FaLinkedinIn /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=" min-h-full w-full mx-auto py-4 md:py-10 ">
            <div className="flex flex-col w-full justify-around gap-4 w-10/12 mx-auto md:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-slate-700">
                    <form className="card-body">
                        <h2 className='text-2xl font-bold text-white pt-2 '>Send Us Message</h2>
                        <p className='text-white py-4'>Gravida vulputate aliquet tempor eque sed pretium non urna sed etid aenean haretra quam placerat.</p>
                        <div className="form-control">
                            <input type="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Send Message</button>
                        </div>
                    </form>
                </div>
                <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100 ">
                    <form className="card-body min-h-max">
                        <div className='h-48 text-black'>
                             Maps loading...
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Contact;