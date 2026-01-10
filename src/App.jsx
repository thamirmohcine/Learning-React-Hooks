import { useState } from 'react'
import './App.css'
import { TestUseState } from './components/TestUseState'
import TestUseEffect from './components/TestUseEffect'
import TestUseContext from './components/TestUseContext'
import TestUseRef from './components/TestUseRef'
import TestUseReducer from './components/TestUseReducer'
import UseLayoutEffect from './components/TestUseLayoutEffect'
import TestUseMemo from './components/TestUseMemo'
import TestUseCallback from './components/TestUseCallback/TestUseCallback'
import TestingCostumHook from './components/CostumHooks/TestUseFetchExample'
import UseTransition from './components/UseTransition'
import UseDeferredValue from './components/UseDeferredValue'
import UseEffectEvent from './components/UseEffectEvent'
import JokeApp from './components/UseHook'
import ProfileNew from './components/UseActionState'
import ChatRoom from './components/UseOptimistic'
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
      <hr class="border-t border-gray-300 my-4" />
      <TestingCostumHook />
      <hr class="border-t border-gray-300 my-4" />
      <UseTransition />
      <hr class="border-t border-gray-300 my-4" />
      <UseDeferredValue />
      <hr class="border-t border-gray-300 my-4" />
      <UseEffectEvent />
      <hr class="border-t border-gray-300 my-4" />
      <JokeApp />
      <hr class="border-t border-gray-300 my-4" />
      <ProfileNew />
      <hr class="border-t border-gray-300 my-4" />
      <ChatRoom />
    </>
  )
}

export default App
