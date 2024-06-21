import React from 'react'
import 'remixicon/fonts/remixicon.css'

const SubHeading = () => {
  return (
    <div className='text-white flex uppercase font-[a4] font-extralight text-sm justify-between'>
      <div className='flex gap-3'>
      <i className="ri-play-large-fill px-4 py-3 border-2 rounded-full"></i>
        <h3>Play <br />the film</h3>
      </div>
      <div className='flex gap-16'>
        <h3>creator <br />curator</h3>
        <h3>new york <br />los angeles</h3>
      </div>
    </div>
  )
}

export default SubHeading