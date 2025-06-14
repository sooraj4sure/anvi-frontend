import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const Productitem = ({id , image , name, price ,}) => {

    const {currency } = useContext(ShopContext)

  return (
   <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
    <div className='overflow-hidden' >
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />


    </div>
    <p className='pt-3 pb-1 text-sm '>{name}</p>
    <p className='text-sm font-medium'>{currency}{price}</p>

    {/* <button onClick={()=> addToCart(productData , size)} className='bg-black text-white px-8 py-3 active:bg-gray-700' >ADD TO CART</button> */}

   </Link>
  )
}

export default Productitem