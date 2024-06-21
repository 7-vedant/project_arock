import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const HeroText = () => {

  const textref = useRef(null)

  useGSAP(()=>{
    let clutter = ""
    const splittedText = textref.current.textContent.split('')
    splittedText.forEach(function(e) {
      clutter += `<span>${e}</span>`
    })
    textref.current.innerHTML = clutter

    gsap.from("h1 span",{
      y:100,
      delay:2.3,
      opacity:0,
      stagger:0.15
    })
  })

  return (
    <div>
      <h1 ref={textref} className='whitespace-nowrap text-center font-black text-[21vw] font-[u8] leading-[18vw]'>AROCK</h1>
    </div>
  )
}

export default HeroText