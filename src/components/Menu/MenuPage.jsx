import React from 'react'
import { Tilt } from '@jdion/tilt-react'

const MenuPage = () => {
  return (
    <div className='fixed h-screen w-full top-0 z-50 flex bg-[#111]'>
        <div className='menu-left w-2/3 py-12 px-32 h-full relative'>
            <div className='relative w-full h-full'>
                <Tilt className="bg-[url('https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop')] absolute scale-[0.97] opacity-20 w-full h-full bg-cover bg-center"></Tilt>
                <div className="bg-[url('https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop')] absolute scale-[0.91] opacity-70 w-full h-full bg-cover bg-center"></div>
                <Tilt className="bg-[url('https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop')] absolute scale-[0.94] opacity-50 w-full h-full bg-cover bg-center"></Tilt>
                <div className="bg-[url('https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop')] absolute  opacity-20 w-full h-full bg-cover bg-center"></div>
            </div>
        </div>
        <div className='w-1/3 h-full bg-orange-100'></div>
    </div>
  )
}

export default MenuPage