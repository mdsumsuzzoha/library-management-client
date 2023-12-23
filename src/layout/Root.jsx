import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";


const Root = () => {

    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;

{/* <div
    style={{ background: 'linear-gradient(to top right, rgba(56, 57, 59, 0.7), rgba(237, 47, 95, 0.4))' }} className="px-4 md:px-10">
</div> */}