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
        who: {
            adults: 0,
            children: 0,
            infants: 0,
            pets: 0,
        },
    });

    const resetSearchData = () => {
        setSearchData({
            where: {
                destination: '',
            },
            when: {},
            who: {
                adults: 0,
                children: 0,
                infants: 0,
                pets: 0,
            },
        });
    };

    return (
        <AppContext.Provider
            value={{
                isModalOpen,
                setIsModalOpen,
                searchData,
                setSearchData,
                resetSearchData,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
