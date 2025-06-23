import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';

const ProductItem = ({ id, image, name, price, mrp }) => {
  const { currency, addToCart, isLoading } = useContext(ShopContext);
  const [selectedSize] = useState('FREE'); // Default size
  const [isImageLoading, setIsImageLoading] = useState(true);
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(id, selectedSize);
  };

  const handleProductClick = (e) => {
    // Only navigate if the click wasn't on the Buy Now button
    if (!e.target.closest('button')) {
      window.scrollTo(0, 0); // Scroll to top before navigation
      navigate(`/product/${id}`);
    }
  };

  // Calculate discount percentage
  const discount = mrp ? Math.round(((mrp - price) / mrp) * 100) : 0;

  return (
    <div 
      className='text-gray-700 cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden block'
      onClick={handleProductClick}
    >
      {/* Image with loading state */}
      <div className='overflow-hidden relative aspect-square'>
        {isImageLoading && (
          <div className='absolute inset-0 bg-gray-200 animate-pulse'></div>
        )}
        <img 
          className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
            isImageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          src={image?.[0] || '/placeholder-product.jpg'} 
          alt={name}
          onLoad={() => setIsImageLoading(false)}
          onError={(e) => {
            e.target.src = '/placeholder-product.jpg';
            setIsImageLoading(false);
          }}
        />
        
        {/* Discount badge */}
        {discount > 0 && (
          <span className='absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full'>
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Product info */}
      <div className='p-3'>
        <h3 className='font-medium text-gray-900 line-clamp-2 h-12' title={name}>
          {name}
        </h3>
        
        <div className='flex items-center gap-2 mt-2'>
          <span className='text-lg font-bold text-gray-900'>
            {currency}{price}
          </span>
          {mrp && mrp > price && (
            <span className='text-sm font-light text-gray-500 line-through'>
              {currency}{mrp}
            </span>
          )}
        </div>

        <button 
          className={`mt-3 w-full py-2 font-semibold rounded transition-colors ${
            isLoading ? 'bg-gray-300 cursor-not-allowed' : 
            'bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 hover:from-pink-400 hover:via-pink-300 hover:to-pink-200'
          }`}
          onClick={handleAddToCart}
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add To Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;