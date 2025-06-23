import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Productitem from './Productitem';
import { useNavigate } from 'react-router-dom';

const LatestCollection = () => {
    const { products } = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])
    const [isVisible, setIsVisible] = useState(false)
    const navigate = useNavigate();




    const handleNavigate = () => {
    navigate('/collection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



    useEffect(() => {
        setLatestProducts(products.slice(0, 8));
        // Trigger animation after component mounts
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [products])

    return (
        <div className='relative my-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rose-50 to-white'>
            {/* Background decoration */}
            <div className='absolute inset-0 bg-gradient-to-br from-amber-50/30 via-transparent to-rose-50/30 pointer-events-none'></div>
            
            {/* Header section with enhanced styling */}
            <div className={`relative text-center py-12 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
                <div className='relative inline-block'>
                    {/* Decorative elements */}
                    <div className='absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-amber-300 opacity-60'></div>
                    <div className='absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-rose-300 opacity-60'></div>
                    
                    <Title text1={"LATEST"} text2={"COLLECTION"} />
                </div>
                
                {/* Enhanced description */}
                <div className='max-w-2xl mx-auto mt-8 px-4'>
                    <p className='text-gray-600 text-sm sm:text-base leading-relaxed font-light tracking-wide'>
                        Discover our handpicked selection of exquisite jewelry pieces, 
                        crafted with precision and designed to captivate. Each piece tells 
                        a story of elegance and timeless beauty.
                    </p>
                    
                    {/* Decorative line */}
                    <div className='flex items-center justify-center mt-6'>
                        <div className='h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent w-24'></div>
                        <div className='mx-4 w-2 h-2 bg-amber-300 rounded-full'></div>
                        <div className='h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent w-24'></div>
                    </div>
                </div>
            </div>

            {/* Products grid with staggered animation */}
            <div className='relative'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8'>
                    {latestProducts.map((item, index) => (
                        <div
                            key={item._id}
                            className={`transform transition-all duration-700 hover:scale-105 ${
                                isVisible 
                                    ? 'translate-y-0 opacity-100' 
                                    : 'translate-y-12 opacity-0'
                            }`}
                            style={{
                                transitionDelay: `${index * 100}ms`
                            }}
                        >
                            {/* Product wrapper with enhanced styling */}
                            <div className='group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100'>
                                {/* Subtle gradient overlay */}
                                <div className='absolute inset-0 bg-gradient-to-br from-white/90 via-transparent to-amber-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'></div>
                                
                                {/* Shine effect on hover */}
                                <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 pointer-events-none'></div>
                                
                                <Productitem 
                                    id={item._id} 
                                    image={item.images} 
                                    name={item.name} 
                                    price={item.price} 
                                    mrp={item.mrp}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>





                    <button onClick={handleNavigate} className='group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-amber-400 to-rose-400 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'>
                        <span className='relative z-10'>View All Collection</span>
                        <div className='absolute inset-0 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        <svg className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                        </svg>
                    </button>


                    
                </div>
            </div>

            {/* Bottom decorative elements */}
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full'>
                <div className='flex space-x-2 opacity-30'>
                    <div className='w-1 h-1 bg-amber-400 rounded-full animate-pulse'></div>
                    <div className='w-1 h-1 bg-rose-400 rounded-full animate-pulse' style={{animationDelay: '0.5s'}}></div>
                    <div className='w-1 h-1 bg-amber-400 rounded-full animate-pulse' style={{animationDelay: '1s'}}></div>
                </div>
            </div>
        </div>
    )
}

export default LatestCollection