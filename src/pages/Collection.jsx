// import React, { useEffect, useState } from 'react'
// import { useContext } from 'react'
// import {ShopContext} from '../context/ShopContext'
// import { assets } from '../assets/assets'
// import Title from '../components/Title'
// import Productitem from '../components/Productitem'

// const Collection = () => {

//   const {products , search , showSearch} = useContext(ShopContext)
//   const [showFilter, setShowFilter] = useState(false )
//   const [filterProducts, setFilterProducts] = useState([])
//   const [category , setCategory] = useState([])
//   const [subCategory, setSubCategory] = useState([])
//   const [sortType , setSortType] = useState('relavent')

//   const toggleCategory = (e)=>{
//     if (category.includes(e.target.value)) {
//       setCategory(prev=> prev.filter(item=> item !== e.target.value ))
      
//     }
//     else{
//       setCategory(prev=> [...prev, e.target.value])
//     }
//   }


// const toggleSubCategory = (e)=>{
//    if (subCategory.includes(e.target.value)) {
//       setSubCategory(prev=> prev.filter(item=> item !== e.target.value ))
      
//     }
//     else{
//       setSubCategory(prev=> [...prev, e.target.value])
//     }

// }


// const applyFilter = ()=>{
//   let productsCopy = products.slice()

//   if(search && showSearch){
//     productsCopy = productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))

//   }


//   if (category.length > 0) {
//     productsCopy = productsCopy.filter(item=>category.includes(item.category))
    
//   }
//   if (subCategory.length > 0) {
//     productsCopy = productsCopy.filter(item=>subCategory.includes(item.subCategory))
    
//   }
//   setFilterProducts(productsCopy)
// }


// const sortProduct = ()=>{

//     let fpCopy =filterProducts.slice();
//     switch(sortType){
//       case 'low-high':
//       setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
//       break;
//       case 'high-low':
//       setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
//       break;

//       default:
//         applyFilter()
//         break;
//     }
// }


// useEffect(()=>{

//   applyFilter()
// },[category,subCategory, search, showSearch])


// useEffect(()=>{
//   sortProduct()
// },[sortType])


//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t '>
//       {/* Filter options */}

//       <div className='min-w-60 '>
//         <p onClick={()=>setShowFilter(!showFilter)} className=' my-2 text-xl flex items-center cursor-pointer gap-2  '>FILTERS
//           <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90': ''}`} src={assets.dropdown_icon} alt="" />
//         </p>

//           {/* Category filter */}

//             <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block `}>
//               <p className='mb-3 text-sm font-medium '>CATEGORIES</p>
//               <div className='flex flex-col gap-2 text-sm font-light  text-gray-700'>
//                 <p className='flex gap-2'>
//                    <input className='w-3 ' type="checkbox" value={'Men'} onChange={toggleCategory} />Men 
//                 </p>
               
//                 <p className='flex gap-2'>
//                    <input className='w-3 ' type="checkbox" value={'Women'} onChange={toggleCategory} />Women 
//                 </p>
               
//                 {/* <p className='flex gap-2'>
//                    <input className='w-3 ' type="checkbox" value={'Kids'} onChange={toggleCategory} />Kids
//                 </p> */}
               
//               </div>

//             </div>

//             {/* SubCategory Filters */}


//        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block `}>
//               <p className='mb-3 text-sm font-medium '>TYPE</p>
//               <div className='flex flex-col gap-2 text-sm font-light  text-gray-700'>
//                 <p className='flex gap-2'>
//                    <input className='w-3 ' type="checkbox" value={'Necklace'} onChange={toggleSubCategory}  /> Necklace 
//                 </p>
               
//                 <p className='flex gap-2'>
//                    <input className='w-3 ' type="checkbox" value={'Earings'} onChange={toggleSubCategory} />Earings
//                 </p>
               
//                 <p className='flex gap-2'>
//                    <input className='w-3 ' type="checkbox" value={'Premium'} onChange={toggleSubCategory} />Premium
//                 </p>
               
//               </div>
//             </div>
//        </div>
//       {/* Ui for Right side of collection */}

//       <div className='flex-1'>
//         <div className=' flex justify-between text-base sm:text-2xl mb-4'>
//           <Title text1={'ALL'} text2={'COLLECTIONS'}/>
//           {/* Product Sort */}

//         <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
//           <option value="relavent">Sort by: relavent</option>
//           <option value="low-high">Price: Low to High</option>
//           <option value="high-low">Price: High to Low</option>
//         </select>
//         </div>

//         {/* Map Product */}

//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
//           {
//             filterProducts.map((item, index)=>(
//               <Productitem key={index} name={item.name} id={item._id} image={item.images} price={item.price} mrp={item.mrp} />
//             ))
            

//           }
          
//         </div>

//       </div>
      
//     </div> 
//   )
// }

// export default Collection

