import React from 'react'
import { useState, useEffect } from 'react'

export const Video371 = () => {

    // const [count, setCount] = useState(1)
    
    // useEffect(() => {
    //     console.log('Re-render or Mounted')

    //     return () => {
    //         console.log('Cleanup')
    //     }
    // },[count])

    const [avatar, setAvatar] = useState()

    useEffect(() => {
      return () => {
        avatar && URL.revokeObjectURL(avatar.preview)
      }
    }, [avatar])

    const handlePreviewAvatar = (event) => {
        const file = event.target.files[0]
        file.preview =(URL.createObjectURL(file))
        setAvatar(file)
    }

  return (
    <div>
         {/* <h1>{count}</h1>
        <button onClick={() => {setCount(count +1)}}>Click me !</button> */}
        <input type = "file" onChange={handlePreviewAvatar}/>
        
        {/* hiển thị */}
        {avatar && 
          <img src={avatar.preview} alt='' width="80%" />}
    </div>
  )
}
