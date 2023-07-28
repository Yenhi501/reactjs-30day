// Mounted / Unmounted

import React from 'react'
import { Video321 } from './Video321'
import { useState } from 'react'

export const Video32 = () => {
    const [show, setShow] = useState(false)
  return (
    <div style={{padding:20}}>
        <button onClick={() => setShow(!show)}>Show</button>
        <h1>{show && <Video321 />}</h1>
    </div>
  )
}
