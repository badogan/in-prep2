import React from 'react'
import useCounter from '../hooks/useCounter'

const Counter = () =>{
    
    const {count,up,down} = useCounter()

    return (
        <div>
            <h1>Current count: {count}</h1>
            <button onClick={up}>+</button>
            <button onClick={down}>-</button>
        </div>
    )
}

export default Counter;