import {  Route, Routes } from "react-router-dom"
import Blogs from './components/Blogs';
import Header from './components/Header';
import Login from './components/Login';
import Signin from './components/Signin';
import SingleBlog from "./components/SingleBlog";
import { ToastContainer} from 'react-toastify';
import CreatePost from "./components/CreatePost";
import Category from "./components/Category";
import PrivateRoute from "./Services/ProtectedRouter";
import EditBlog from "./components/EditBlog";
import Footer from "./components/Footer";
function App() {
  return (
      
      <div className="app">
      <Header/> 
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Signin/>} />
        {/* Protected Routes */}
        <Route path="/" element={<PrivateRoute/>}> 
        <Route path='/' element={<Blogs/>} />
        <Route path='/singleblog' element={<SingleBlog/>} />
        <Route path='/add-blog' element={<CreatePost/>} />
        <Route path='/add-category' element={<Category/>} />
        <Route path='/blog/:id' element={<SingleBlog/>} />
        <Route path='/update/:id' element={<EditBlog/>} />
        </Route>
      </Routes>
      <ToastContainer/> 
      <Footer/>
      </div>
  );
}

export default App;
