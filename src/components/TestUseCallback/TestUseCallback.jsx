import React, { useCallback, useState } from 'react'
import PrintTable from './PrintTable';


const TestUseCallback = () => {
    const [number , setNumber] = useState(1);
    const [darktheme, setdarkthem] = useState(false);

    const cssStyle = {
        backgroundColor: darktheme ? "black" : "white",
        color: darktheme ? "white" : "black" 
    }

    const calculateTable = useCallback(() => {
        return [number * 1, number * 2, number * 3, number * 4, number * 5];
    }, [number])

  return (
    <div style={cssStyle}>
        <h1>Test UseCallback</h1>
        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value) || 0)} />
        <PrintTable calculateTable={calculateTable}/>
        <button onClick={() => setdarkthem(!darktheme)}>Toggle</button>
    </div>
  )
}

export default TestUseCallback