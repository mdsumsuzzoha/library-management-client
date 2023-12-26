import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";


const Root = () => {
    const { isDarkMode, } = useContext(DataContext);


    return (
        <div className={`bg-${isDarkMode ? 'black' : ''} text-${isDarkMode ? 'white' : ''}`}>
                <Navbar />
            <div className={`mt-20`}>
                <Outlet />
            </div>
        </div>
    );
};

export default Root;

{/* <div
    style={{ background: 'linear-gradient(to top right, rgba(56, 57, 59, 0.7), rgba(237, 47, 95, 0.4))' }} className="px-4 md:px-10">
</div> */}