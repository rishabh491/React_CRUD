import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Read = () => {
  const {id}=useParams()
  const [data,setData]=useState("")




  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_HOST}/posts/${id}`)
    .then(res=>setData(res.data))
  },[id])
  
  return (
    <div class="card" >
  <div class="card-header">
   <h2  align="center">Details</h2>  
  
  </div>
  
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{data.id}</li>
    <li class="list-group-item">{data.name}</li>
    <li class="list-group-item">{data.email}</li>
    <li class="list-group-item">{data.phone}</li>
  </ul>

  <Link  className='btn btn-info' to="/">Home</Link>
</div>
  
  )
}
