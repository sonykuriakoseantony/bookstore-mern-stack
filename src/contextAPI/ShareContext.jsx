import React, { createContext, useState } from 'react'

export const searchContext = createContext("");

function ShareContext({ children }) {
    const [searchKey, setSearchKey] = useState("");
    return (
        <>
            <searchContext.Provider value={{searchKey, setSearchKey}} > {/* an object is shared through the context */}
                {children}
            </searchContext.Provider>
        </>
    )
}

export default ShareContext