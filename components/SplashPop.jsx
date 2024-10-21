import Image from "next/image";
import React from "react";
import logo from "@/public/assets/image.png";
import { motion } from "framer-motion";

function SplashPop() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative w-full h-full overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
          src="/assets/rug4.jpg"
        />
        {/* Inner shadow effect */}
        <div className="absolute inset-0 bg-black opacity-70 shadow-inner"></div>
      </div>

      <motion.div
        initial={{ width: 0, opacity: 0 }} // Start width from 0
        animate={{ width: "450px", opacity: 1 }} // Animate width to 450px
        transition={{ duration: 1 }} // Duration for the width animation
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[200px] rounded-2xl p-3 flex items-center justify-center"
      >
        {/* Animate logo and text with a delay */}
        <h1 className="text-6xl font-medium text-white font-[Luxia]">
          BÀAZARO
        </h1>
      </motion.div>
    </div>
  );
}

export default SplashPop;
