import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate, isLoading } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  // Transform cartItems into usable array format
  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const productId in cartItems) {
        for (const size in cartItems[productId]) {
          const quantity = cartItems[productId][size];
          if (quantity > 0) {
            tempData.push({
              _id: productId,
              size,
              quantity,
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  const handleQuantityChange = async (productId, size, newQuantity) => {
    if (newQuantity === "" || newQuantity < 1) return;

    setIsUpdating(true);
    try {
      await updateQuantity(productId, size, Number(newQuantity));
    } catch (error) {
      console.error("Error updating quantity:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleRemoveItem = async (productId, size) => {
    setIsUpdating(true);
    try {
      await updateQuantity(productId, size, 0);
    } catch (error) {
      console.error("Error removing item:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  if (isLoading) {
    return (
      <div className="border-t pt-14 container mx-auto px-4">
        <div className="text-2xl mb-3">
          <Title text1={"YOUR"} text2={"CART"} />
        </div>

        {/* Loading skeletons */}
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="py-4 border-t border-b grid grid-cols-[4fr_0.5fr_0.5fr] items-center gap-4"
          >
            <div className="flex items-start gap-6">
              <Skeleton width={80} height={80} />
              <div className="w-full">
                <Skeleton width={200} height={20} className="mb-2" />
                <div className="flex gap-5">
                  <Skeleton width={60} height={20} />
                  <Skeleton width={40} height={20} />
                </div>
              </div>
            </div>
            <Skeleton width={80} height={40} />
            <Skeleton width={20} height={20} circle className="mr-4" />
          </div>
        ))}

        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <Skeleton height={150} />
            <Skeleton height={50} className="mt-8" />
          </div>
        </div>
      </div>
    );
  }

  if (cartData.length === 0) {
    return (
      <div className="border-t pt-14 container mx-auto px-4 text-center">
        <div className="text-2xl mb-3">
          <Title text1={"YOUR"} text2={"CART"} />
        </div>
        <div className="py-10">
          <img
            src={assets.empty_cart}
            alt="Empty cart"
            className="w-48 mx-auto mb-6"
          />
          <h3 className="text-xl font-medium mb-4">Your cart is empty</h3>
          <button
            onClick={() => navigate("/")}
            className="bg-[#e9718b] hover:bg-[#de426e] text-white font-semibold px-8 py-3 rounded-md"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="border-t pt-14 container mx-auto px-4">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div className="divide-y">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          if (!productData) return null;

          return (
            <div
              key={`${item._id}-${item.size}`}
              className="py-4 grid grid-cols-[4fr_0.5fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  src={productData.images?.[0] || assets.placeholder}
                  className="w-16 sm:w-20 object-cover aspect-square"
                  alt={productData.name}
                  onError={(e) => (e.target.src = assets.placeholder)}
                />
                <div>
                  <p className="text-sm sm:text-base font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 py-0.5 border bg-slate-100 text-xs sm:text-sm">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              <input
                onChange={(e) =>
                  handleQuantityChange(item._id, item.size, e.target.value)
                }
                className="border max-w-20 px-2 py-1.5 text-center"
                type="number"
                min="1"
                value={item.quantity}
                disabled={isUpdating}
              />

              <button
                onClick={() => handleRemoveItem(item._id, item.size)}
                disabled={isUpdating}
                className="w-4 sm:w-5 mr-4 justify-self-end"
                aria-label="Remove item"
              >
                <img src={assets.bin_icon} alt="Remove" />
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />

          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-[#e9718b] hover:bg-[#de426e] text-white font-semibold my-8 px-8 py-3 rounded-md w-full disabled:opacity-70"
              disabled={isUpdating}
            >
              {isUpdating ? "Processing..." : "PROCEED TO CHECKOUT"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
