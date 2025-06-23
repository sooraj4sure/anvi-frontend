// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import RelatedProduct from '../components/RelatedProduct'
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css'

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart, isLoading } = useContext(ShopContext);
//   const [productData, setProductData] = useState(null);
//   const [selectedImage, setSelectedImage] = useState('');
//   const [selectedSize, setSelectedSize] = useState('');
//   const [isAddingToCart, setIsAddingToCart] = useState(false);

//   useEffect(() => {
//     if (products.length > 0) {
//       const foundProduct = products.find(item => item._id === productId);
//       if (foundProduct) {
//         setProductData(foundProduct);
//         setSelectedImage(foundProduct.images?.[0] || '');
//       }
//     }
//   }, [productId, products]);

//   const handleAddToCart = async () => {
//     if (!selectedSize) {
//       alert('Please select a size');
//       return;
//     }
    
//     setIsAddingToCart(true);
//     try {
//       await addToCart(productData._id, selectedSize);
//       // Optional: Show success toast/message
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     } finally {
//       setIsAddingToCart(false);
//     }
//   };

//   if (!productData) {
//     return (
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Image Gallery Skeleton */}
//           <div>
//             <Skeleton height={500} className="mb-4" />
//             <div className="flex gap-2">
//               {[1, 2, 3, 4].map((item) => (
//                 <Skeleton key={item} height={80} width={80} />
//               ))}
//             </div>
//           </div>
          
//           {/* Product Info Skeleton */}
//           <div>
//             <Skeleton height={40} width={300} className="mb-4" />
//             <div className="flex gap-2 mb-4">
//               {[1, 2, 3, 4, 5].map((item) => (
//                 <Skeleton key={item} circle height={20} width={20} />
//               ))}
//             </div>
//             <Skeleton height={30} width={100} className="mb-4" />
//             <Skeleton count={4} className="mb-2" />
//             <div className="flex gap-2 my-6">
//               {[1, 2, 3].map((item) => (
//                 <Skeleton key={item} height={40} width={60} />
//               ))}
//             </div>
//             <Skeleton height={50} width={200} />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Calculate discount percentage
//   const discount = productData.mrp 
//     ? Math.round(((productData.mrp - productData.price) / productData.mrp) * 100)
//     : 0;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Product data */}
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Product images */}
//         <div className="flex-1 flex flex-col md:flex-row gap-4">
//           {/* Thumbnails */}
//           <div className="flex md:flex-col overflow-x-auto md:overflow-y-auto gap-2 md:w-24 order-2 md:order-1">
//             {productData.images?.map((item, index) => (
//               <img 
//                 key={index}
//                 src={item}
//                 alt={`Thumbnail ${index + 1}`}
//                 className={`w-20 h-20 object-cover cursor-pointer border-2 ${selectedImage === item ? 'border-orange-500' : 'border-transparent'}`}
//                 onClick={() => setSelectedImage(item)}
//               />
//             ))}
//           </div>
          
//           {/* Main image */}
//           <div className="flex-1 order-1 md:order-2">
//             {selectedImage ? (
//               <img 
//                 src={selectedImage}
//                 alt={productData.name}
//                 className="w-full h-auto max-h-[500px] object-contain"
//               />
//             ) : (
//               <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">
//                 <span>No image available</span>
//               </div>
//             )}
            
//             {discount > 0 && (
//               <div className="mt-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded inline-block">
//                 {discount}% OFF
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Product information */}
//         <div className="flex-1">
//           <h1 className="text-2xl md:text-3xl font-bold mb-2">{productData.name}</h1>
          
//           {/* Ratings */}
//           <div className="flex items-center mb-4">
//             <div className="flex">
//               {[1, 2, 3, 4].map((star) => (
//                 <img key={star} src={assets.star_icon} alt="Star" className="w-4 h-4" />
//               ))}
//               <img src={assets.star_dull_icon} alt="Star" className="w-4 h-4" />
//             </div>
//             <span className="ml-2 text-sm text-gray-600">(122 reviews)</span>
//           </div>
          
//           {/* Pricing */}
//           <div className="mb-6">
//             <span className="text-2xl font-bold mr-3">{currency}{productData.price}</span>
//             {productData.mrp && productData.mrp > productData.price && (
//               <span className="text-lg text-gray-500 line-through">
//                 {currency}{productData.mrp}
//               </span>
//             )}
//           </div>
          
//           {/* Description */}
//           <p className="text-gray-700 mb-8">{productData.description}</p>
          
