import React, { useState } from 'react'
import { useContext , createContext} from 'react';

export const LoginContext = createContext();

const LoginContextProvider = ({children}) => {
    const [userDetails, setuserDetails] = useState(true);
  
    return (
    <LoginContext.Provider value={userDetails}>
        {children}
    </LoginContext.Provider>    
)
}

export default LoginContextProvider