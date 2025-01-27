import React from 'react'

const GPTSearchbar = () => {
  return (
    <div className='pt-[10%] flex justify-center relative z-20'>
      <form className='w-1/2 bg-black grid grid-cols-12'>
        <input className='bg-white p-4 m-4 col-span-9 ' type='text' placeholder='What would you like to watch today?'/>
        <button className='py-2 px-4 m-4 text-white bg-red-700 rounded-md col-span-3'>Search</button>
      </form>
    </div>
  )
}

export default GPTSearchbar
