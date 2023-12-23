import { Link } from "react-router-dom";
import { FaFacebook, FaLandmark, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiPhoneIncoming } from "react-icons/fi";
import { MdEmail } from "react-icons/md";



const Footer = () => {
    return (
        <div className="">
            <div className="bg-gray-800 text-center md:text-start py-6 md:py-10 text-white flex flex-col md:flex-row justify-around">
                <div className="md:space-y-6 p-4 mx-auto">
                    <h4 className="text-xl pb-2 font-bold">The CARs !!!
                    </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, veniam?</p>
                </div>
                <div className="md:space-y-6 p-4 mx-auto">
                    <h4 className="text-xl font-bold pb-2">Connect us
                    </h4>
                    <p className="flex items-center justify-center md:justify-start gap-3"><FaLandmark /> 38-2 Hilton Street, California, USA</p>
                    <p className="flex items-center justify-center md:justify-start gap-3 "><FiPhoneIncoming />(+01) 123 456 7890</p>
                    <p className="flex items-center justify-center md:justify-start gap-3"><MdEmail />info@carshop.com</p>
                </div>

            </div>
            <div className="bg-black text-white flex flex-col md:flex-row justify-around py-4 px-2 space-y-4">
                <div className="max-w-4xl min-h-max flex items-center">
                    <p>© 2023 CARSHOP – All Rights Reserved.</p>
                    <p className="ms-6"><Link to='/undcons'>Terms of Use</Link></p>
                    <p className="ms-2">|</p>
                    <p className="ms-2"><Link to='/undcons'>Privacy Policy</Link></p>

                </div>
                <div className=" text-white flex items-center justify-center md:justify-start gap-4">
                    <div className=" avatar text-3xl">
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
    );
};

export default Footer;