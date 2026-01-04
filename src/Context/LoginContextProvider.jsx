import React, { useState } from 'react'
import { useContext , createContext} from 'react';

export const LoginContext = createContext();

const LoginContextProvider = ({children}) => {
    const [userDetails, setuserDetails] = useState(true);
  
    return (
    <LoginContext.Provider value={userDetails}>
        {children}
        <button onClick={() => setuserDetails(!userDetails)}>CHANGE STATE : LOGIN </button>
    </LoginContext.Provider>
)
}

export default LoginContextProvider