import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import Productitem from '../components/Productitem'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relavent')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (search && showSearch) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyFilter()
        break;
    }
  }


  //   useEffect(() => {
  //   setFilterProducts(products)
  // }, [products])


  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch ,products])

  useEffect(() => {
    sortProduct()
  }, [sortType])

  return (
    <div className='min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50'>

      <div className=' px-4 sm:px-6 lg:px-8 py-4'>
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Enhanced Filter Sidebar */}
          <div className='lg:w-80 shrink-0'>
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden sticky top-6'>
              {/* Filter Header */}
              <div className='bg-gradient-to-r from-rose-500 to-amber-500 p-3 lg:p-6'>
                <button
                  onClick={() => setShowFilter(!showFilter)}
                  className='w-full flex items-center justify-between text-white font-semibold text-sm lg:text-lg'
                >
                  <span className='flex items-center gap-2 lg:gap-3'>
                    <div className='w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-full animate-pulse'></div>
                    <span className='text-xs lg:text-base'>FILTERS</span>
                  </span>
                  <div className={`transform transition-transform duration-300 lg:hidden ${showFilter ? 'rotate-180' : ''}`}>
                    <svg className='w-4 h-4 lg:w-5 lg:h-5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Filter Content */}
              <div className={`p-3 lg:p-6 space-y-1 lg:space-y-8 ${showFilter ? 'block' : 'hidden'} lg:block`}>
                {/* Categories */}
                <div className='space-y-2 lg:space-y-4'>
                  <h3 className='text-sm lg:text-lg font-semibold text-gray-800 flex items-center gap-1.5 lg:gap-2'>
                    <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full'></div>
                    Categories
                  </h3>
                  <div className='space-y-2 lg:space-y-3'>
                    {['Men', 'Women'].map((cat) => (
                      <label key={cat} className='flex items-center gap-2 lg:gap-3 cursor-pointer group'>
                        <div className='relative'>
                          <input
                            type='checkbox'
                            value={cat}
                            onChange={toggleCategory}
                            className='sr-only'
                            checked={category.includes(cat)}
                          />
                          <div className={`w-4 h-4 lg:w-5 lg:h-5 rounded-full border-2 transition-all duration-200 ${
                            category.includes(cat) 
                              ? 'bg-gradient-to-r from-rose-500 to-amber-500 border-transparent' 
                              : 'border-gray-300 group-hover:border-rose-400'
                          }`}>
                            {category.includes(cat) && (
                              <svg className='w-2.5 h-2.5 lg:w-3 lg:h-3 text-white absolute top-0.5 left-0.5' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className='text-sm lg:text-base text-gray-700 group-hover:text-rose-600 transition-colors font-medium'>
                          {cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Types */}
                <div className='space-y-2 lg:space-y-4'>
                  <h3 className='text-sm lg:text-lg font-semibold text-gray-800 flex items-center gap-1.5 lg:gap-2'>
                    <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full'></div>
                    Types
                  </h3>
                  <div className='space-y-2 lg:space-y-3'>
                    {['Necklace', 'Earings', 'Premium'].map((type) => (
                      <label key={type} className='flex items-center gap-2 lg:gap-3 cursor-pointer group'>
                        <div className='relative'>
                          <input
                            type='checkbox'
                            value={type}
                            onChange={toggleSubCategory}
                            className='sr-only'
                            checked={subCategory.includes(type)}
                          />
                          <div className={`w-4 h-4 lg:w-5 lg:h-5 rounded-full border-2 transition-all duration-200 ${
                            subCategory.includes(type) 
                              ? 'bg-gradient-to-r from-amber-500 to-rose-500 border-transparent' 
                              : 'border-gray-300 group-hover:border-amber-400'
                          }`}>
                            {subCategory.includes(type) && (
                              <svg className='w-2.5 h-2.5 lg:w-3 lg:h-3 text-white absolute top-0.5 left-0.5' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className='text-sm lg:text-base text-gray-700 group-hover:text-amber-600 transition-colors font-medium'>
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {(category.length > 0 || subCategory.length > 0) && (
                  <button
                    onClick={() => {
                      setCategory([])
                      setSubCategory([])
                    }}
                    className='w-full py-2 lg:py-3 px-3 lg:px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors font-medium text-sm lg:text-base'
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className='flex-1 min-w-0'>
            {/* Header with Sort */}
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8'>
              <div className='text-center sm:text-left'>
                <Title text1={'ALL'} text2={'COLLECTIONS'} />
                <p className='text-gray-600 mt-2'>
                  {filterProducts.length} {filterProducts.length === 1 ? 'piece' : 'Products'} found
                </p>
              </div>
              
              <div className='relative'>
                <select
                  onChange={(e) => setSortType(e.target.value)}
                  className='appearance-none bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl px-6 py-3 pr-12 text-gray-700 font-medium focus:outline-none focus:border-rose-400 transition-colors cursor-pointer shadow-lg'
                  value={sortType}
                >
                  <option value='relavent'>Sort by: Relevant</option>
                  <option value='low-high'>Price: Low to High</option>
                  <option value='high-low'>Price: High to Low</option>
                </select>
                <div className='absolute  top-1/2 transform -translate-y-1/2 pointer-events-none'>
                  <svg className='w-5 h-5 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
                  </svg>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filterProducts.length > 0 ? (
              <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-[100%]'>
                {filterProducts.map((item, index) => (
                  <div key={index} className='group cursor-pointer'>
                    <div className='bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-white/80'>
                      <Productitem
                        name={item.name}
                        id={item._id}
                        image={item.images}
                        price={item.price}
                        mrp={item.mrp}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className='text-center py-16'>
                <div className='w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-rose-100 to-amber-100 rounded-full flex items-center justify-center'>
                  <svg className='w-12 h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-700 mb-2'>No products found</h3>
                <p className='text-gray-500'>Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className='fixed top-1/4 -left-20 w-40 h-40 bg-gradient-to-r from-rose-200 to-transparent rounded-full opacity-20 animate-pulse pointer-events-none'></div>
      <div className='fixed bottom-1/4 -right-20 w-32 h-32 bg-gradient-to-l from-amber-200 to-transparent rounded-full opacity-20 animate-pulse delay-1000 pointer-events-none'></div>
    </div>
  )
}

export default Collection