import React from 'react'
import MainComponent from './MainComponent';
import LoginContextProvider from '../Context/LoginContextProvider';

const TestUseContext = () => {
  
    return (
    <LoginContextProvider >
        <MainComponent />
    </LoginContextProvider >
  )
}

export default TestUseContext