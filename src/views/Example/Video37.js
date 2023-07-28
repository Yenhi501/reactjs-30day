//  Listen DOM event

import React from 'react'
import { Video371 } from './Video371'
import { useState } from 'react'

export const Video37 = () => {
    const[show, setShow] = useState(false)
  return (
    <div>
    <button onClick={() => setShow(!show)}>Show</button>
    {show && <Video371/>}
    </div>
  )
}
