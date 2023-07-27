import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const Home = () => {
    const[data,setData]=useState([]);
    const navigate=useNavigate();
   
    useEffect(()=>{
        UserData()

       

    },[])

    const UserData=()=>{
        axios.get(`${process.env.REACT_APP_HOST}/posts/`)
        .then(res=>setData(res.data))
        .then(err=>console.log(err));
        

    }


    const handleDelete=(id)=>{
      const confirm=window.confirm("Are You Sure Want to Delete")
      if(confirm){
        axios.delete(`${process.env.REACT_APP_HOST}/posts/${id}`)
        .then(res=>{
          window.location.reload()
          alert("Data deleted")
         
          
          
        })
      }

    }


  return (<>
    <h1>CRUD operation With JSON-server</h1>
    <br />
    <br />

    <Link to="/adduser" className="btn btn-success">Create(+)</Link>
    <table class="table">
   
  <thead>
    <tr>
      
      <th >Name</th>
      <th >Email</th>
      <th >Phone</th>
      <th>UPD/DEL</th>
    </tr>
  </thead>
  {data.map(user=>{
    return(
        <tbody>
  <tr>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.phone}</td>
    <td>
        <Link   className='btn btn-success'   to={`/update/${user.id}`}>UPDATE</Link>
        <button className='btn btn-danger'    onClick={()=>handleDelete(user.id)}>DELETE</button>
        <Link   className='btn btn-info'   to={`/read/${user.id}`}>READ</Link>
        
    </td>
  </tr>
    


  </tbody>
    )
  })}
  
  
</table>
</>
    
  )
}
