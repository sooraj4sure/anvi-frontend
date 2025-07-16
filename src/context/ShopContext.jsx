import { createContext, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  // Configuration
  const currency = "₹";
  let delivery_fee = 0;
  const giftWrapPrice = 50;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // State
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartLoading, setCartLoading] = useState(false);

  const [token, setToken] = useState(() => {
    // Initialize token from localStorage on first load
    return localStorage.getItem('token') || '';
  });

  const navigate = useNavigate();






  // Fetch products with caching and retry logic ----------------------------
  // const getProductsData = useCallback(async () => {
  //   try {
  //     setIsLoading(true);
  //     setError(null);
      
  //     const response = await axios.get(`${backendUrl}/api/product/list`, {
  //       timeout: 5000 // 5 second timeout
  //     });

  //     if (response.data?.success) {
  //       setProducts(response.data.products || []);
  //     } else {
  //       throw new Error(response.data?.message || "Invalid response format");
  //     }
  //   } catch (err) {
  //     console.error("Failed to fetch products:", err);
  //     setError(err.message);
  //     toast.error("Failed to load products. Please try again later.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, [backendUrl]);



const getProductsData = useCallback(async () => {
  try {
    setIsLoading(true);
    setError(null);
    
    // Retry logic (3 attempts)
    let attempts = 0;
    const maxAttempts = 3;
    
    while (attempts < maxAttempts) {
      try {
        const response = await axios.get(`${backendUrl}/api/product/list`, {
          timeout: 8000 // Increased timeout
        });

        if (response.data?.success) {
          setProducts(response.data.products || []);
          return; // Success - exit the function
        } else {
          throw new Error(response.data?.message || "Invalid response format");
        }
      } catch (err) {
        attempts++;
        if (attempts >= maxAttempts) throw err;
        await new Promise(resolve => setTimeout(resolve, 1000 * attempts)); // Exponential backoff
      }
    }
  } catch (err) {
    console.error("Failed to fetch products after retries:", err);
    setError(err.message);
    toast.error("Failed to load products. Please try again later.");
    // Consider setting cached products if available
  } finally {
    setIsLoading(false);
  }
}, [backendUrl]);

  







  // cart update through database
  const getUserCart = async (userToken) => {
    if (!userToken) {
      // console.log('getUserCart: No token provided');
      return;
    }
    
    // console.log('getUserCart: Starting cart fetch with token:', userToken.substring(0, 10) + '...');
    
    try {
      setCartLoading(true);
      // console.log('getUserCart: Making API call to:', backendUrl + '/api/cart/get');
      
      const response = await axios.post(backendUrl + '/api/cart/get', {}, { 
        headers: { token: userToken } 
      });
      
      // console.log('getUserCart: API response:', response.data);
      
      if (response.data.success) {
        // Backend returns 'cartData' not 'cartItems'
        const cartData = response.data.cartData || response.data.cartItems || {};
        // console.log('getUserCart: Setting cart data:', cartData);
        setCartItems(cartData);
      } else {
        console.error('getUserCart: Cart fetch failed:', response.data.message);
        toast.error(response.data.message || 'Failed to fetch cart');
      }
    } catch (error) {
      console.error('getUserCart: API call error:', error);
      console.error('getUserCart: Error response:', error.response?.data);
      toast.error(error.response?.data?.message || error.message || "Failed to fetch cart");
    } finally {
      setCartLoading(false);
      // console.log('getUserCart: Cart loading finished');
    }
  };

  // Persistent cart with localStorage (only for non-authenticated users)
  useEffect(() => {
    // Only save to localStorage if user is not authenticated
    if (!token && cartItems && typeof cartItems === 'object') {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems, token]);

  // Initialize data
  useEffect(() => {
    getProductsData();
  }, [getProductsData]);

  // Handle token and cart initialization
  useEffect(() => {
    // console.log('Token effect triggered. Token:', token ? 'Present' : 'Missing');
    
    if (token) {
      // User is authenticated, fetch cart from backend
      // console.log('User authenticated, fetching cart from backend');
      getUserCart(token);
    } else {
      // User is not authenticated, load cart from localStorage
      // console.log('User not authenticated, loading cart from localStorage');
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart);
          // console.log('Loaded cart from localStorage:', parsedCart);
          setCartItems(parsedCart);
        } catch (error) {
          console.error('Error parsing saved cart:', error);
          setCartItems({});
        }
      } else {
        // console.log('No saved cart in localStorage');
        setCartItems({});
      }
    }
  }, [token]); // This runs when token changes

  // Cart operations
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }

    setCartItems((prev) => {
      // Ensure prev is always an object
      const currentCart = prev || {};
      return {
        ...currentCart,
        [itemId]: {
          ...currentCart[itemId],
          [size]: (currentCart[itemId]?.[size] || 0) + 1,
        },
      };
    });

    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } });
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || error.message || "Failed to add to cart");
      }
    }
  };

  const updateQuantity = async (itemId, size, quantity) => {
    if (quantity < 0) return;

    setCartItems((prev) => {
      // Ensure prev is always an object
      const currentCart = prev || {};
      const newCart = { ...currentCart };
      
      if (quantity === 0) {
        if (newCart[itemId]) {
          delete newCart[itemId][size];
          if (Object.keys(newCart[itemId]).length === 0) {
            delete newCart[itemId];
          }
        }
      } else {
        if (!newCart[itemId]) newCart[itemId] = {};
        newCart[itemId][size] = quantity;
      }
      return newCart;
    });

    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } });
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || error.message || "Failed to update cart");
      }
    }
  };

  const removeFromCart = (itemId, size) => {
    updateQuantity(itemId, size, 0);
  };

  const clearCart = () => {
    setCartItems({});
  };

  // Derived values with null safety
  const getCartCount = () => {
    // Add null safety check
    if (!cartItems || typeof cartItems !== 'object') {
      return 0;
    }
    
    return Object.values(cartItems).reduce(
      (total, sizes) => {
        // Additional safety check for sizes
        if (!sizes || typeof sizes !== 'object') return total;
        return total + Object.values(sizes).reduce((sum, qty) => sum + (qty || 0), 0);
      },
      0
    );
  };

  const getCartAmount = () => {
    // Add null safety check
    if (!cartItems || typeof cartItems !== 'object') {
      return 0;
    }

    return Object.entries(cartItems).reduce((total, [itemId, sizes]) => {
      const product = products.find((p) => p._id === itemId);
      if (!product || !sizes || typeof sizes !== 'object') return total;

      return (
        total +
        Object.entries(sizes).reduce(
          (sum, [size, quantity]) => sum + (product.price * (quantity || 0)),
          0
        )
      );
    }, 0);
  };

  const getProductById = (id) => products.find((p) => p._id === id);

  // Context value
  const value = {
    // State
    products,
    isLoading,
    error,
    search,
    showSearch,
    cartItems: cartItems || {}, // Ensure cartItems is never null/undefined
    cartLoading,
    
    // Constants
    currency,
    delivery_fee,
    backendUrl,
    giftWrapPrice,
    
    // Setters
    setSearch,
    setShowSearch,
    
    // Cart functions
    addToCart,
    setCartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartCount,
    getCartAmount,
    getProductById,
    
    
    // Navigation
    navigate,
    
    // user login authentication
    setToken,
    token,
    
    // Data reload
    refreshProducts: getProductsData,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;