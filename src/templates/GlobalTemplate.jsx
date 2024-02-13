import React from 'react'

import Footer from '../components/global/Footer';
import CartSidebar from '../components/global/CartSidebar';
import { GlobalContext } from '../context/GlobalContext';
import Navbar from '../components/global/Navbar';
import AuthenticatoinRequired from '../pages/AuthenticatoinRequired';
import { useContext, useEffect, useState } from "react";
import Error from '../components/global/Error';

const GlobalTemplate = ({page}) => {
    return (
        <main className="w-full min-h-screen h-auto flex flex-col justify-start items-start relative" >
            <Navbar />
            <Error />
            <CartSidebar />
            {page}
            <Footer />
        </main>
    )
}

export default GlobalTemplate