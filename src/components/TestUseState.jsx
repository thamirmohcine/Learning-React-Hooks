import React, { useState } from 'react'

export const TestUseState = () => {
    const [Count , setCount] = useState(0);
    const [Name, setName] = useState("");

    const [details, setdetails] = useState({counter: 0,name: "" });
    const ChangeName = (e) => {
        setdetails((prev) => ({
            ...prev,
            name : e.target.value
        }))
    }
    const IncreaseDetailsCounter = () => {
        setdetails((prev) => ({
            ...prev,
            counter : prev.counter + 1
        }))
    }

  return (
    <div>
        <h1>Usestate With Object : {details.name} has Clicked {details.counter} times !!</h1>
        <input placeholder='enter name ...' type="text" onChange={ChangeName} />
        <button onClick={IncreaseDetailsCounter}>Increment</button><br /><br /><br />
        <h1>Usestate with simple variable :  {Name} has Clicked {Count} times !! </h1>
        <input placeholder='enter name ...' type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={() => {setCount(Count+1)}}>Increment</button>
    </div>
  )
}
