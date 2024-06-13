import React,{useState} from 'react'
import { Link } from "react-router-dom"
import "../components/Header.css"
import { useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
const Header = () => {

  const [menu, setMenu] = useState(true)
  const token = localStorage.getItem("token")
  const username = localStorage.getItem("username")
  const notifyA = () => toast("Log out SuccessFully");
  const navigate = useNavigate()
  const HandleLogOut=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    notifyA()
    navigate("/login")
  }
  
  const handlemenu=()=>{
    setMenu(!menu)
  }
  
  return (
    <div className='Navbar' >
    <ul className='nav-items'>
        <div className="logo"  style={{cursor:"pointer"}} > My Blog </div>
       
        
         <li> 
          <Link to="/">Home</Link>
        <Link to="/add-blog"> CreatePost</Link>
          <Link to="/add-category"> Category</Link> 
          { token && token !== null ?(<div className='nav' style={{display:"flex"}}>
            <p>
        {username}
        </p> <button onClick={HandleLogOut} > Logout </button>
        </div>): (
              <> 
              <Link to="/register" > Register </Link> 
              <Link to="/login" > Login </Link>
              
              </>
        ) } 
        
        </li> 
        <div  className='changenav' style={{transition:"0.6s"}} onClick={handlemenu} >
        { menu ?   <AiOutlineClose   className='menu' /> : <AiOutlineMenu   className='menu' />  }
        </div>
        {
          menu ?    <ul className='nav-item' >
         
          
           <li> 
            <Link to="/">Home</Link>
          <Link to="/add-blog"> CreatePost</Link>
            <Link to="/add-category"> Category</Link> 
            { token && token !== null ?(<div className='nav' style={{display:"flex"}}>
              <p>
          {username}
          </p> <button onClick={HandleLogOut} > Logout </button>
          </div>): (
                <> 
                <Link to="/register" > Register </Link> 
                <Link to="/login" > Login </Link>
                
                </>
          ) } 
          
          </li> 
      </ul>    : null 
        }
    </ul>
  
    </div>
  )
}

export default Header



