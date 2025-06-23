
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { NewsLetter } from '../components/NewsLetter'

const Contact = () => {
  const handleSocialClick = (platform) => {
    switch(platform) {
      case 'instagram':
        window.open('https://instagram.com', '_blank')
        break
      case 'youtube':
        window.open('https://youtube.com/', '_blank')
        break
      case 'gmail':
        window.open('mailto:anvi.in@gmail.com', '_blank')
        break
      default:
        break
    }
  }

  return (
    <div className='relative bg-gradient-to-b from-white via-rose-50/30 to-white'>
      {/* Background decoration */}
      <div className='absolute inset-0 bg-gradient-to-br from-amber-50/20 via-transparent to-rose-50/20 pointer-events-none'></div>
      
      {/* Hero Section */}
      <div className='relative text-center pt-4 pb-2 px-4 sm:px-2 lg:px-8'>
        <div className='relative inline-block text-3xl'>
      
          
          <Title text1={"CONTACT"} text2={'US'}/>
        </div>
        
        {/* Decorative line */}
        <div className='flex items-center justify-center mt-2'>
          <div className='h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent w-24'></div>
          <div className='mx-4 w-2 h-2 bg-amber-300 rounded-full'></div>
          <div className='h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent w-24'></div>
        </div>
        
        <p className='text-gray-600 text-sm mt-6 font-light max-w-2xl mx-auto'>
          We'd love to hear from you. Get in touch with us for any inquiries about our exquisite jewelry collection.
        </p>
      </div>

      {/* Main Content Section */}
      <div className='relative my-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center'>
          {/* Image Section */}
          <div className='w-full lg:w-1/2 relative group'>
            <div className='relative overflow-hidden rounded-2xl shadow-xl'>
              {/* Subtle gradient overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-amber-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10'></div>
              
              <img 
                className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105' 
                src={assets.contact_img} 
                alt="Contact Us" 
              />
            </div>
            
            {/* Decorative frame corners */}
            <div className='absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-amber-400 opacity-70'></div>
            <div className='absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-rose-400 opacity-70'></div>
          </div>
          
          {/* Contact Information Section */}
          <div className='w-full lg:w-1/2 flex flex-col justify-center gap-8'>
            
            {/* Store Information */}
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center'>
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-800'>Our Store</h3>
              </div>
              
              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <p className='text-gray-700 leading-relaxed'>
                    45/6 Chandni Chowk<br />
                    XYZ Market, Delhi, India
                  </p>
                </div>
                
                <div className='flex items-start gap-3'>
                  <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className='text-gray-700'>
                    <span className='font-medium'>Tel:</span> (+91) 9876543210
                  </p>
                </div>
                
                <div className='flex items-start gap-3'>
                  <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className='text-gray-700'>
                    <span className='font-medium'>Email:</span> anvi.in@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center'>
                  <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-800'>Connect With Us</h3>
              </div>
              
              <p className='text-gray-600 mb-6 font-light'>
                Follow us on social media for the latest jewelry trends, exclusive offers, and behind-the-scenes content.
              </p>
              
              <div className='flex gap-4'>
                {/* Instagram */}
                <button 
                  onClick={() => handleSocialClick('instagram')}
                  className='group relative w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300'
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>

                {/* YouTube */}
                <button 
                  onClick={() => handleSocialClick('youtube')}
                  className='group relative w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300'
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </button>

                {/* Gmail */}
                <button 
                  onClick={() => handleSocialClick('gmail')}
                  className='group relative w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300'
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Career Section */}
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center'>
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-800'>Career at Anvi</h3>
              </div>
              
              <p className='text-gray-600 mb-6 font-light'>
                Join our passionate team and be part of creating beautiful jewelry experiences. 
                We're always looking for talented individuals who share our commitment to excellence.
              </p>
              
              <button className='group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-amber-400 to-rose-400 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'>
                <span className='relative z-10'>Explore Opportunities</span>
                <div className='absolute inset-0 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <svg className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </svg>
              </button>
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

export default Contact