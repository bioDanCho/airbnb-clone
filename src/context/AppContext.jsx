import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export function AppContextProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [searchData, setSearchData] = useState({
        where: {
            destination: '',
        },
        when: {},
        who: {},
    });

    console.log('test', searchData);

    return (
        <AppContext.Provider
            value={{ isModalOpen, setIsModalOpen, searchData, setSearchData }}
        >
            {children}
        </AppContext.Provider>
    );
}
