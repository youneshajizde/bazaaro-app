import Image from "next/image";
import React from "react";
import logo from "@/public/assets/log.png";
import cartImg from "@/public/assets/cart.webp";
import { MoveUp } from "lucide-react";
function Footer() {
  return (
    <footer className="relative w-full mx-auto h-[600px] mt-20 overflow-hidden border-t-[1px] border-gray-300">
      <div className="w-full flex h-[20%] ">
        <div className="w-[90%] mx-auto flex items-center justify-between">
          <h1 className="text-3xl mt-2 font-medium flex items-center justify-between">
            2025
          </h1>

          <MoveUp size={40} className="bg-black text-white rounded-full p-2" />
        </div>
      </div>

      <div className="flex h-[80%] w-[90%] mx-auto flex-col">
        <p className="text-sm font-light">Have a project in mind?</p>
        <p className="text-center font-medium text-[10rem] text-gray-300 mt-10">
          LET'S TALK
        </p>
      </div>
    </footer>
  );
}

export default Footer;
