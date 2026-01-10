import React, { useState, useTransition } from 'react'

const UseTransition = () => {
    const [isPending, startTransition] = useTransition();
    const [input, setinput] = useState("");
    const [list, setlist] = useState([]);

    const LIST_SIZE = 20000

    function handlechange(e) {
        setinput(e.target.value)
        startTransition(() => {
            const l = []
            for (let i = 0;i < LIST_SIZE ; i++){
                l.push(e.target.value)
            }
            setlist(l)
        })
    }

  return (
    <>
        <h1>Testing UseTransition Hook</h1>
        <input type="text" value={input} onChange={handlechange} />
            { isPending ? <h2>Loading...</h2> : list.map((item, index) => (
                <h2 key={index}>{item}</h2>
        ))}    
    </>
  )
}

export default UseTransition
