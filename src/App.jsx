import { useState } from 'react'
import './App.css'
import { TestUseState } from './components/TestUseState'
import TestUseEffect from './components/TestUseEffect'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TestUseState />
      <TestUseEffect />
    </>
  )
}

export default App
