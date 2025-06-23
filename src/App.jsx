import React from 'react'
import {Routes , Route} from 'react-router-dom'
import  Home  from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='px-1 sm:px-[1vw] md:px-[2vw] lg:px-[2vw] '>
      <ToastContainer/>
      <Navbar />
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={ <Collection />  } />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={< Cart/>} />
        <Route path='/contact' element={< Contact/>} />
        <Route path='/login' element={< Login/>} />
        <Route path='/orders' element={< Orders/>} />
        <Route path='/place-order' element={< PlaceOrder/>} />
        <Route path='/product/:productId' element={< Product/>} />
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App