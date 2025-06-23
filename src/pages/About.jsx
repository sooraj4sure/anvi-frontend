
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { NewsLetter } from '../components/NewsLetter'

const About = () => {
  return (
    <div className='relative bg-gradient-to-b from-white via-rose-50/30 to-white'>
      {/* Background decoration */}
      <div className='absolute inset-0 bg-gradient-to-br from-amber-50/20 via-transparent to-rose-50/20 pointer-events-none'></div>
      
      {/* Hero Section */}
      <div className='relative text-center pt-4 pb-2 px-4 sm:px-4 lg:px-8'>
        <div className='relative inline-block text-3xl'>
          
          <Title text1={'ABOUT'} text2={'US'}/>
        </div>
        
        {/* Decorative line */}
        <div className='flex items-center justify-center mt-2'>
          <div className='h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent w-24'></div>
          <div className='mx-4 w-2 h-2 bg-amber-300 rounded-full'></div>
          <div className='h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent w-24'></div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className='relative my-8 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center'>
          {/* Image Section */}
          <div className='w-full lg:w-1/2 relative group'>
            <div className='relative overflow-hidden rounded-2xl shadow-xl'>
              {/* Subtle gradient overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-amber-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10'></div>
              
              <img 
                className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105' 
                src={assets.about_img} 
                alt="About Us" 
              />
            </div>
            
            {/* Decorative frame corners */}
            <div className='absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-amber-400 opacity-70'></div>
            <div className='absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-rose-400 opacity-70'></div>
          </div>
          
          {/* Content Section */}
          <div className='w-full lg:w-1/2 flex flex-col justify-center gap-8'>
            <div className='space-y-6'>
              <p className='text-gray-700 leading-relaxed text-base font-light'>
                At our jewelry atelier, we believe that every piece tells a unique story of elegance, 
                craftsmanship, and timeless beauty. Our passion for creating exquisite jewelry has been 
                the driving force behind our commitment to excellence for over decades.
              </p>
              
              <p className='text-gray-700 leading-relaxed text-base font-light'>
                Each piece in our collection is meticulously crafted by skilled artisans who pour their 
                heart and soul into every design. We source only the finest materials and gemstones, 
                ensuring that every jewelry piece meets our highest standards of quality and beauty.
              </p>
            </div>
            
            {/* Mission Section */}
            <div className='bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100'>
              <div className='flex items-center gap-3 mb-4'>
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                </svg>
                <h3 className='text-lg font-semibold text-gray-800'>Our Mission</h3>
              </div>
              <p className='text-gray-700 leading-relaxed font-light'>
                To create jewelry that not only adorns but also empowers, inspiring confidence and 
                celebrating the unique beauty of every individual. We strive to make luxury accessible 
                while maintaining the highest standards of craftsmanship and ethical sourcing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='relative py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <div className='relative inline-block'>
              <Title text1={'WHY'} text2={'CHOOSE US'}/>
            </div>
            
            <p className='text-gray-600 text-sm mt-6 font-light max-w-2xl mx-auto'>
              Discover what sets us apart in the world of fine jewelry
            </p>
          </div>

          {/* Features Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
            {/* Quality Assurance */}
            <div className='group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden'>
              {/* Gradient overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-amber-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center'>
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className='text-lg font-semibold text-gray-800'>Quality Assurance</h3>
                </div>
                <p className='text-gray-600 leading-relaxed font-light'>
                  Every piece undergoes rigorous quality checks and is crafted using premium materials. 
                  Our commitment to excellence ensures that each jewelry item meets the highest standards 
                  of durability and beauty.
                </p>
              </div>
            </div>

            {/* Convenience */}
            <div className='group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden'>
              {/* Gradient overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-rose-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center'>
                    <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className='text-lg font-semibold text-gray-800'>Convenience</h3>
                </div>
                <p className='text-gray-600 leading-relaxed font-light'>
                  Shop from the comfort of your home with our user-friendly platform. We offer secure 
                  payments, fast shipping, and easy returns to make your jewelry shopping experience 
                  seamless and enjoyable.
                </p>
              </div>
            </div>

            {/* Customer Service */}
            <div className='group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden'>
              {/* Gradient overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-amber-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center'>
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className='text-lg font-semibold text-gray-800'>Exceptional Customer Service</h3>
                </div>
                <p className='text-gray-600 leading-relaxed font-light'>
                  Our dedicated customer service team is always ready to assist you with personalized 
                  recommendations, sizing guidance, and after-sales support to ensure your complete 
                  satisfaction with every purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className='flex justify-center pb-8'>
        <div className='flex space-x-2 opacity-40'>
          <div className='w-1 h-1 bg-amber-400 rounded-full'></div>
          <div className='w-1 h-1 bg-rose-400 rounded-full'></div>
          <div className='w-1 h-1 bg-amber-400 rounded-full'></div>
        </div>
      </div>

      <NewsLetter/>
    </div>
  )
}

export default About