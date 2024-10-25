import Image from "next/image";
import React from "react";
import ex from "@/public/assets/ex.jpg";
import es from "@/public/assets/es.jpg";
function RandomProducts() {
  return (
    <div className="h-full flex flex-col space-y-7">
      <div className="h-1/2">
        <div className="w-full h-[75%] relative rounded-2xl">
          <Image
            src={ex}
            width={1000}
            height={1000}
            className="w-full h-full object-cover absolute rounded-2xl"
          />
        </div>
        <div className="mt-3 flex flex-col space-y-4">
          <span className="w-20 flex justify-center hover:bg-black hover:text-white text-xs rounded-full border-[1px] px-2 py-1 border-black font-medium">
            clothings
          </span>
          <h1 className="font-medium">Mirkwood capiche</h1>
        </div>
      </div>

      <div className="h-1/2">
        <div className="w-full h-[75%] relative rounded-2xl">
          <Image
            src={es}
            width={1000}
            height={1000}
            className="w-full h-full object-cover absolute rounded-2xl"
          />
        </div>
        <div className="mt-3 flex flex-col space-y-4">
          <span className="w-20 flex justify-center hover:bg-black hover:text-white text-xs rounded-full border-[1px] px-2 py-1 border-black font-medium">
            clothings
          </span>
          <h1 className="font-medium">Mirkwood capiche</h1>
        </div>
      </div>
    </div>
  );
}

export default RandomProducts;
