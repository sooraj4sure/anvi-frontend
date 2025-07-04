import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { data } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'


const PlaceOrder = () => {
const {navigate , backendUrl ,token , cartItems, setCartItems ,clearCart, getCartAmount , delivery_fee , products, giftWrapPrice} = useContext(ShopContext)
const [method , setMethod] = useState('COD')
const [formData , setFormData] = useState({
  firstName:'',
  lastName:'',
  email:'',
  street:'',
  city:'',
  state:'',
  zipcode:'',
  country:'',
  phone:'',
 })

const onChangeHandler = (event)=>{
  const name = event.target.name
  const value = event.target.value

  setFormData(data =>({...data,[name]:value}))

}

const onSubmitHandler = async(event)=>{
  event.preventDefault()
  try {
    let orderItems = []
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if (cartItems[items][item] >0 ) {
          const itemInfo = structuredClone(products.find(product => product._id === items))
          if (itemInfo) {
            itemInfo.size = item
            itemInfo.quantity = cartItems[items][item]
            orderItems.push(itemInfo)
            
          }
          
        }

      }
    }

    // console.log(orderItems);
    let orderData = {
      address:formData,
      items:orderItems,
      amount:getCartAmount() + delivery_fee
    }
    

    switch (method) {
      // api calls for COD
      case 'COD':
        const response =await axios.post(backendUrl + '/api/order/place',orderData, {headers:{token}})
        if (response.data.success) {
          // setCartItems({})
          clearCart()
          navigate('/orders')
        }else{
          toast.error(response.data.message)
        }
        
        break;
        case'stripe':
        const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, {headers:{token}})
        if (responseStripe.data.success) {
          const {session_url} = responseStripe.data
          window.location.replace(session_url)
        }else{
          toast.error(responseStripe.data.message)
        }
        break;
    
      default:
        break;
    }

  } catch (error) {
    
  }
}





  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[85vh] border-t'>
      {/* ------------------- left side of page------------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3 '>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>

        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='First Name' />
          <input required onChange={onChangeHandler} name='lastName' value={formData.lastName}  className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='Last Name' />

        </div>
        
          <input onChange={onChangeHandler} name='email' value={formData.email}  className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="email" placeholder='Email address' />
          <input required onChange={onChangeHandler} name='street' value={formData.street}  className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='Street' />
       
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='city' value={formData.city}  className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='City' />
          <input required onChange={onChangeHandler} name='state' value={formData.state}  className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='State' />
          
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode}  className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="number" placeholder='Zip code' />
          <input required onChange={onChangeHandler} name='country' value={formData.country}  className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='Country' />
          
        </div>
          <input required onChange={onChangeHandler} name='phone' value={formData.phone}  className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="number" placeholder='Phone' />

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
            <div onClick={()=>setMethod('COD')} className='flex items-center gap-3 border-2 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'COD' ? 'bg-emerald-500' : ''} `}></p>
              <p className='text-gray-800 text-sm font-medium  mx-4'>CASH ON DELIVERY</p>


            </div>

          </div>

          <div className='w-full text-end mt-8 '>
            <button type='submit' className='bg-[#e9718b] hover:bg-[#de426e] text-white font-semibold my-8 px-8 py-3 rounded-md w-full'>PLACE ORDER</button>

          </div>
        </div>

      </div>


    </form>
  )
}

export default PlaceOrder