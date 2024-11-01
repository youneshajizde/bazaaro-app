"use client";

import React, { useState } from "react";
import Crumbs from "./component/crumbs";
import ImageGallery from "./component/ImageGallery";
import { prImages, prTabs } from "@/lib/constants";
import ProductDetail from "./component/ProductDetail";
import WhyUs from "./component/WhyUs";
import Comments from "./component/Comments";
import Shipping from "./component/Shipping";
import Link from "next/link";
import pImg from "@/public/assets/p.jpg";
import Image from "next/image";
import Footer from "@/components/Footer";
function page() {
  const [selectedTab, setSelectedTab] = useState("shipping");
  let renderedComponent;

  switch (selectedTab) {
    case "comments":
      renderedComponent = <Comments />;
      break;
    case "shipping":
      renderedComponent = <Shipping />;
      break;
    case "why-us":
      renderedComponent = <WhyUs />;
      break;
    default:
      renderedComponent = <Comments />;
  }

  return (
    <>
      <div className="w-[90%] mx-auto flex flex-col space-y-10">
        <Crumbs />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="md:col-span-1">
            <ImageGallery images={prImages} />
          </div>
          <div className="md:col-span-1">
            <ProductDetail />
          </div>
        </div>

        <div className="flex flex-col space-y-9 min-h-[380px]">
          <ul className="flex items-center space-x-20 text-sm font-medium">
            {prTabs.map((tab, index) => (
              <li onClick={() => setSelectedTab(tab)} key={index}>
                {tab}
              </li>
            ))}
          </ul>
          {renderedComponent}
        </div>

        <div className="flex flex-col space-y-5">
          <h1 className="text-xl font-bold">Related Products</h1>

          <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link href={`/product/t`}>
              <div className="flex flex-col ">
                <div className=" w-full h-[450px] ">
                  <div className="relative h-[75%]">
                    <Image
                      src={pImg}
                      width={1000}
                      height={1000}
                      className="absolute w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className="product-info mt-3 flex flex-col space-y-3">
                    <ul className="flex items-center gap-2">
                      <li className="bg-slate-400 rounded-full w-4 h-4"></li>
                      <li className="bg-blue-200 rounded-full w-4 h-4"></li>
                      <li className="bg-stone-500 rounded-full w-4 h-4"></li>
                    </ul>
                    <h1 className="font-medium text-lg">Misaria GR</h1>

                    <span className="flex items-center gap-3">
                      <h1 className="text-sm font-medium">200.00$</h1>
                      <h1 className="text-sm font-medium text-gray-400">
                        230.00$
                      </h1>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href={`/product/t`}>
              <div className="flex flex-col ">
                <div className=" w-full h-[450px] ">
                  <div className="relative h-[75%]">
                    <Image
                      src={pImg}
                      width={1000}
                      height={1000}
                      className="absolute w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className="product-info mt-3 flex flex-col space-y-3">
                    <ul className="flex items-center gap-2">
                      <li className="bg-slate-400 rounded-full w-4 h-4"></li>
                      <li className="bg-blue-200 rounded-full w-4 h-4"></li>
                      <li className="bg-stone-500 rounded-full w-4 h-4"></li>
                    </ul>
                    <h1 className="font-medium text-lg">Misaria GR</h1>

                    <span className="flex items-center gap-3">
                      <h1 className="text-sm font-medium">200.00$</h1>
                      <h1 className="text-sm font-medium text-gray-400">
                        230.00$
                      </h1>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href={`/product/t`}>
              <div className="flex flex-col ">
                <div className=" w-full h-[450px] ">
                  <div className="relative h-[75%]">
                    <Image
                      src={pImg}
                      width={1000}
                      height={1000}
                      className="absolute w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className="product-info mt-3 flex flex-col space-y-3">
                    <ul className="flex items-center gap-2">
                      <li className="bg-slate-400 rounded-full w-4 h-4"></li>
                      <li className="bg-blue-200 rounded-full w-4 h-4"></li>
                      <li className="bg-stone-500 rounded-full w-4 h-4"></li>
                    </ul>
                    <h1 className="font-medium text-lg">Misaria GR</h1>

                    <span className="flex items-center gap-3">
                      <h1 className="text-sm font-medium">200.00$</h1>
                      <h1 className="text-sm font-medium text-gray-400">
                        230.00$
                      </h1>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href={`/product/t`}>
              <div className="flex flex-col ">
                <div className=" w-full h-[450px] ">
                  <div className="relative h-[75%]">
                    <Image
                      src={pImg}
                      width={1000}
                      height={1000}
                      className="absolute w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className="product-info mt-3 flex flex-col space-y-3">
                    <ul className="flex items-center gap-2">
                      <li className="bg-slate-400 rounded-full w-4 h-4"></li>
                      <li className="bg-blue-200 rounded-full w-4 h-4"></li>
                      <li className="bg-stone-500 rounded-full w-4 h-4"></li>
                    </ul>
                    <h1 className="font-medium text-lg">Misaria GR</h1>

                    <span className="flex items-center gap-3">
                      <h1 className="text-sm font-medium">200.00$</h1>
                      <h1 className="text-sm font-medium text-gray-400">
                        230.00$
                      </h1>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
