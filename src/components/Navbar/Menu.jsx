import React from 'react'

const Menu = (props) => {

  const menuBarOpens = ()=>{
    props.setMenuOpen(true)
    console.log(props.menuOpen)
  }

  return (
    <button onClick={menuBarOpens} className='font-[a4] uppercase text[1px]'>Menu</button>
  )
}

export default Menu