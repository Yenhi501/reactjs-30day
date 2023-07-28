import React from 'react'
import { useState } from 'react'

export const OnTap121 = () => {
    const [title, setTitle] = useState('')
    const [users, setUsers] = useState([])

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        setUsers(users)
    }, [])
  return (
    <div>
        <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}></input>
        <ul>
        {users.map(user => (

            <li key={user.id}>
                {user.address.street}
            </li>
        ))}
        </ul>
    </div>
  )
}
