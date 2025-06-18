import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const Productitem = ({id , image , name, price ,}) => {

    const {currency } = useContext(ShopContext)

  return (
   <Link className='text-gray-700 cursor-pointer shadow-xl' to={`/product/${id}`}>
    <div className='overflow-hidden' >
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />


    </div>
  
     <p className='pt-3 pb-1 text-sm mx-2 '>{name}</p>
    <p className='text-lg font-bold mx-2 mb-2 '>{currency}{price}</p>

    <button className="bg-[linear-gradient(92.32deg,_#ffb9c7_12.41%,_#ffe5ea_99.21%)] text-black font-semibold py-3 w-full transition duration-300">
  Buy Now
</button>

  

   </Link>
  )
}

export default Productitem