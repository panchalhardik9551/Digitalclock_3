import React, { useState } from 'react'
import './style.css'

export default function Time() {

    let timer = new Date().toLocaleTimeString();
    const [time, setTime] = useState(timer);

    const start = () => {
     timer = new Date().toLocaleTimeString();
        setTime(timer)
    }
    setInterval(start, 1000);

    return (
        <>
            <h1>{time}</h1>
        </>
    )
}
