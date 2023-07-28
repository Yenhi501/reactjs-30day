import React, { useEffect, useState } from 'react'

export const Video361 = () => {
  const [countdown, setCountdown] = useState(180)

  // setInterval(() => {
  //   setCountdown(countdown  -  1)
  // }, 1000)

  // useEffect(() => {
  //   const intervalId =  setInterval(() => {
  //     setCountdown(prevState => prevState - 1)
  //   }, 1000)

  //   return () => {
  //     clearInterval(intervalId)
  //   }
  // }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCountdown(countdown -1)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [countdown])

  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  )
}
