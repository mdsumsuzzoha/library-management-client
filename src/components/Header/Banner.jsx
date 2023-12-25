import { useContext } from "react";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { IoMdTimer } from "react-icons/io";

import { Link } from "react-router-dom";
import { DataContext } from "../../providers/DataProvider";

const Banner = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DataContext);

    return (
        <div className="px-6 py-6 ">
            <div className="flex flex-col md:flex-row justify-between  text-lg font-semibold ">
                <div>
                    <div className="flex gap-6">
                        <p className="flex items-center gap-2"><GoMail /> support@library.com</p>
                        <p className=" flex items-center gap-2 text-sm md:text-lg"><IoMdTimer /> Sat - Thu 10.00 am - 08.00 pm. Friday 03.00 pm - 08.00 pm</p>
                    </div>
                </div>
                <div className="flex md:items-center justify-between md:justify-center md:gap-4">
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
            <div>
                <button onClick={toggleDarkMode} className={` btn btn-sm p-2 font-bold my-6 rounded-md bg-${!isDarkMode ? 'black' : 'base-200'} text-${!isDarkMode ? 'white' : 'black'}`}>
                    {isDarkMode ? 'Go Light Mode' : 'Go Dark Mode'}
                </button>
            </div>
            {/* <hr /> */}
        </div>
    );
};

export default Banner;