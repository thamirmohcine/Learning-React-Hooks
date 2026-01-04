import { useState } from 'react'
import './App.css'
import { TestUseState } from './components/TestUseState'
import TestUseEffect from './components/TestUseEffect'
import TestUseContext from './components/TestUseContext'

function App() {

  return (
    <>
      <TestUseContext />
      <TestUseState />
      <TestUseEffect />
    </>
  )
}

export default App
