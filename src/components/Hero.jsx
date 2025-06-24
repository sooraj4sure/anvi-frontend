//

import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate("/collection");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden mt-[-4rem] bg-gradient-to-b from-[#f9f5f0] to-[#f0e6d9]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#e8cfa9] opacity-20 mix-blend-multiply"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#d9b38c] opacity-20 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-24 flex flex-col lg:flex-row items-center">
        {/* HERO LEFT SIDE - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col items-start justify-center py-12 lg:py-24 px-6 lg:px-12"
        >
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="w-12 h-[1px] bg-[#8a6d46]"></div>
            <p className="font-serif text-[#8a6d46]  tracking-widest text-2xl">
              “Adorn with Grace”
            </p>
          </motion.div>

          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#2a2118] leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Timeless <span className="text-[#8a6d46]">Elegance</span> <br /> in
            Every Gem
          </motion.h1>

          <motion.p
            className="text-[#5a4a3a] mb-8 max-w-md font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Adorn yourself with our luxurious yet affordable jewelry pieces, crafted for elegance and brilliance.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 group cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{ x: 5 }}
          >
            <button
              onClick={handleShopClick}
              className="relative z-20 px-8 py-3 bg-[#c28434] text-white font-medium tracking-wide hover:bg-[#916327] transition-colors duration-300 inline-block"
              style={{ isolation: "isolate" }}
            >
              SHOP COLLECTION
            </button>
            {/* <div className="w-12 h-[1px] bg-[#8a6d46] transition-all duration-300 group-hover:w-16"></div> */}
          </motion.div>
        </motion.div>

        {/* HERO RIGHT SIDE - Image */}
        <motion.div
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative overflow-hidden rounded-lg shadow-xl lg:transform lg:-rotate-1 lg:hover:rotate-0 transition-transform duration-700 shadow-slate-600">
            <img
              src={assets.hero2_img}
              className="w-full h-auto object-cover"
              alt="Luxury Jewelry Collection"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[rgba(138,109,70,0.1)] pointer-events-none"></div>
          </div>

          <div className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-[#8a6d46] opacity-20"></div>
          <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#8a6d46] opacity-10"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
