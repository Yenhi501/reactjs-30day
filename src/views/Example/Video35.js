//  Listen DOM event

import React from 'react'
import { Video351 } from './Video351'
import { useState } from 'react'

export const Video35 = () => {
    const[show, setShow] = useState(false)
  return (
    <div>
    <button onClick={() => setShow(!show)}>Show</button>
    {show && <Video351/>}
    </div>
  )
}
