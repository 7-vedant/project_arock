import React from 'react'
import LoadChild from './LoadChild'

const LoadParent = () => {

  return (
    <div className='h-1 fixed w-full bg-transperent rounded-xl'>
        <LoadChild/>
    </div>
  )
}

export default LoadParent