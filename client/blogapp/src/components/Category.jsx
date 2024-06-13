import React from 'react'
import categoryImg from "../components/Images/category.jpg"
import "../components/Category.css"
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Category = () => {
  const [input, setInput] =useState({
    title:""
  })
  const notifyA = () => toast("User Logged in Successfully");
  const navigate = useNavigate()
  const handleCategory=async(e)=>{
   e.preventDefault();
   try {
    const res = await axios.post("https://blogappx.onrender.com/add/category",input
    ,{
       headers:{
        "Authorization": `Bearer ${localStorage.getItem("token")}`
       }
    }
    )
    toast(res.data.message)
    navigate("/")
   } catch (error) {
    toast(error.response.data.message)
   }
  }
  return (
    <div className='category' style={{paddingTop:"150px", display:"flex", justifyContent:"space-evenly"}} >
      <img height={"400px"} src={categoryImg} alt='image' />
      <div className="add-category">
      <h1> Add New Category </h1>
      <form onSubmit={handleCategory}>
      <input type='text' placeholder='Add Category'
      name='title'
      value={input.title}
      onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
      /> <br/> 
      <button type='submit'>Add Now</button>
      </form>
      </div>
    </div>
  )
}

export default Category

