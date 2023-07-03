/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Banner = ({title}) => {
  return (
    <div className='h-[18rem] relative object-contain overflow-hidden'>
        <img className='w-full' src='/banner.jpg' alt='banner img'/>
        <h1 className='text-white text-center w-full text-6xl font-bold absolute top-[6rem] drop-shadow'>{title}</h1>
    </div>
  )
}

export default Banner