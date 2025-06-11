import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {

  const footerLogo = ''
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-14  text-sm'>
            <div>
            <img src={assets.anvi_logo} className='w-32 mb-5' alt="" />
            <p className='w-full md:w2/3 text-gray-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consequuntur eligendi repellendus.</p>
            </div>
            <div>
              <p className='text-xl font-medium mb-5'> COMPANY</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>

              </ul>
            </div>

            <div>
              <p className='text-xl font-medium mb-5 ' >GET IN TOUCH</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 9876543210</li>
                    <li>anvi.in@gmail.com</li>
              </ul>
            </div>

        </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'> &copy; Anvi.in All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer