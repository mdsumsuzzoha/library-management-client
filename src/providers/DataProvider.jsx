
import { createContext, useState } from "react";
import PropTypes from 'prop-types';


export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const [dataLoading, setDataLoading] = useState(true);    
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const dataInfo = {
        isDarkMode,
        toggleDarkMode,
        dataLoading,
        setDataLoading,

    }

    //for example....................
    // if (loading) {
    //     return <div className='p-10 flex justify-center'><span className="loading loading-dots loading-lg text-error"></span></div>
    // }
    // if (dataLoading) {
    //     return <div className='p-10 flex justify-center'><span className="loading loading-dots loading-lg text-error"></span></div>
    // }
    // ..................................................

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



