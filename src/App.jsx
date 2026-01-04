import { useState } from 'react'
import './App.css'
import { TestUseState } from './components/TestUseState'
import TestUseEffect from './components/TestUseEffect'
import TestUseContext from './components/TestUseContext'
import TestUseRef from './components/TestUseRef'
import TestUseReducer from './components/TestUseReducer'


function App() {

  return (
    <>
      <TestUseState />
      <hr class="border-t border-gray-300 my-4" />
      <TestUseEffect />
      <hr class="border-t border-gray-300 my-4" />
      <TestUseContext />
      <hr class="border-t border-gray-300 my-4" />
      <TestUseRef />
      <hr class="border-t border-gray-300 my-4" />
      <TestUseReducer />
    </>
  )
}

export default App
