import React, { useDeferredValue, useMemo, useState } from 'react'

const List = ({input}) => {
    const LIST_SIZE =20000
    const defrredInput = useDeferredValue(input)
    const list = useMemo(() => {
        const l = []
        for (let i = 0; i< LIST_SIZE;i++){
            l.push(<h2 key={i}>{defrredInput}</h2>)
        }
        return l;
    }, [defrredInput])

    return list
}


const UseDeferredValue = () => {
    const [input, setinput] = useState("")

    function handlechange(e){
        setinput(e.target.value)
    }
  return (
    <>
    <h1>Testing useDeferredValue</h1>
        <input type="text" value={input} onChange={handlechange} />
        < List input={input}/>
    </>
  )
}

export default UseDeferredValue

