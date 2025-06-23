

import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='relative py-24 px-4 bg-gradient-to-br from-rose-50 via-white to-amber-50'>
      {/* Decorative elements */}
      <div className='absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-rose-200 to-amber-200 rounded-full opacity-20 animate-pulse'></div>
      <div className='absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-amber-200 to-rose-200 rounded-full opacity-20 animate-pulse delay-1000'></div>
      
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-300 via-amber-600 to-rose-100 bg-clip-text text-transparent mb-4'>
            <p className='prata-regular'> Our Promise to You </p>
          </h2>
          <p className='text-gray-600 text-lg font-light'>Crafted with love, delivered with care</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='group relative'>
            <div className='bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-rose-100 hover:border-rose-300 hover:-translate-y-2'>
              <div className='w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300'>
                <img src={assets.exchange_icon} className='w-8 h-8 filter brightness-0 invert' alt="Exchange" />
              </div>
              <h3 className='font-bold text-gray-800 text-lg mb-3 text-center'> Easy Exchanges</h3>
              <p className='text-gray-600 text-sm leading-relaxed'>Love it or swap it! No questions asked within 30 days</p>
            </div>
          </div>


          <div className='group relative'>
            <div className='bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-rose-100 hover:border-rose-300 hover:-translate-y-2'>
              <div className='w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-rose-500 to-purple-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300'>
                <img src={assets.support_img} className='w-8 h-8 filter brightness-0 invert' alt="Support" />
              </div>
              <h3 className='font-bold text-gray-800 text-lg mb-3 text-center'>Customer Suppor</h3>
              <p className='text-gray-600 text-sm leading-relaxed'>24/7 jewelry concierge ready to make your dreams come true</p>
            </div>
          </div>

          <div className='group relative'>
            <div className='bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-100 hover:border-amber-300 hover:-translate-y-2'>
              <div className='w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300'>
                <img src={assets.certificate_icon || assets.quality_icon} className='w-8 h-8 filter brightness-0 invert' alt="Certificate" />
              </div>
              <h3 className='font-bold text-gray-800 text-lg mb-3 text-center'>Authentic Products </h3>
              <p className='text-gray-600 text-sm leading-relaxed'>Every piece authenticated by experts with official certificates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy