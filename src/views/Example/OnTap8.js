import React from 'react'
import { useState } from 'react'

const items = [
    {
        id:1,
        name: 'PHP',
    },
    {
        id:2,
        name:'JavaScript',
    },
    {
        id:3,
        name:'CSS',
    },
    {
        id:4,
        name:'React Native'
    }
]
export const OnTap8 = () => {
  const [fill, setFill] = useState();
  const handleSubmit = () => {
    console.log({id : fill})
  }
  return (
    <div>
    {items.map((item) => (
      <div key={item.id}>
        <input type='radio' checked={fill === item.id} onChange={(event) => setFill(item.id)}/>
        {item.name}
      </div>
    ))}
      <button onClick={handleSubmit}>Đăng kí</button>
    </div>
  )
}
