import React, { useRef } from 'react'
import NavBar from '../Navbar/NavBar'
import CenterText from '../Center/CenterText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {

    const homeref = useRef(null)

    
    useGSAP(()=>{
        gsap.from(homeref.current,{
            opacity:0,
            delay:2,
            duration:0.5
        })
    })
    
  return (
    <main ref={homeref} className='text-white w-full h-screen bg-cover bg-center bg-[url(/bg.webp)]' >
      <NavBar/>
      <CenterText/>
    </main>
  )
}

export default Home