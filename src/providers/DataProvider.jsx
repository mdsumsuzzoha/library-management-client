
import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { AuthContext } from "./AuthProviders";
import axios from "axios";


export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const { user } = useContext(AuthContext);

    const [borrowBooks, setBorrowBooks] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };


    const url = `http://localhost:5000/borrowed?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBorrowBooks(res.data);
            })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBorrowBooks(data))
    }, [user])
    // console.log(borrowBooks);



    const dataInfo = {
        borrowBooks,
        isDarkMode,
        toggleDarkMode,

    }

    return (
        <div>
            <DataContext.Provider value={dataInfo}>
                {children}
            </DataContext.Provider>
        </div>
    );
};
DataProvider.propTypes = {
    children: PropTypes.node,
}

export default DataProvider;



