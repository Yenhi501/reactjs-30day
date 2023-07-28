import React from 'react'
import { useState } from 'react'

export const OnTap9 = () => {
    const [count, setCount] = useState('')

    const handleIncrement = () => {
        setCount(count +1)
    }
    const handleDecrement = () => {
        setCount(count -1)
    }

  return (
    <div>
        <h1>Thay đôi chỗ này {count}</h1>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
    </div>
  )
}
