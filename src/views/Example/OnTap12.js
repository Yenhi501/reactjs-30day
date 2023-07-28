import React, { useState } from 'react'
import {OnTap121} from './OnTap121'

export const OnTap12 = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
        <button onClick={() => setShow(!show)}>Show</button>
        {show && <OnTap121/>}
    </div>
  )
}
