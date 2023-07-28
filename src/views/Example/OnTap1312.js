import React from 'react'
import { useState, useEffect } from 'react'

const tabs = ['posts', 'comments','albums', 'photos', 'todos']

export const OnTap1312 = () => {

    const [title, setTitle] = useState('')
    const [users, setUsers] = useState([])
    const [type, setType] = useState('')
    const [showGoToTop, setShowGoToTop] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        document.title = title
    })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => setUsers(users))
    },[])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(users => setUsers(users))
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200){
                setShowGoToTop(true)
            }
            else {
                setShowGoToTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => (
        window.removeEventListener('scroll', handleScroll))
    },[])

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
    <h>{width}</h> <br/>
    {tabs.map((tab) => (
        <button key={tab}
        style={type === tab ? {
            color : '#fff',
            backgroundColor : '#333'
        } : {}}
        onClick={() => setType(tab)}
        > {tab}</button>
    ))}
    <br/>
        <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/>
        <ul>
        {users.map(user => (
            <li key={user.id}> {user.name || user.title}</li>
        ))}
        </ul>
        {showGoToTop && <button
        style={{
            position: 'fixed',
            right : 20,
            bottom: 20,
        }}
        > Go To Top
        </button>}
    </div>
  )
}
