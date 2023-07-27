import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';

export const AddUser = () => {
const[info,setInfo]=useState({
  name:"",
  email:"",
  phone:"",

});



 const navigate=useNavigate();

const handleClick=()=>{
   axios.post(`${process.env.REACT_APP_HOST}/posts`,info)

   alert("data submitted successfully");
   navigate("/")


   
   
}







  return (
  <form>
   
  <div class="mb-3">
      <label  class="form-label">Name</label>
      <input  value={info.name}   onChange={e=>setInfo({...info,name:e.target.value})}  type="email" class="form-control" id="exampleInputName1" aria-describedby="emailHelp"  />
      
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"   value={info.email} onChange={e=>setInfo({...info,email:e.target.value})} />
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Phone</label>
      <input type="text" class="form-control" id="examplePhone" aria-describedby="emailHelp"   value={info.phone} onChange={e=>setInfo({...info,phone:e.target.value})} />
      
    </div>
    
   
    <button type="submit" class="btn btn-primary"  onClick={handleClick}>Submit</button>
  </form>

  )
}
