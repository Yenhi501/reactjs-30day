import React from 'react'
import { OnTap141 } from './OnTap141'
import { useState } from 'react'

export const OnTap14 = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
        <button onClick={() => setShow(!show)}>Show</button>
        {show && <OnTap141/>}
    </div>
  )
}
