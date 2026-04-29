import React, { useEffect, useState } from 'react'
import axios from "axios"

function Product() {
    const [products,setProducts]=useState([])
    const [skip,setSkip]=useState(0)
    useEffect(() => {
        const getdata=async()=>{
            try{
                const response=await axios.get(`https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price`)

                setProducts(response.data.products)
                
            }catch(e){
                console.log(e)
            }
        }
        getdata()
    },[skip])
  return (
    <div>
      {products.map((product)=>{
        return(
            <div key={product.id}>
                <h3>{product.title}</h3>
                <h4>{product.price}</h4>
            </div>
        )
      })}

      <button className='bg-green-800 m-10' onClick={()=>{
        if(skip>0){
            setSkip(skip-10)
        }
      }}>Prev</button>
      <button className='bg-amber-800 m-10' onClick={()=>{
        if(skip<194){
            setSkip(skip+10)
        }
      }}>Next</button>
    </div>
  )
}

export default Product
