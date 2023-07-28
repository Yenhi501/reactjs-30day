import React, { useEffect, useState } from 'react'

export const Video352 = () => {
   const [width, setWidth] = useState(window.innerWidth)

   useEffect(() => {
    const handleResize = () => {
        setWidth(window.innerWidth)
    } 
    window.addEventListener('resize', handleResize)

    return () => {
        window.removeEventListener('resize', handleResize)
    }
   })
  return (
    <div>
        <h1>{width}</h1>
    </div>
  )
}

