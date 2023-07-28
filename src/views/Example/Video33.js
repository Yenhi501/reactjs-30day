import React from 'react'
import { Video331 } from './Video331'
import { useState } from 'react'

export const Video33 = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
        <button onClick={() => setShow(!show)}>Show</button>
        <p>{show && <Video331/>}</p>
    </div>
  )
}
