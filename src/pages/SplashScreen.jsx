import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {

  
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(()=>{
      const icon = document.getElementById("splash-animate-icon");
      icon.classList.add("rotate-45")

    }, 200)
    setTimeout(()=>{
      const icon = document.getElementById("splash-animate-icon");
      icon.classList.add("translate-x-[60vw]")

    }, 400)
    
    setTimeout(()=>{
      const icon = document.getElementById("splash-animate-logo");
      icon.classList.remove("translate-x-[100vw]")
      icon.classList.add("translate-x-1/2")
    }, 600)

    
      setTimeout(() => {
          navigate("/login")
      }, 700)
  }, [])

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <img src='logo.svg' className='fixed top-[45%] left-0 h-16 translate-x-[100vw] z-50' id='splash-animate-logo'/>
      <img src='/rentalbay-icon.png' id='splash-animate-icon' className='transition-all fixed top-[45%] left-[45%] duration-200' />
    </div>
  )
}

export default SplashScreen