import { useState } from "react";
import BookCategory from "../BookCategory/BookCategory";



const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        
        <div className={`bg-${isDarkMode ? 'black' : 'base-200'} text-${isDarkMode ? 'white' : ''}`}>

            <div className="w-full text-center">
                <button onClick={toggleDarkMode} className={`p-2 font-bold my-6 rounded-md bg-${!isDarkMode ? 'black' : 'base-200'} text-${!isDarkMode ? 'white' : 'black'}`}>

                    {isDarkMode ? 'Go Light Mode' : 'Go Dark Mode'}
                </button>
                <BookCategory></BookCategory>

            </div>           


        </div>
    );
};

export default Home;