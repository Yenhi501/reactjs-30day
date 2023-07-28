import React from 'react'
import { Video341 } from './Video341'
import { useState } from 'react'

export const Video34 = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
        <button onClick={() => setShow(!show)}>Show</button>
        <p>{show && <Video341/>}</p>
    </div>
  )
}
