import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export function AppContextProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <AppContext.Provider value={{ isModalOpen, setIsModalOpen }}>
            {children}
        </AppContext.Provider>
    );
}
