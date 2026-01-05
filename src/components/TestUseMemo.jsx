import React, { useMemo, useState } from 'react'

const TestUseMemo = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const memoCalculation = useMemo(() => {
        return expensiveFunctin(number);
    }, [number])

    const cssStyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }

  return (
    <div style={cssStyle}>
        <input onChange={(e) => setNumber(e.target.value)} value={number} />
        <h2>Calculation : {memoCalculation}</h2>
        <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>
  )
}

function expensiveFunctin(num){
    for (let i = 0; i < 1000; i++){}
    return num;
}

export default TestUseMemo