  import React from 'react'
  import { useEffect, useState } from 'react'

  const tabs = ['posts', 'comments','albums', 'photos', 'todos']
  export const Video341 = () => {
    // 1. useEffect(callback) (ít dùng)
    // - Gọi callback mỗi khi component re-render
    // - Gọi callback sau khi component thêm element vào DOME
    // 2. useEffect(callback, [])
    // - Chỉ gọi callback 1 lần sau khi component mounted
    // 3. useEffect(callback, [dependencies])
    // - Callback sẽ được gọi lại mỗi khi deps thay đổi
    // ----------------------------------------------------------------
    // 1. Callback luôn luôn được gọi sau khi component mounted

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')

    useEffect(() => {
      // document.title = title
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => {
        setPosts(posts);
      })
    }, [type]);


    return (
    <div>
    {tabs.map(tab => (
      <button 
      key={tab} 
      style={type === tab ? {
        color: '#fff',
        backgroundColor : '#333',
      } : {}} 
      onClick={() => setType(tab)}>{tab}</button>
    ))}
      <input type='text' value={title} onChange={(event) => (setTitle(event.target.value))} />
      <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title || post.name}</li>
      ))}
      </ul>
    </div>
    )
  }
