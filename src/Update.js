import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const Update = () => {
    const {id}=useParams();

  const[info,setInfo]=useState({
    id:id,
    name:"",
    email:"",
    phone:"",
    
    
  })


  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_HOST}/posts/${id}`)
    .then(res=>setInfo(res.data))
    .then(console.log("OK"))
  },[id])


  

  const navigate=useNavigate();

  const handleClick=(event)=>{
    event.preventDefault();
     axios.put(`${process.env.REACT_APP_HOST}/posts/${id}`,info)
    .then(res=>{alert("data updated successfully")
    navigate("/")
  }
    )
}

  return (
    <form>
    
   
  <div class="mb-3">
      <label  class="form-label">Name</label>
      <input  value={info.name} onChange={e=>setInfo({...info,name:e.target.value})}  type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp"  />
      
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"   value={info.email} onChange={e=>setInfo({...info,email:e.target.value})} />
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1"     value={info.phone} onChange={e=>setInfo({...info,phone:e.target.value})} />
    </div>
   
    <button type="submit" class="btn btn-primary"  onClick={handleClick}>Submit</button>
  </form>
  )
}
