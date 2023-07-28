import React from 'react'
import { Video361 } from './Video361'
import { useState } from 'react'

export const Video36 = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
        <button onClick={() => setShow(!show)}>Show</button>
        {show && <Video361/>}
    </div>
  )
}
