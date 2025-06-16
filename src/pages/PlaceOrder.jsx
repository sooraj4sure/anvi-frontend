import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method , setMethod] = useState('cod')
  const {navigate } = useContext(ShopContext)



  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[85vh] border-t'>
      {/* ------------------- left side of page------------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3 '>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>

        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='First Name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='Last Name' />

        </div>
        
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="email" placeholder='Email address' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='Street' />
       
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='State' />
          
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="number" placeholder='Zip code' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='Country' />
          
        </div>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="number" placeholder='Phone' />

      </div>

      {/* ----------------Right side-------------------------- */}

      <div className='mt-8'> 
        <div className='mt-8 min-w-80'>
          <CartTotal/>

        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>

{/* --------------------------------------Payment Method------------------------------------------ */}

          <div className='flex gap-3 flex-col lg:flex-row '>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border-2 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-emerald-500' : ''} `}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />

            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border-2 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-emerald-500' : ''} `}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />

            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border-2 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-emerald-500' : ''} `}></p>
              <p className='text-gray-800 text-sm font-medium  mx-4'>CASH ON DELIVERY</p>


            </div>

          </div>

          <div className='w-full text-end mt-8 '>
            <button onClick={()=>navigate('/orders')} className='bg-emerald-500 text-black font-semibold my-8 px-8 py-3 rounded-md w-full'>PLACE ORDER</button>

          </div>
        </div>

      </div>


    </div>
  )
}

export default PlaceOrder