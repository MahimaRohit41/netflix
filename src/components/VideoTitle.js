import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='text-lg w-1/2 py-4'>{overview}</p>
        <div>
            <button className='py-2 px-16  m-2 text-black bg-white text-lg rounded-md hover:bg-opacity-80'>Play</button>
            <button className='py-2 px-16 m-2 text-white bg-gray-600 text-lg rounded-md'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;
