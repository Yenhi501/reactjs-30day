import React from 'react'
import { useState } from 'react'

export const OnTap11 = () => {
    const [user, setUser] = useState({
        name: '',
        age: '',
        email:'',
    });

    const handleChnange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        }
        )
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user)
    }
  return (
    <div>
    <h1>User Form</h1>
        <form onSubmit={handleSubmit}>
        <div>
        <label>
        Name
        <input type='text' name='name' value={user.name} onChange={handleChnange}></input>
        </label>
        </div>

        <div>
        <label>
        Age
        <input type='number' name='age' value={user.age} onChange={handleChnange}></input>
        </label>
        </div>

        <div>
        <label>
        Email
        <input type='email' name='email' value={user.email} onChange={handleChnange}></input>
        </label>
        </div>
        <div>

        </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
