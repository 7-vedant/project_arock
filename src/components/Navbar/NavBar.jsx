import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const NavBar = () => {
  return (
    <div className='flex w-full items-center justify-between py-3 px-7' >
        <Logo/>
        <Menu/>
    </div>
  )
}

export default NavBar