//           {/* Size selector */}
//           <div className="mb-8">
//             <h3 className="text-lg font-medium mb-3">Select Size</h3>
//             <div className="flex flex-wrap gap-2">
//               {productData.sizes?.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-4 py-2 border rounded-md ${selectedSize === size ? 'border-orange-500 bg-orange-50' : 'border-gray-300'}`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
          
//           {/* Add to cart button */}
//           <button
//             onClick={handleAddToCart}
//             disabled={isAddingToCart || isLoading}
//             className={`w-full md:w-auto px-8 py-3 rounded-lg font-semibold text-white ${
//               isAddingToCart || isLoading
//                 ? 'bg-gray-400 cursor-not-allowed'
//                 : 'bg-[#e9718b] hover:bg-[#de426e]'
//             }`}
//           >
//             {isAddingToCart ? 'Adding...' : 'ADD TO CART'}
//           </button>
          
//           {/* Policies */}
//           <div className="mt-8 pt-6 border-t">
//             <ul className="text-sm text-gray-600 space-y-2">
//               <li>✓ 100% Original Product</li>
//               <li>✓ Cash On Delivery available</li>
//               <li>✓ Easy return and exchange within 7 days</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Description and reviews */}
//       <div className="mt-16">
//         <div className="flex border-b">
//           <button className="px-6 py-3 font-medium border-b-2 border-orange-500">
//             Description
//           </button>
//           <button className="px-6 py-3 text-gray-500">Reviews (122)</button>
//         </div>
        
//         <div className="p-6 text-gray-700">
//           <p className="mb-4">
//             {productData.description || 'No detailed description available.'}
//           </p>
//           <p>
//             This premium product is carefully crafted using high-quality materials to ensure durability
//             and comfort. Each item undergoes strict quality control before shipping to guarantee customer
//             satisfaction.
//           </p>
//         </div>
//       </div>

//       {/* Related products */}
//       <div className="mt-16">
//         <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
//         <RelatedProduct 
//           category={productData.category} 
//           subCategory={productData.subCategory}
//           currentProductId={productId}
//         />
//       </div>
//     </div>
//   );
// };

// export default Product;

