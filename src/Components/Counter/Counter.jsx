// Task: Create a simple counter component that allows the user to increment, decrement, and reset the counter value.

import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const onIncrement = () => {
        setCount(count + 1)
    }
    const onDecrement = () => {
        setCount(count - 1)
    }
    const onReset = () => {
        setCount(0)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}

export default Counter
