import React, { useRef } from 'react'
import { Tilt } from '@jdion/tilt-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const MenuPage = (props) => {

  const menuRef = useRef(null)
  useGSAP(()=>{
    if (props.menuOpen){
      gsap.to(menuRef.current,{
        top:0,
      })
  
    }
    else{
      gsap.to(menuRef.current,{
        top:'100%',
      })
    }
    
  },[props.menuOpen])

  const menuBarCloses = ()=>{
    props.setMenuOpen(false)
  }

  return (
    <div ref={menuRef} className='fixed h-screen w-full top-full z-50 flex bg-[#111]'>
        <div className='menu-left w-2/3 py-12 px-32 h-full relative'>
            <div className='relative w-full h-full'>
                <Tilt className="bg-[url('https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop')] absolute scale-[0.97] opacity-20 w-full h-full bg-cover bg-center"></Tilt>
                <div className="bg-[url('https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop')] absolute scale-[0.91] opacity-70 w-full h-full bg-cover bg-center"></div>
                <Tilt className="bg-[url('https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop')] absolute scale-[0.94] opacity-50 w-full h-full bg-cover bg-center"></Tilt>
                <div className="bg-[url('https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop')] absolute  opacity-20 w-full h-full bg-cover bg-center"></div>
            </div>
        </div>
        <div className='w-1/3 h-full  py-[2vw] px-[3.5vw] relative text-right'>
          <button onClick={menuBarCloses} className='text-white'>close</button>
        </div>
    </div>
  )
}

export default MenuPage