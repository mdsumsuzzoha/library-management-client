
import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { AuthContext } from "./AuthProviders";


export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const { user } = useContext(AuthContext);

    const [borrowBooks, setBorrowBooks] = useState([]);


    const url = `http://localhost:5000/borrowed?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBorrowBooks(data))
    }, [user])
    console.log(borrowBooks);



    const dataInfo = {
        borrowBooks,

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



