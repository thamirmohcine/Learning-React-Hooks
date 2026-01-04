import React, { useState } from 'react'
import { useEffect } from 'react'



const TestUseEffect = () => {
    const [Count, setCount] = useState(0);
    const [otherCount, setotherCount] = useState(5);
    const [time, settime] = useState(0);
    useEffect(() => {
        document.title = `${Count} new messages!!`
    })

    // useEffect(() => {
    //     document.title = `${Count} new messages!!`
    // },[]) rendred one time only in the first render

    useEffect(() => {
        document.title = `${otherCount} new messages!!`
    },[otherCount])

    useEffect(() => {
        const timer = setInterval(() => {
            settime(prev => prev + 1);
        }, 1000)
        return () => {
            clearInterval(timer);
    }})
  return (
    <div>
        <h1>UseEffect Testing </h1>
        <h3>{Count} new Messages!</h3>
        <button onClick={() => setCount(Count+1)} >Increment</button>
        <h1>useEffect With Args </h1>
        <h3>otherCount : {otherCount}</h3>
        <button onClick={() => setotherCount(otherCount+5)}>Increment By 5</button>
        <h3>{time} in seconds</h3>
    </div>
  )
}

export default TestUseEffect