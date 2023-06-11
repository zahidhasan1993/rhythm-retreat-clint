import React, { createContext } from 'react';

export const DataProvider = createContext();
const AuthProvider = ({children}) => {
    const user = {
        name : 'zahid',
        age: 28
    }
    return (
        <DataProvider.Provider value={user}>
            {children}
        </DataProvider.Provider>
    );
};

export default AuthProvider;