

import React from 'react'

export const NewsLetter = () => {
    const submitHandler=(event)=>{
        event.preventDefault();
    }
  return (
    <div className='relative py-16 px-4 bg-gradient-to-b from-rose-50 to-white'>
      {/* Subtle decorative elements */}
      <div className='absolute top-12 right-12 w-24 h-24 border border-rose-200/30 rounded-full'></div>
      <div className='absolute bottom-12 left-12 w-16 h-16 border border-amber-200/30 rounded-full'></div>
      
      <div className='relative max-w-2xl mx-auto text-center'>
        {/* Clean heading */}
        <h2 className='text-3xl md:text-4xl font-light text-gray-800 mb-3'>
          Join Our Collection
        </h2>
        <div className='flex justify-center items-center gap-2 mb-6'>
          <div className='w-8 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent'></div>
          <span className='text-rose-400 text-sm'>✦</span>
          <div className='w-8 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent'></div>
        </div>

        {/* Elegant subtitle */}
        <p className='text-gray-600 text-lg mb-2 font-light'>
          Get 20% off your first order
        </p>
        <p className='text-gray-500 text-sm mb-8'>
          Discover handcrafted jewelry and exclusive designs delivered to your inbox
        </p>

        {/* Clean form */}
        <form onSubmit={submitHandler} className='mb-8'>
          <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-2 flex items-center gap-2 max-w-md mx-auto hover:shadow-md transition-shadow duration-300'>
            <input 
              className='flex-1 px-4 py-3 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm' 
              type="email" 
              placeholder='Enter your email address' 
              required 
            />
            <button 
              type='submit' 
              className='bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 text-sm'
            >
              Subscribe
            </button>
          </div>
        </form>

        {/* Simple benefits */}
        <div className='flex justify-center items-center gap-8 text-xs text-gray-500'>
          <span>✓ Exclusive offers</span>
          <span>✓ New arrivals first</span>
          <span>✓ Style inspiration</span>
        </div>
      </div>
    </div>
  )
}