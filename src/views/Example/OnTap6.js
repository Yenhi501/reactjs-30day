import React from 'react'
import { useState } from 'react'

export const OnTap6 = () => {
    const [user, setUser] = useState({
        name: '',
        age: '',
        email: '',
        
    })

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <lable>
        Name: <input type="text" value={user.name} onChange={handleChange}/>
        </lable>
        </form>
    </div>
  )
}
