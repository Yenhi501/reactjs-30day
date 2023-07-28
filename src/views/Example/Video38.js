import React from 'react'
import { Video381 } from './Video381'
import { useState } from 'react'

export const Video38 = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
        <button onClick={() => setShow(!show)}>Show</button>
        {show && <Video381/>}
    </div>
  )
}
