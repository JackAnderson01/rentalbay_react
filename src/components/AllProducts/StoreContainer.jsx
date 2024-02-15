import React from 'react'
import AllProductsCard from './AllProductsCard'
import { GlobalContext } from '../../context/GlobalContext'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import MyProductSkeleton from '../MyProducts/MyProductSkeleton'
import StoreProductCard from '../home/StoreProductCard'

const StoreContainer = () => {


    const { baseUrl } = useContext(GlobalContext);

    

    const [storeProduct, setStoreProducts] = useState([])
    const dummyArr = [1,2,3,4,5,6,7]
    const [storeLoading, setStoreLoading] = useState(false);



    const getAllStoreProducts = () => {

        setStoreLoading(true)
        const headers = { 
            'ngrok-skip-browser-warning': true,
         }
        axios
            .get(`${baseUrl}/products/new-arrivals`, { headers })
            .then(
                (response) => {
                    setStoreProducts(response?.data?.data?.products)
                    setStoreLoading(false);
                },
                (error) => {
                    setStoreLoading(false);
                }
            );


         
    }

    useEffect(() => {
        getAllStoreProducts();
    }, [])

  return (
    <div className='flex items-start justify-start w-full h-auto flex-wrap'>
        {
            storeLoading ? 
            dummyArr?.map((item)=>{
                return(
                    <MyProductSkeleton key={item}/>
                )
            }) :
            storeProduct?.map((product, key) => (
                <StoreProductCard product={product} key={key}/>
            ))
        }
    </div>
  )
}

export default StoreContainer