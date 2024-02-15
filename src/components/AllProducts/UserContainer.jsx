import React from 'react'
import AllProductsCard from './AllProductsCard'
import { GlobalContext } from '../../context/GlobalContext'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import MyProductSkeleton from '../MyProducts/MyProductSkeleton'


const UserContainer = () => {

    const { baseUrl } = useContext(GlobalContext);

    

    const [newArrivals, setNewArrivals] = useState([])
    const dummyArr = [1,2,3,4,5,6,7]
    const [newLoading, setNewLoading] = useState(false);



    const getUserBasedProducts = () => {

        setNewLoading(true)
        const headers = { 
            'ngrok-skip-browser-warning': true,
         }
        axios
            .get(`${baseUrl}/products/new-arrivals`, { headers })
            .then(
                (response) => {
                    setNewArrivals(response?.data?.data?.products)
                    setNewLoading(false);
                },
                (error) => {
                    setNewLoading(false);
                }
            );


         
    }

    useEffect(() => {
        getUserBasedProducts();
    }, [])

    
  return (
    <div className='flex items-start justify-start w-full h-auto flex-wrap'>
        {
            newLoading ? 
            dummyArr?.map((item)=>{
                return(
                    <MyProductSkeleton key={item}/>
                )
            }) :
            newArrivals?.map((product, key) => (
                <AllProductsCard product={product} key={key}/>
            ))
        }
    </div>
  )
}

export default UserContainer