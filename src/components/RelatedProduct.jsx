import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import Productitem from './Productitem'

const RelatedProduct = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext)
    const [related, setRelated] = useState([])
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice()
            productsCopy = productsCopy.filter((item) => category === item.category)
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory)
            setRelated(productsCopy.slice(0, 10))
        }
        // Trigger animation after component mounts
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [products, category, subCategory])

    if (related.length === 0) {
        return null
    }

    return (
        <div className='relative sm:px-1 lg:px-4 bg-gradient-to-b'>
            {/* Background decoration */}
            <div className='absolute inset-0 bg-gradient-to-br from-amber-50/30 via-transparent to-rose-50/30 pointer-events-none'></div>
            
            {/* Header section with enhanced styling */}
            <div className={`relative text-center py-2 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
            </div>

            {/* Products grid with staggered animation */}
            <div className='relative'>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 lg:gap-8'>
                    {related.map((item, index) => (
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

export default RelatedProduct