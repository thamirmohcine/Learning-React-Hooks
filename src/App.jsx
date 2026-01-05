import { useState } from 'react'
import './App.css'
import { TestUseState } from './components/TestUseState'
import TestUseEffect from './components/TestUseEffect'
import TestUseContext from './components/TestUseContext'
import TestUseRef from './components/TestUseRef'
import TestUseReducer from './components/TestUseReducer'
import UseLayoutEffect from './components/TestUseLayoutEffect'
import TestUseMemo from './components/TestUseMemo'
import TestUseCallback from './components/TestUseCallback'


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
      <hr class="border-t border-gray-300 my-4" />
      <UseLayoutEffect />
      <hr class="border-t border-gray-300 my-4" />
      <TestUseMemo />
      <hr class="border-t border-gray-300 my-4" />
      <TestUseCallback />
    </>
  )
}

export default App
