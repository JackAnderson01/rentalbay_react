import React from 'react'
import AllProductsCard from './AllProductsCard'
import { GlobalContext } from '../../context/GlobalContext'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'


const UserContainer = () => {

    const { baseUrl } = useContext(GlobalContext);

    

    const [newArrivals, setNewArrivals] = useState([])
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
            newArrivals?.map((product, key) => (
                <AllProductsCard product={product} key={key}/>
            ))
        }
    </div>
  )
}

export default UserContainer