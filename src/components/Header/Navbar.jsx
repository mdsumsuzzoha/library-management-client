import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import './Navbar.css';
import { DataContext } from "../../providers/DataProvider";



const Navbar = () => {

    const { user, signOutUser, } = useContext(AuthContext);
    const {  toggleDarkMode } = useContext(DataContext);



    const handleSignOut = () => {
        signOutUser()
            .then(
                handleClick()
            )
            .catch()
    }
    const handleClick = () => {
        const elem = document.activeElement;
        if (elem) {
            elem?.blur();
        }
    };

    const handleDarkMood =()=>{
        toggleDarkMode(true);
// console.log('toggle chande')
    }
    const linkHorizontal = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {user && <>
            <li><NavLink to='/addBook'>Add Book</NavLink></li>
            <li><NavLink to='/allBook'>All Books</NavLink></li>
            <li><NavLink to='/borrowed'>Borrowed Books</NavLink></li>
        </>
        }
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>

        {!user && <>
            <li><NavLink to='/login' >Login</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
        </>
        }

    </>

    const linksVartical = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {user && <>
            <li><NavLink to='/addBook'>Add Book</NavLink></li>
            <li><NavLink to='/allBook'>All Books</NavLink></li>
            <li><NavLink to='/borrowed'>Borrowed Books</NavLink></li>
        </>
        }
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        {!user && <>
            <li><NavLink to='/login' >Login</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
        </>
        }

    </>

    return (
        <div style={{
            width: '1440px',
            height: '80px',
            maxWidth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto'
        }} className="navbar fixed top-0  max-w-screen-xl z-50 bg-teal-500	 shadow-md"

        >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul onClick={handleClick} className="font-bold text-  dropdown-content mt-3 z-[1] p-2 text-lg shadow bg-gray-400 rounded-box w-60">
                        {linksVartical}
                    </ul>
                </div>
                <img className="w-28 h-14 object-fit px-4" src="https://i.ibb.co/tZG64PP/library-logo.png" alt="" />
                <h2 className="hidden md:block text-4xl font-bold  flex gap-4 "><span><span className="">ABC </span>Library</span> </h2>
                <input type="checkbox" onChange={handleDarkMood} className="toggle md:ms-10"  />

            </div>
            <div className="navbar-end md:gap-14">
                <div className="hidden lg:flex">
                    <ul onClick={handleClick} className="menu-horizontal  font-bold tracking-wide px-1 space-x-6 nav-btn">
                        {linkHorizontal}
                    </ul>
                </div>
                <div className=" dropdown dropdown-end pr-4">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-14 rounded-full">
                            <img className="bg-slate-200" alt={`User`} src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className={`mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 space-y-2 text-black`}>
                        <li className={`${user ? "font-bold text-lg" : "hidden"}`}>
                            {user && <>{user.displayName}</>}
                        </li>
                        <li className={`${user ? "" : "hidden "}`}>
                            {user && <>{user.email}</>}
                        </li>
                        <li >{user ? <><Link to="/" onClick={handleSignOut} className="bg-slate-300 rounded my-1">Sign Out</Link>
                        </> : <>
                            <Link to="/login" onClick={handleClick} className="font-bold bg-slate-300 rounded my-2">Login</Link>
                            <Link to="/register" onClick={handleClick} className="font-bold bg-slate-300 rounded my-2">Register</Link>

                        </>}


                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

