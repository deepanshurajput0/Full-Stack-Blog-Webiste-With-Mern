import React,{ useState} from 'react'
import "../components/Signin.css"
import RegisterImg from "../components/Images/register.gif"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"
const Signin = () => {
  const navigate = useNavigate();
  const [input,setInput]=useState({
   name:"",
   email:"",
   password:""
  })
  const navigation = ()=>{
    navigate("/login")
  }
  const notifyA = () => toast("Wow so easy!");
  const handleSubmit=async(e)=>{
   e.preventDefault()
 
   try {
    const res = await axios.post("https://blogappx.onrender.com/register",input,
    navigation())
    notifyA(res.data.message) 
    
   }
    catch (error) {
    toast(error.response.data.message) 
   }
  
  }

  return (
    <div className='user-form' >
      <img src={RegisterImg} alt="register-img"/>
      <form onSubmit={handleSubmit} className='user-fields' >
        <h1> Registration Page </h1>
        <input type='text' placeholder='Enter Your Name'
        name='name'
        value={input.name}
        onChange={(e)=>setInput({ ...input, [e.target.name]: e.target.value })}
        /> <br/> 
        <input type='email' placeholder='Enter Your Email'
        name='email'
        value={input.email}
        onChange={(e)=>setInput({ ...input, [e.target.name]: e.target.value })}
        /> <br/> 
        <input type='password' placeholder='Enter Your Password'
        name='password' 
        value={input.password}
        onChange={(e)=>setInput({ ...input, [e.target.name]: e.target.value })}
        /> <br/> 
                  <p style={{fontSize:"15px"}} > Already have an account <Link to="/login" >Login Now</Link> </p>
        <div className='btn2' >
        <button type='submit' >Register Now</button>
        </div>
      </form>
    </div>
  )
}

export default Signin