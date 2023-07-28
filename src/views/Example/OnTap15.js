import React from 'react'
import { OnTap151 } from './OnTap151'
import { useState } from 'react'

export const OnTap15 = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
        <button onClick={() => setShow(!show)}>Show</button>
        {show && <OnTap151/>}
    </div>
  )
}
