import React, { useLayoutEffect, useRef, useState } from 'react'

const UseLayoutEffect = () => {
  const [toggle, settoggle] = useState(false);
  const textRef = useRef();

  useLayoutEffect(() =>{
    if (textRef.current != null){
      const dimonsion = textRef.current.getBoundingClientRect();
      textRef.current.style.paddingTop = `${dimonsion.hight}px`;
    }
  }, toggle)

  return (
    <div>
      <h1>Testing The UseLayoutEffect()</h1>
    <button onClick={() => settoggle(!toggle)}>Toggle</button>
    {toggle && <h1 ref={textRef}>Code useRef... </h1>}    
    </div>
  )
}

export default UseLayoutEffect
