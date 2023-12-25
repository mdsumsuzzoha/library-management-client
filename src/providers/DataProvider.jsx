
import { createContext, useState } from "react";
import PropTypes from 'prop-types';


export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const dataInfo = {
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



