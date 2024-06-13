import React from 'react'
import LoginImg from "../components/Images/login.jpg"
import { useState } from 'react'
import axios from "axios"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [input,setInput]=useState({
    email:"",
    password:"", 
  })
  const navigate = useNavigate()
  const notifyA = () => toast("User Logged in Successfully");
  const handleSubmit=async(e)=>{
   e.preventDefault()
 try {
  const res = await axios.post("https://blogappx.onrender.com/login", input)
  notifyA(res.data.message) 
  localStorage.setItem("token",res.data.token)
  localStorage.setItem("username",res.data.name) 
  navigate("/")
 } catch (error) {
  toast(error.response.data.message) 
 }

  }
    return (
      <div className='user-form' >
        <img height="450px" src={LoginImg} alt="register-img"/>
        <form onSubmit={handleSubmit} className='user-fields' >
          <h1> Login Page </h1>
          <input type='email' placeholder='Enter Your Email'
          name='email'
          value={input.email}
          onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
          /> <br/> 
          <input type='password' placeholder='Enter Your Password'
          name='password'
          value={input.password}
          onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
          /> <br/> 
          <p style={{fontSize:"15px"}} > Don't Have any account <Link to="/register" >Register Now</Link> </p>
         <div className='btn2'>
         <button  type='submit'>Login Now</button>
         </div>
        </form>
      </div>
    )
  }
  

export default Login