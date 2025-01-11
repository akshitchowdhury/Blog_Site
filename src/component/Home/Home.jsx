import React, { useEffect, useState } from 'react'

const Home = () => {
  const [blogList,setBlogList] = useState([]);
  const[newBlog,setNewBlog] = useState({title:'',content:''})
  const fetchBlogs = async()=>{
    const response = await fetch('http://localhost:3000/api/blogs');
    const data = await response.json();
    setBlogList(data); 
  }

  const postBlog = async()=> {
    try {
      
    const response = await fetch('http://localhost:3000/api/blogs', {method:'POST',
      headers:  { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog)
    })
    const data = await response.json();
    console.log(data);
    alert('Blog Created')
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchBlogs();
  },[])
  return (
    <> 
    <form onSubmit={(e)=>{e.preventDefault();postBlog()}}>
      <input type='text' onChange={(e)=>setNewBlog({...newBlog,title: e.target.value})} value={newBlog.title} placeholder='Entert blog title'/>
      <input type='text' onChange={(e)=>setNewBlog({...newBlog,content: e.target.value})} value={newBlog.content} placeholder='Entert blog content'/>
      <button type='submit'>Submit Blog</button>
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
