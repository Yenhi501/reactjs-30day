import React from 'react'
import { OnTap1312 } from './OnTap1312'
import { useState } from 'react'

export const OnTap13 = () => {
    const[show, setShow] = useState(false)
  return (
    <div>
    <button onClick={() => setShow(!show)}>Show</button>
    {show && <OnTap1312/>}
    </div>
  )
}
