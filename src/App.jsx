import React from 'react'
import LoadParent from './components/Loading/LoadParent'
import Home from './components/Landing/Home'
import MenuPage from './components/Menu/MenuPage'


const App = () => {
  return (
    <div className='h-screen bg-[#111]'>
      {/* <MenuPage /> */}
      <LoadParent />
      <Home />
    </div>
  )
}

export default App