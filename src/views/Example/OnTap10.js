import React from 'react'
import { useState } from 'react'

const gifts =[
    'Gift1',
    'Gift2',
    'Gift3',
    'Gift4',
    'Gift5',
    'Gift6'
]
export const OnTap10 = () => {
    const [check, setCheck] = useState('')
    const handleSubmit = () => {

        const gift = Math.floor(Math.random() * gifts.length)
    
        setCheck(gifts[gift])
    }
  return (
    <div>
        <h1>{check ||'Chưa có'}</h1>
        <button onClick={handleSubmit}>Lấy thưởng</button>
    </div>
  )
}
