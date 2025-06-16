import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

const ShopContextProvider = (props)=>{

    const currency = "₹";
    let delivery_fee = 0;
    const [search , setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems , setCartItems] = useState({})
    const navigate = useNavigate();



    // add to cart 

    const addToCart = async(iteemId , size )=>{

        if (!size) {
            toast.error('Please Select Size')
            return
            
        }

        let cartData = structuredClone(cartItems)
        if (cartData[iteemId]) {
            if (cartData[iteemId][size]) {
                cartData[iteemId][size] +=1;
                
            }
            else{
                cartData[iteemId][size] =1;
            }

            
        }
        else{
            cartData[iteemId] = {};
            cartData [iteemId] [size] = 1
        }
        
        setCartItems(cartData)
    }


    useEffect(()=>{
        console.log(cartItems);
        

    },[cartItems])



  const  getCartCount= ()=>{
        let totalCount= 0;
        for(const items in cartItems)
            for(const item in cartItems[items]){
        
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item]
                        
                    }
                } catch (error) {
                    
                }

            }
        return totalCount
    }


    const updateQuantity = async (iteemId, size , quantity)=>{
        let cartData = structuredClone(cartItems)
        cartData[iteemId][size] = quantity;
        setCartItems(cartData)


    }

    const getCartAmount =    ()=>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items);
            for(const item in cartItems[items]){
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item]
                        
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }




    const value ={
        products , currency , delivery_fee,
        search, setSearch, showSearch,setShowSearch,
        cartItems , addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,navigate,
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;