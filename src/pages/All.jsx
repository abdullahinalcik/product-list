import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { NavLink, Navigate } from 'react-router-dom'
import Notfound from './Notfound'

const All = () => {
  const [products, setProducts] = useState([])
const getItems=()=>{
  fetch("https://fakestoreapi.com/products").then((res)=>res.json())
  .then((res)=>setProducts(res)).catch((err)=> <Navigate to={<Notfound/>} />)
}

useEffect(() => {

  getItems()

}, [])


  

  return (
<>
{products.map((products)=><Card price={products.price} desc={products.description} img={products.image} />)}

</>
  )
}

export default All