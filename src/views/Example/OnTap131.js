import React from 'react'
import { useState, useEffect } from 'react'

const tabs = ['users', 'posts', 'comments', 'albums', 'todos', 'photos']
export const OnTap131 = () => {
    const [title, setTitle] = useState('')
    const [users, setUsers] = useState([])
    const [type, setType] = useState('')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(users => {
            setUsers(users)
        })
    }, [type])

    useEffect(() => {
        document.title = title // Thay đổi tiêu đề trang web
    })
  return (
    <div>
    {tabs.map(tab => (
        <button key={tab} style={type === tab ? {
            color : '#fff',
            backgroundColor : '#333',
        } : {}} onClick={() => setType(tab)}>{tab}</button>
    ))}
        <input value={title} type='text' onChange={(event) => setTitle(event.target.value)}/>
        <ul>
        {users.map(user => (

            <li key={user.id}> {user.name || user.title}</li>
        ))}
        </ul>
    </div>
  )
}