import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, isLoading } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find(item => item._id === productId);
      if (foundProduct) {
        setProductData(foundProduct);
        setSelectedImage(foundProduct.images?.[0] || '');
      }
    }
  }, [productId, products]);

  const handleAddToCart = async () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    
    setIsAddingToCart(true);
    try {
      await addToCart(productData._id, selectedSize);
      // Optional: Show success toast/message
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  if (!productData) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery Skeleton */}
          <div>
            <Skeleton height={400} className="mb-4 sm:mb-6 rounded-lg sm:rounded-xl" />
            <div className="flex gap-2 sm:gap-3">
              {[1, 2, 3, 4].map((item) => (
                <Skeleton key={item} height={64} width={64} className="sm:h-20 sm:w-20 rounded-lg" />
              ))}
            </div>
          </div>
          
          {/* Product Info Skeleton */}
          <div className="space-y-4 sm:space-y-6">
            <Skeleton height={32} width={300} className="sm:h-10" />
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((item) => (
                <Skeleton key={item} circle height={20} width={20} className="sm:h-6 sm:w-6" />
              ))}
            </div>
            <Skeleton height={28} width={120} className="sm:h-9" />
            <Skeleton count={3} height={16} className="sm:h-5" />
            <div className="flex gap-2 sm:gap-3 my-6 sm:my-8">
              {[1, 2, 3].map((item) => (
                <Skeleton key={item} height={40} width={60} className="sm:h-12 sm:w-20 rounded-lg" />
              ))}
            </div>
            <Skeleton height={48} width={200} className="sm:h-14 sm:w-60 rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  // Calculate discount percentage
  const discount = productData.mrp 
    ? Math.round(((productData.mrp - productData.price) / productData.mrp) * 100)
    : 0;

  return (
    <div className="bg-gradient-to-b from-rose-50/30 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Product data */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product images */}
          <div className="space-y-4 sm:space-y-6">
            {/* Main image */}
            <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {selectedImage ? (
                <img 
                  src={selectedImage}
                  alt={productData.name}
                  className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                />
              ) : (
                <div className="w-full h-[300px] sm:h-[400px] lg:h-[600px] bg-gray-50 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">No image available</span>
                </div>
              )}
              
              {discount > 0 && (
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-rose-500 text-white text-xs sm:text-sm font-medium px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                  {discount}% OFF
                </div>
              )}
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2">
              {productData.images?.map((item, index) => (
                <img 
                  key={index}
                  src={item}
                  alt={`View ${index + 1}`}
                  className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-cover cursor-pointer rounded-lg sm:rounded-xl border-2 flex-shrink-0 transition-all duration-200 ${
                    selectedImage === item 
                      ? 'border-rose-300 shadow-md' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedImage(item)}
                />
              ))}
            </div>
          </div>

          {/* Product information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-3 sm:mb-4 leading-tight">
                {productData.name}
              </h1>
              
              {/* Ratings */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((star) => (
                    <img key={star} src={assets.star_icon} alt="★" className="w-4 h-4 sm:w-5 sm:h-5" />
                  ))}
                  <img src={assets.star_dull_icon} alt="☆" className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm text-gray-500 font-light">(122 reviews)</span>
              </div>
            </div>
            
            {/* Pricing */}
            <div className="flex items-baseline gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-gray-100">
              <span className="text-2xl sm:text-3xl font-light text-gray-900">
                {currency}{productData.price}
              </span>
              {productData.mrp && productData.mrp > productData.price && (
                <span className="text-lg sm:text-xl text-gray-400 line-through font-light">
                  {currency}{productData.mrp}
                </span>
              )}
            </div>
            
            {/* Description */}
            <div className="text-gray-600 leading-relaxed font-light text-base sm:text-lg">
              {productData.description}
            </div>
            
            {/* Size selector */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-medium text-gray-900">Size</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {productData.sizes?.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl border-2 font-medium text-sm sm:text-base transition-all duration-200 ${
                      selectedSize === size 
                        ? 'border-rose-300 bg-rose-50 text-rose-700' 
                        : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Add to cart button */}
            <button
              onClick={handleAddToCart}
              disabled={isAddingToCart || isLoading}
              className={`w-full py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg transition-all duration-200 ${
                isAddingToCart || isLoading
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white shadow-lg hover:shadow-xl'
              }`}
            >
              {isAddingToCart ? 'Adding to Cart...' : 'Add to Cart'}
            </button>
            
            {/* Policies */}
            <div className="pt-6 sm:pt-8 border-t border-gray-100">
              <div className="grid gap-2 sm:gap-3">
                <div className="flex items-center gap-3 text-gray-600 text-sm sm:text-base">
                  <div className="w-2 h-2 bg-rose-300 rounded-full flex-shrink-0"></div>
                  <span className="font-light">Authentic & Certified</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 text-sm sm:text-base">
                  <div className="w-2 h-2 bg-rose-300 rounded-full flex-shrink-0"></div>
                  <span className="font-light">Free shipping on orders above ₹999</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 text-sm sm:text-base">
                  <div className="w-2 h-2 bg-rose-300 rounded-full flex-shrink-0"></div>
                  <span className="font-light">30-day easy return & exchange</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 text-sm sm:text-base">
                  <div className="w-2 h-2 bg-rose-300 rounded-full flex-shrink-0"></div>
                  <span className="font-light">Lifetime warranty available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description and reviews */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex border-b border-gray-100 overflow-x-auto">
            <button className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 font-medium text-gray-900 border-b-2 border-rose-300 bg-rose-50/50 text-sm sm:text-base whitespace-nowrap">
              Details
            </button>
            <button className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 font-light text-gray-500 hover:text-gray-700 transition-colors text-sm sm:text-base whitespace-nowrap">
              Reviews (122)
            </button>
            <button className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 font-light text-gray-500 hover:text-gray-700 transition-colors text-sm sm:text-base whitespace-nowrap">
              Care Instructions
            </button>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 text-gray-600 leading-relaxed">
            <p className="text-base sm:text-lg font-light">
              {productData.description || 'No detailed description available.'}
            </p>
            <p className="font-light text-sm sm:text-base">
              Each piece in our collection is meticulously crafted by skilled artisans using premium materials. 
              We ensure every detail meets our high standards of quality and elegance, making each piece a 
              timeless addition to your jewelry collection.
            </p>
            <p className="font-light text-sm sm:text-base">
              Our commitment to excellence extends beyond design to include ethical sourcing and sustainable 
              practices, ensuring that your jewelry not only looks beautiful but also aligns with your values.
            </p>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-12 sm:mt-1 lg:mt-2">
          <div className="text-center mb-1 sm:mb-1">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-3">You May Also Like</h2>
            <div className="flex justify-center items-center gap-3">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
              <span className="text-rose-400 text-sm">✦</span>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            </div>
          </div>
          <RelatedProduct 
            category={productData.category} 
            subCategory={productData.subCategory}
            currentProductId={productId}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;