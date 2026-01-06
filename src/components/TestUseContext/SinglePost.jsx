import React, { useContext } from 'react'
import { LoginContext } from '../../Context/LoginContextProvider';


const SinglePost = () => {
    const login = useContext(LoginContext);

  return (
    <div>
        <h1>the props passed by the context : 
          {login ? " Logged in" : " Logged out"} 
          </h1>
    </div>
  )
}

export default SinglePost