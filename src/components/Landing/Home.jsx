import React, { useRef } from 'react'
import NavBar from '../Navbar/NavBar'
import CenterText from '../Center/CenterText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = (props) => {

    const homeref = useRef(null);
    const pageref = useRef(null);

    
    useGSAP(()=>{
        gsap.to(homeref.current,{
            y:'-100%',
            delay:1.9,
            duration:1
        })
        gsap.from(pageref.current,{
            opacity:0,
            delay:1.8,
            duration:1,
            y:50,
            scale:1.05
        })
    })
    
  return (
    <div >
        <div ref={homeref} className='h-screen bg-[#111] w-full z-10 fixed'>

        </div>
        <div ref={pageref} className='text-white w-full h-screen bg-cover bg-center bg-[url(/bg.webp)]' >
            <NavBar menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} />
            <CenterText/>
        </div>
    </div>
  )
}

export default Home