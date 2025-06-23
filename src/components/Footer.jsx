

import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    const companyLinks = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Collections', href: '#' },
        { name: 'Delivery', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms & Conditions', href: '#' }
    ]

    const socialIcons = [
        { name: 'Instagram', icon: '📷', color: 'hover:text-rose-400' },
        { name: 'Facebook', icon: '📘', color: 'hover:text-blue-500' },
        { name: 'Pinterest', icon: '📌', color: 'hover:text-red-400' }
    ]

    return (
        <footer className='bg-gradient-to-br from-gray-50 to-white border-t border-gray-200 mt-20'>
            {/* Subtle decorative top border */}
            <div className='h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent'></div>

            <div className='px-4 sm:px-6 lg:px-8 py-16'>
                {/* Main footer content */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-7xl mx-auto'>
                    
                    {/* Brand section */}
                    <div className='lg:col-span-2 space-y-6'>
                        <div className='flex items-center space-x-4'>
                            <img 
                                src={assets.anvi_logo} 
                                className='w-36 h-auto' 
                                alt="Anvi Jewelry" 
                            />
                            <div className='h-8 w-px bg-gradient-to-b from-rose-300 to-amber-300'></div>
                            <span className='text-lg font-light text-gray-700 tracking-wide'>Timeless Elegance</span>
                        </div>
                        
                        <p className='text-gray-600 leading-relaxed max-w-md text-sm'>
                            Creating exquisite jewelry pieces that celebrate life's most precious moments. 
                            Each design reflects our commitment to craftsmanship, quality, and timeless beauty.
                        </p>

                        {/* Newsletter signup */}
                        <div className='space-y-4'>
                            <h4 className='text-sm font-medium text-gray-800 tracking-wide'>
                                Stay Connected
                            </h4>
                            <div className='flex gap-3 max-w-sm'>
                                <input 
                                    type="email" 
                                    placeholder="Your email address"
                                    className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-200 text-sm'
                                />
                                <button className='px-6 py-2 bg-gradient-to-r from-rose-400 to-amber-400 text-white rounded-lg text-sm hover:from-rose-500 hover:to-amber-500 transition-all duration-300'>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Company links */}
                    <div className='space-y-6'>
                        <h3 className='text-lg font-medium text-gray-800 relative'>
                            Company
                            <div className='absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-rose-300 to-amber-300'></div>
                        </h3>
                        <ul className='space-y-3'>
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href}
                                        className='text-gray-600 hover:text-rose-500 transition-colors duration-200 text-sm'
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div className='space-y-6'>
                        <h3 className='text-lg font-medium text-gray-800 relative'>
                            Contact Us
                            <div className='absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-300 to-rose-300'></div>
                        </h3>
                        <div className='space-y-4'>
                            <div className='flex items-center space-x-3 text-gray-600'>
                                <div className='w-6 h-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center text-xs'>
                                    📞
                                </div>
                                <span className='text-sm'>+91 9876543210</span>
                            </div>
                            <div className='flex items-center space-x-3 text-gray-600'>
                                <div className='w-6 h-6 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center text-xs'>
                                    ✉️
                                </div>
                                <span className='text-sm'>anvi.in@gmail.com</span>
                            </div>
                            <div className='flex items-center space-x-3 text-gray-600'>
                                <div className='w-6 h-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center text-xs'>
                                    📍
                                </div>
                                <span className='text-sm'>Delhi, India</span>
                            </div>
                        </div>

                        {/* Social media */}
                        <div className='space-y-3'>
                            <h4 className='text-sm font-medium text-gray-700'>Follow Us</h4>
                            <div className='flex space-x-3'>
                                {socialIcons.map((social, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className={`w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center ${social.color} hover:bg-gray-200 transition-colors duration-200`}
                                        title={social.name}
                                    >
                                        <span className='text-sm'>{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className='mt-12 pt-8 border-t border-gray-200'>
                    <div className='flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 max-w-7xl mx-auto'>
                        <div className='flex items-center space-x-6 text-sm text-gray-500'>
                            <span>&copy; 2025 Anvi.in All Rights Reserved.</span>
                            <span className='hidden sm:block'>•</span>
                            <span className='hidden sm:block'>Crafted with care in India</span>
                        </div>
                        
                        {/* Trust indicators */}
                        <div className='flex items-center space-x-4 text-xs text-gray-500'>
                            <div className='flex items-center space-x-1'>
                                <span className='text-green-500'>🔒</span>
                                <span>Secure</span>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <span className='text-blue-500'>✓</span>
                                <span>Certified</span>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <span className='text-amber-500'>★</span>
                                <span>Trusted</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer