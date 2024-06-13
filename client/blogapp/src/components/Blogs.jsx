import React, { useEffect, useState } from 'react'
import "../components/Blogs.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Blogs = () => {
 const [blogs, setBlogs]=useState([])
useEffect(()=>{
 const fetchAllBlogs = async()=>{
  const res = await axios.get("https://blogappx.onrender.com/get/blogs",{
    headers:{
      "Authorization" : `Bearer ${localStorage.getItem("token")}` 
    }
  })
  setBlogs(res.data)
 }
 fetchAllBlogs()
},[])
  const navigate =useNavigate()
  function truncateText(text, maxLength){
    if(text.length > maxLength){
      return text.slice(0, maxLength) + '...' 
    }
  }
  
  const SingleBlog=()=>{
    navigate('/singleblog')
  }
 
  return (
    <> 
    { blogs && blogs.length > 0 ? 
    
    blogs.map((item)=>{
      return   <div className="blog-container">
      <img src={`https://blogappx.onrender.com/${item.thumbnail}`} alt="image" />
      
      <div  className="blog-data">
       <h1> {item.title}  </h1>
       <p> {truncateText(item.description,250)} </p>
        
        <Link className='readmore' to={`/blog/${item._id}`} >Read More </Link>
  
      </div>
      
   </div>
    })
    : <h2> Loading... </h2>} 
    

      </>
    
  )
}

export default Blogs