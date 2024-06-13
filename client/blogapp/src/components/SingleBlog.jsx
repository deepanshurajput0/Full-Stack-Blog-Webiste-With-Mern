import React,{useEffect, useState} from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import "../components/SingleBlog.css"
import axios from 'axios'
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import {GrEdit} from "react-icons/gr"
import {MdDelete} from "react-icons/md"
import { toast } from 'react-toastify'
const notifyA = () => toast("Blog Deleted");
const SingleBlog = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [blog ,setBlog]=useState({})
  useEffect(()=>{
    const fetchSingleBlog =async()=>{
      const res = await axios.get(`https://blogappx.onrender.com/get/blog/${id}`, {
        headers:{
          "Authorization" : `Bearer ${localStorage.getItem("token")}` 
        }
      })
      setBlog(res.data)
    }
    fetchSingleBlog();
  },[id])
  const GoBack=()=>{
    navigate("/")
  }
  const handleDelete =async()=>{
    try {
      const {data} = await axios.delete(`https://blogappx.onrender.com/blog/${id}`,{
      headers:{
        "Authorization" : `Bearer ${localStorage.getItem("token")}` 
      }
    })
      if(data){
        notifyA()
        navigate("/")
      }
    } catch (error) {
      toast(error.response.data.message)
    }
  }
  return (
    <div className='container' >
      <div className="heading">
        <div className="main-heading">
 <div className="back">
 <BsFillArrowLeftCircleFill onClick={GoBack} style={{marginRight:"60px", cursor:"pointer"}} size={"30px"}/>
 </div>
        <h1>{blog.title} </h1>
        </div>
      </div>
    <img src={`https://blogappx.onrender.com/${blog.thumbnail}`} alt="Blogimg" />
    <div className="para">
      <div className="options">
      <Link to={`/update/${blog._id}`} style={{textDecoration:"none",color:"black"}} className="edit">
      <GrEdit/> Edit Now 
      </Link>
      <div className="remove">
      <MdDelete onClick={handleDelete} /> Delete Blog
      </div>
      </div>
      <p> {blog.description} </p>
    </div>
    </div>
  )
}

export default SingleBlog