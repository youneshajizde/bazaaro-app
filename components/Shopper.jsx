import React from "react";
import chairImg from "@/public/assets/345.webp";
import Image from "next/image";
import { Button } from "./ui/button";

function Shopper() {
  return (
    <section className="bg-stone-800 w-full min-h-[500px] flex items-center justify-center">
      <div className="w-[90%] mx-auto h-full grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="title-text-style">SHOP</h1>
          <p className="font-medium text-gray-200 text-xs md:text-sm">
            You might find the perfect footwear on Bazaaro , instead of circling
            on websites that do not offer the same quality as we do
          </p>

          <span className="mt-10">
            <Button className="bg-white rounded-full text-black hover:border-white hover:border-[1px] hover:text-white hover:bg-transparent">
              Become a member
            </Button>
          </span>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={chairImg}
            width={0}
            height={0}
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Shopper;
