import CategoriesContainer from '../components/home/CategoriesContainer'
import Hero from '../components/home/Hero'
import NormalProductContainer from '../components/home/NormalProductContainer'
import StoreProductContainer from '../components/home/StoreProductContainer'
import { GlobalContext } from '../context/GlobalContext'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

    const { baseUrl } = useContext(GlobalContext);

    

    const [newArrivals, setNewArrivals] = useState([])
    const [newLoading, setNewLoading] = useState(false);



    const getNewArrivals = () => {

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
        getNewArrivals();
    }, [])



    return (
        <div className={`w-full h-auto flex flex-col  justify-start items-start`}>
            <Hero />
            <CategoriesContainer />
            <NormalProductContainer title={"New Arrivals"} link={"/user-products"} products={newArrivals} loading={newLoading} />
            <StoreProductContainer title={"RB Mall"} link={"/store-products"} products={newArrivals}  loading={newLoading}/>
        </div>
    )
}

export default Home