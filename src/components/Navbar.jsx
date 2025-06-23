import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate , token , setToken , setCartItems } = useContext(ShopContext);


  const logout = ()=>{
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (visible && !e.target.closest('.mobile-menu-container')) {
        setVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [visible]);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-5 px-4 font-medium relative">
        <Link to="/">
          <img src={assets.anvi_logo} alt="" className="w-20" />
        </Link>

        {/* Desktop Navigation - All in UPPERCASE */}
        <ul className="hidden sm:flex gap-5 text-sm uppercase">
          {['/', '/collection', '/about', '/contact'].map((path) => (
            <NavLink 
              key={path}
              to={path} 
              className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-[#8a6d46]' : 'text-gray-700'}`}
            >
              <p>{path.slice(1) || 'HOME'}</p>
              <hr className={`w-2/4 border-none h-[1.5px] ${({ isActive }) => isActive ? 'bg-[#8a6d46]' : 'bg-transparent'}`} />
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
          
          <div className="group relative">
            
              <img onClick={()=>token ? null : navigate('/login')} src={assets.profile_icon} className="w-5 cursor-pointer" alt="" />
              {/* DropDown menu */}
            
          {
            token && 
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
                <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          }
          </div>
          
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>
          
          <img 
            onClick={(e) => {
              e.stopPropagation();
              setVisible(!visible);
            }} 
            src={assets.menu_icon} 
            className="w-5 cursor-pointer sm:hidden" 
            alt="Menu" 
          />
        </div>

        {/* Mobile Menu - Also in UPPERCASE */}
        <div 
          className={`mobile-menu-container fixed inset-0 bg-white z-50 transition-all duration-300 transform ${visible ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col h-full">
            <div 
              onClick={() => setVisible(false)} 
              className="flex items-center gap-4 p-5 cursor-pointer border-b"
            >
              <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
              <p className="font-medium">CLOSE MENU</p>
            </div>
            
            <div className="flex flex-col text-gray-600 flex-grow uppercase">
              {['/', '/collection', '/about', '/contact'].map((path) => (
                <NavLink
                  key={path}
                  onClick={() => setVisible(false)}
                  to={path}
                  className={({ isActive }) => `py-4 px-6 border-b ${isActive ? 'text-[#8a6d46] font-medium' : ''}`}
                >
                  {path.slice(1) || 'HOME'}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;