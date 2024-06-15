import React from 'react'
import LoadParent from './components/Loading/LoadParent'
import Home from './components/Landing/Home'


const App = () => {
  return (
    <div className='h-screen bg-[#111]'>
      
      <LoadParent />
      <Home/>
    </div>
  )
}

export default App