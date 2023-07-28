import React from "react";
import { useEffect, useState } from "react";

export const Video331 = () => {
  // 1. useEffect(callback) (ít dùng)
  // - Gọi callback mỗi khi component re-render
  // - Gọi callback sau khi component thêm element vào DOME
  // 2. useEffect(callback, [])
  // - Chỉ gọi callback 1 lần sau khi component mounted
  // 3. useEffect(callback, [dependencies])
  // ----------------------------------------------------------------
  // 1. Callback luôn luôn được gọi sau khi component mounted

  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  useEffect(() => {
    document.title = title;
  });

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
