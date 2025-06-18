import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {
let freeDeliveryValue = 399;
let giftWrapPrice = 50;
let [giftWrap , setGiftWrap] = useState(0)

    const {currency ,  getCartAmount} = useContext(ShopContext)
    let {delivery_fee } = useContext(ShopContext)


let handleGift = (e) => {
  if (e.target.checked) {
    setGiftWrap(50); // Add 50 
  } else {
    setGiftWrap(0); // Reset
  }
}

  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={'CART'} text2={'TOTAL'}/>

        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between '>
                <p>Subtotal</p>
                <p>{currency}{getCartAmount()}.00</p>

            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shipping Fee <br />
                    { getCartAmount() < freeDeliveryValue ? <span className='text-xs text-gray-400'>" Add product worth {freeDeliveryValue - getCartAmount()} more to get free delivery. "</span> : <span className='text-xs text-emerald-600'>Free shipping for this order.</span> }
               </p>
                <p>{currency}{getCartAmount() <= freeDeliveryValue ? delivery_fee = 40 : delivery_fee}.00</p>

            </div>
            <hr />

            <div className='flex justify-between'>
                <b>  <span className='text-red-400'>Pan India Free Shipping on orders above Rs. {freeDeliveryValue }</span> </b>
               

            </div>
            <hr />
{/*  ---------------------------- GIFT WRAP ------------------ */}

            <div className='flex justify-between'>
                <b> <input onChange={handleGift} type="checkbox" /> Make it Special ! 🎁 <span className='text-pink-500'>Gift Wrap</span> it for Only {currency}50 </b>
               

            </div>
            <hr />


            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency}{ getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee + giftWrap  }.00</b>

            </div>

        </div>

    </div>
  )
}

export default CartTotal