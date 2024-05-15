import React from 'react'

const Location  = () => {

  const renderSearchLocation = () => {
    return (
      <div className='flex border-2'>
        <input type='search'  className='px-1 outline-none' placeholder='Enter Location'/>
        <button className='px-6 py-1 m-2 bg-[#e73c33] rounded-lg text-lg font-bold'>Next</button>
      </div>
    )
  }
  return (
    <div className='flex flex-col justify-center items-center'>
    <img src='https://res.cloudinary.com/drdgj0pch/image/upload/v1715763687/20944059_ojow64.jpg' className='w-[600px] h-[400px] object-fill' alt='car'/>
    {renderSearchLocation()}
    </div>
  )
}

export default Location 