import React, { useEffect, useRef, useState } from 'react'

const TestUseRef = () => {
    const inputRef = useRef()

    const handleclick = () => {
      inputRef.current.style.border = "2px solid red";
      inputRef.current.style.backgroundColor = "black";
    } 

  return (
    <div>
      <h1>Testing The UseRef() </h1>
    <input  type="text" ref={inputRef}/><br /><br />
    <button onClick={handleclick}> Click Here </button>
    </div>
  )
}

export default TestUseRef
