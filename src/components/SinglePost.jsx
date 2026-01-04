import React, { useContext } from 'react'
import { LoginContext } from '../Context/LoginContextProvider';


const SinglePost = () => {
    const login = useContext(LoginContext);
    
  return (
    <div>
        <h1>Single POST</h1>
    </div>
  )
}

export default SinglePost