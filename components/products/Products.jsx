import { categories } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import p1 from "@/public/assets/p1.jpg";

function Products() {
  const category = categories.map((cat, index) => (
    <li
      key={index}
      className="rounded-full px-6 py-1 border-gray-600 border-[1px] hover:bg-yellow-200 cursor-pointer hover:border-black transition-all"
    >
      {cat}
    </li>
  ));
  return (
    <section className="mt-16">
      <div className="flex items-center gap-5">
        <h1 className="text-2xl font-semibold">Products</h1>
        <ul className="flex items-center gap-3">{category}</ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  mt-8">
        <div className="flex flex-col ">
          <div className=" w-full h-[450px] ">
            <div className="relative h-[75%]">
              <Image
                src={p1}
                width={0}
                height={0}
                className=" absolute w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="product-info mt-3 flex flex-col space-y-3">
              <ul className="flex items-center gap-2">
                <li className="bg-slate-400 rounded-full w-4 h-4"></li>
                <li className="bg-blue-200 rounded-full w-4 h-4"></li>
                <li className="bg-stone-500 rounded-full w-4 h-4"></li>
              </ul>
              <h1 className="font-medium text-lg">Shanti Gucci</h1>

              <span className="flex items-center gap-3">
                <h1 className="text-sm font-medium">199.00$</h1>
                <h1 className="text-sm font-medium text-gray-400">230.00$</h1>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className=" w-full h-[450px] ">
            <div className="relative h-[75%]">
              <Image
                src={p1}
                width={0}
                height={0}
                className=" absolute w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="product-info mt-3 flex flex-col space-y-3">
              <ul className="flex items-center gap-2">
                <li className="bg-slate-400 rounded-full w-4 h-4"></li>
                <li className="bg-blue-200 rounded-full w-4 h-4"></li>
                <li className="bg-stone-500 rounded-full w-4 h-4"></li>
              </ul>
              <h1 className="font-medium text-lg">Shanti Gucci</h1>

              <span className="flex items-center gap-3">
                <h1 className="text-sm font-medium">199.00$</h1>
                <h1 className="text-sm font-medium text-gray-400">230.00$</h1>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className=" w-full h-[450px] ">
            <div className="relative h-[75%]">
              <Image
                src={p1}
                width={0}
                height={0}
                className=" absolute w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="product-info mt-3 flex flex-col space-y-3">
              <ul className="flex items-center gap-2">
                <li className="bg-slate-400 rounded-full w-4 h-4"></li>
                <li className="bg-blue-200 rounded-full w-4 h-4"></li>
                <li className="bg-stone-500 rounded-full w-4 h-4"></li>
              </ul>
              <h1 className="font-medium text-lg">Shanti Gucci</h1>

              <span className="flex items-center gap-3">
                <h1 className="text-sm font-medium">199.00$</h1>
                <h1 className="text-sm font-medium text-gray-400">230.00$</h1>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className=" w-full h-[450px] ">
            <div className="relative h-[75%]">
              <Image
                src={p1}
                width={0}
                height={0}
                className=" absolute w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="product-info mt-3 flex flex-col space-y-3">
              <ul className="flex items-center gap-2">
                <li className="bg-slate-400 rounded-full w-4 h-4"></li>
                <li className="bg-blue-200 rounded-full w-4 h-4"></li>
                <li className="bg-stone-500 rounded-full w-4 h-4"></li>
              </ul>
              <h1 className="font-medium text-lg">Shanti Gucci</h1>

              <span className="flex items-center gap-3">
                <h1 className="text-sm font-medium">199.00$</h1>
                <h1 className="text-sm font-medium text-gray-400">230.00$</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
