import React, { useState } from 'react'
import { Video391 } from './Video391'

export const Video39 = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
        <button onClick={() => setShow(!show)}>Show</button>
        <p> {show && <Video391/>}</p>
    </div>
  )
}
