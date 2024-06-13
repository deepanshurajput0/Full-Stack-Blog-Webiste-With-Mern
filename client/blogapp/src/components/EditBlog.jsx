import React,{useState,useEffect} from 'react'
import CreateImg from "../components/Images/create.jpg"
import "../components/Create.css"
import axios from 'axios'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
const EditBlog = () => {
  const {id} = useParams()
  const [input, setInput]=useState({
    title:"",
    description:"",
    category:"", 
    file:""
  })
  const navigate = useNavigate()
  const [file, setFile]=useState([])
  const [categories, setCategories]=useState([])
  const notifyA = () => toast("Updated Successfully");
  useEffect(()=>{
    const getAllData =async()=>{
     const res = await axios.get(`https://blogappx.onrender.com/get/blog/${id}`,{
      headers:{
        "Authorization" : `Bearer ${localStorage.getItem("token")}` 
      }
    })
    setInput(res.data)
    }
    getAllData();
   },[id])
   useEffect(()=>{
    const fetchAllCategories =async()=>{
     const res = await axios.get("https://blogappx.onrender.com/get/categories",{
       headers:{
         "Authorization" : `Bearer ${localStorage.getItem("token")}` 
       }
     })
     setCategories(res.data)
    }
    fetchAllCategories()
   },[])
   const formdata = new FormData();
   formdata.append("title",input.title)
   formdata.append("category",input.category)
   formdata.append("description",input.description)
   formdata.append("thumbnail",file) 
   const handleEdit=async(e)=>{
      e.preventDefault();
      try {
         await axios.put(`https://blogappx.onrender.com/update/${id}`,input,{
          headers:{
            "Authorization" : `Bearer ${localStorage.getItem("token")}` 
          }
        })
        notifyA()
        navigate("/")
      } catch (error) {
        toast(error.response.data.message)
      }
   }
  return (
    <div className='add-blog'>
        <div className="pic">
            <img src={CreateImg} alt="create" />
        </div>
        <div className="create">
            <h1>Edit Your Post Now</h1>
            <form onSubmit={handleEdit} >
              <input type="text"
               placeholder='Enter Your Title'
               name='title'
               value={input.title} 
               onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
               /> <br/> 
              <label  for="category">Select Blog Category</label> <br/> 
              <select name='category'
              value={input.category}
               onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
              >  <br/> 
               { categories && categories.map((item)=>{
                return <option value={item._id} >{item.title}</option> 
               })}
                 <br/> 
              </select> <br/> 
              <input type='text'
              name='description'
               placeholder='Enter Your Description'
               value={input.description}
               onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
               /> <br/> 
              <input  type='file'
              name='file'
              value={input.file}
              onChange={(e)=>setFile(e.target.files[0])}
              placeholder='Select Thumbnail' /> <br/> 
              <button type='submit'>Update Now</button>
            </form>
        </div>
    </div>
  )
}

export default EditBlog



