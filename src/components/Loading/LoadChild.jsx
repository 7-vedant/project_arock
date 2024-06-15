import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const LoadChild = () => {

    const line = useRef(null)
    const tl = gsap.timeline()
    useGSAP(()=>{
        tl.to(line.current,{
            width:'100%',
            duration:1.3,
            delay: 0.7,
            ease:'expo.out',
        }).to(line.current,{
            opacity:0
        })
    })
  return (
    <div ref={line} className='h-full w-0 bg-white rounded'></div>
  )
}

export default LoadChild