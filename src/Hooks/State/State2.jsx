
// {useState} hook   - 2

import { useState } from "react"


export default function State2() {

  const [posts, setPosts] = useState()
  const [postId, setPostId] = useState(1)


  fetch ("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data))


  const updateUp = () => setPostId(prev => prev + 1)
  const updateDown = () => setPostId(postId - 1)


 
  return (
    
    <>

    {posts?.map((post) => (
       post.id == postId
       ? (<> 
            <h2>{post.id} : {post.title}</h2>
            <p>{post.body}</p>
          </>)
       : ("")
    ) )}

    <button onClick={updateUp}>+</button>
    <button onClick={updateDown}>-</button>

    </>
  )
}

 