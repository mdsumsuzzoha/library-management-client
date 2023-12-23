import { FaFacebook,  FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { IoMdTimer } from "react-icons/io";

import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between px-4 text-white text-lg font-semibold py-6">
                <div className="flex gap-6">
                    <p className="flex items-center gap-2"><GoMail /> support@carshop.com</p>
                    <p className="flex items-center gap-2"><IoMdTimer /> Mon - Sat 8.00 - 18.00. Sunday CLOSED</p>
                </div>
                <div className="flex md:items-center justify-between md:justify-center gap-4">
                    <p>(008) 123 456 7890</p>
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
            <hr />
        </div>
    );
};

export default Banner;