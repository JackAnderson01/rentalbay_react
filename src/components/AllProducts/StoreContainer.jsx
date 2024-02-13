import React from 'react'
import AllProductsCard from './AllProductsCard'

const StoreContainer = () => {


  const products = [
    {
        "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        "name": "Shoes",
        "link": "/"
    },
    {
        "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        "name": "Glasses",
        "link": "/"
    },
    {
        "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        "name": "Lipsticks",
        "link": "/"
    },
    {
        "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        "name": "Headphones",
        "link": "/"
    },
    {
        "image": "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "Watches",
        "link": "/"
    },
    {
        "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        "name": "Coffee",
        "link": "/"
    },
    {
        "image": "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        "name": "Camera",
        "link": "/"
    },
    {
        "image": "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        "name": "Bags",
        "link": "/"
    },
    {
        "image": "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        "name": "Camera",
        "link": "/"
    },
    {
        "image": "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        "name": "Bags",
        "link": "/"
    },
]

  return (
    <div className='flex items-start justify-start w-full h-auto flex-wrap'>
        {
            products?.map((product, key) => (
                <AllProductsCard product={product} key={key}/>
            ))
        }
    </div>
  )
}

export default StoreContainer