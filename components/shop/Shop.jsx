import React from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Image from "next/image";
import img from "@/public/assets/p.jpg";
import img1 from "@/public/assets/p1.jpg";
import ex from "@/public/assets/ex.jpg";
import es from "@/public/assets/es.jpg";
function Shop() {
  return (
    <section>
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl font-semibold">Shop</h1>

        <span className="flex items-center gap-3">
          <Button className="bg-transparent rounded-full border-[1px] border-black text-black hover:bg-black hover:text-white">
            Best Seller
          </Button>
          <Button className="bg-transparent rounded-full border-[1px] border-black text-black hover:bg-black hover:text-white">
            Trending
          </Button>
          <Button className="bg-transparent rounded-full border-[1px] border-black text-gray-500 hover:bg-black hover:text-white ">
            Empathy
          </Button>
        </span>

        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Local Sellers</Label>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-[550px] gap-10 mt-8"
        style={{ gridTemplateColumns: "1fr 1.5fr 1fr" }}
      >
        <div className=" h-full bg-gray-100 flex flex-col space-y-10 justify-end p-2 rounded-2xl">
          <h1 className="text-center font-medium text-xl">Special Offers</h1>
          <div className="bg-white w-full h-[390px] rounded-2xl relative p-2">
            <Image
              src={img}
              width={0}
              height={0}
              className="  object-cover h-[75%] rounded-2xl"
            />

            <div className="mt-3 flex flex-col space-y-4">
              <span className="w-20 flex justify-center hover:bg-black hover:text-white text-xs rounded-full border-[1px] px-2 py-1 border-black font-medium">
                clothings
              </span>

              <h1 className="font-medium">Mirkwood capiche</h1>
            </div>
          </div>
        </div>
        <div className=" rounded-2xl w-full h-full ">
          <div className="  w-full h-[85%] relative">
            <Image
              src={img1}
              width={0}
              height={0}
              className="absolute w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="mt-3 flex flex-col space-y-4">
            <span className="w-20 flex justify-center hover:bg-black hover:text-white text-xs rounded-full border-[1px] px-2 py-1 border-black font-medium">
              clothings
            </span>

            <h1 className="font-medium">Mirkwood capiche</h1>
          </div>
        </div>

        <div className=" h-full flex flex-col space-y-7">
          <div className=" h-1/2">
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
          <div className=" h-1/2">
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
      </div>
    </section>
  );
}

export default Shop;
