import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const NavBar = (props) => {
  
  return (
    <div className='flex w-full items-end justify-between py-3 px-7' >
        <Logo/>
        <Menu menuOpen = {props.menuOpen} setMenuOpen = {props.setMenuOpen} />
    </div>
  )
}

export default NavBar