
import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useEffect } from 'react'
import Title from './Title'
import Productitem from './Productitem'

const BestSeller = () => {
    const { products } = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller))
        setBestSeller(bestProduct.slice(0, 4))
        // Trigger animation after component mounts
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [products])

    return (
        <div className='relative my-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50 to-white'>
            {/* Background decoration with bestseller theme */}
            <div className='absolute inset-0 bg-gradient-to-br from-yellow-50/40 via-transparent to-orange-50/30 pointer-events-none'></div>
            
            {/* Floating elements for premium feel */}
            <div className='absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-xl animate-pulse'></div>
            <div className='absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full blur-xl animate-pulse' style={{animationDelay: '1s'}}></div>

            {/* Header section with bestseller styling */}
            <div className={`relative text-center py-12 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
                <div className='relative inline-block'>


                    
                    {/* Corner decorations */}
                    <div className='absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-yellow-400 opacity-60'></div>
                    <div className='absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-orange-400 opacity-60'></div>
                    
                    <Title text1={"BEST"} text2={"SELLERS"} />
                </div>
                
                {/* Enhanced description */}
                <div className='max-w-2xl mx-auto mt-8 px-4'>
                    <p className='text-gray-600 text-sm sm:text-base leading-relaxed font-light tracking-wide'>
                        Our most coveted jewelry pieces, loved by customers worldwide. 
                        These exceptional designs have captured hearts and become the 
                        favorites that define our collection's excellence.
                    </p>
                    
                    {/* Decorative line with bestseller theme */}
                    <div className='flex items-center justify-center mt-6'>
                        <div className='h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-24'></div>
                        <div className='mx-4 flex space-x-1'>
                            <div className='w-2 h-2 bg-yellow-400 rounded-full animate-pulse'></div>
                            <div className='w-2 h-2 bg-orange-400 rounded-full animate-pulse' style={{animationDelay: '0.5s'}}></div>
                            <div className='w-2 h-2 bg-yellow-400 rounded-full animate-pulse' style={{animationDelay: '1s'}}></div>
                        </div>
                        <div className='h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent w-24'></div>
                    </div>
                </div>
            </div>

            {/* Products grid with enhanced bestseller styling */}
            <div className='relative'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8'>
                    {bestSeller.map((item, index) => (
                        <div
                            key={item._id}
                            className={`transform transition-all duration-700 hover:scale-105 ${
                                isVisible 
                                    ? 'translate-y-0 opacity-100' 
                                    : 'translate-y-12 opacity-0'
                            }`}
                            style={{
                                transitionDelay: `${index * 150}ms`
                            }}
                        >
                            {/* Enhanced product wrapper with bestseller styling */}
                            <div className='group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100'>
                                {/* Bestseller badge */}
                                <div className='absolute top-2 left-2 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full shadow-md transform rotate-3 group-hover:rotate-6 transition-transform duration-300'>
                                    #Bestseller
                                </div>
                                
                                {/* Premium gradient overlay */}
                                <div className='absolute inset-0 bg-gradient-to-br from-white/90 via-transparent to-yellow-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'></div>
                                
                                {/* Golden shine effect on hover */}
                                <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent transition-transform duration-1000 pointer-events-none'></div>
                                
                                {/* Bestseller glow effect */}
                                <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm'></div>
                                
                                <div className='relative z-10'>
                                    <Productitem 
                                        id={item._id} 
                                        image={item.images} 
                                        name={item.name} 
                                        price={item.price} 
                                        mrp={item.mrp}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Shop Bestsellers Button */}
                {/* <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                    <button className='group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden'>
                        Button shine effect
                        <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700'></div>
                        
                        <span className='relative z-10 flex items-center'>
                            
                            Shop All Bestsellers
                            
                        </span>
                        
                        <svg className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                        </svg>
                    </button>
                </div> */}
            </div>

            {/* Bottom decorative elements with bestseller theme */}
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full'>
                <div className='flex space-x-2 opacity-40'>
                    <div className='w-1 h-1 bg-yellow-500 rounded-full animate-pulse'></div>
                    <div className='w-1 h-1 bg-orange-500 rounded-full animate-pulse' style={{animationDelay: '0.3s'}}></div>
                    <div className='w-1 h-1 bg-yellow-500 rounded-full animate-pulse' style={{animationDelay: '0.6s'}}></div>
                    <div className='w-1 h-1 bg-orange-500 rounded-full animate-pulse' style={{animationDelay: '0.9s'}}></div>
                    <div className='w-1 h-1 bg-yellow-500 rounded-full animate-pulse' style={{animationDelay: '1.2s'}}></div>
                </div>
            </div>
        </div>
    )
}

export default BestSeller