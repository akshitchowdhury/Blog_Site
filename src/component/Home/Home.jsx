import React, { useEffect, useState } from 'react'

const Home = () => {
  const [blogList,setBlogList] = useState([]);
  const[newBlog,setNewBlog] = useState({title:'',content:''})
  const fetchBlogs = async()=>{
    const response = await fetch('http://localhost:3000/api/blogs');
    const data = await response.json();
    setBlogList(data); 
  }

  useEffect(()=>{
    fetchBlogs();
  },[])
  return (
    <> 
    <form>
      <input type='text' onChange={(e)=>setNewBlog(newBlog.title)} value={newBlog.title} placeholder='Entert blog title'/>
      <input type='text' onChange={(e)=>setNewBlog(newBlog.content)} value={newBlog.content}/>
      <button>Submit Blog</button>
    </form>
    <div>
      {
        blogList.map((blog)=>(
          <>
            <div key={blog._id}>
              <h1>{blog.title}</h1>
              <h2>{blog.content}</h2>
              </div>
          </>
        ))
      }
    </div>
    </>
  )
}

export default Home
