import { categories } from "@/lib/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import Slider from "react-slick";
function Products() {
  const [products, setProducts] = useState();
  const [selectedCat, setSelectedCat] = useState("clothings");
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  console.log("this is the current category", selectedCat);

  const getAllProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("tag", selectedCat);

      if (error) {
        console.log(error.message);
      } else {
        console.log(data);
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [selectedCat]);

  const items = products?.map((product) => (
    <Link href={`/product/${product?.id}`} key={product?.id}>
      <div className="flex flex-col">
        <div className="w-full h-[450px]">
          <div className="relative h-[75%]">
            <Image
              src={product?.images?.[0]?.url}
              width={1000}
              height={1000}
              className="absolute w-full h-full object-cover rounded-2xl"
              alt={product?.title}
            />
          </div>

          <div className="product-info mt-3 flex flex-col space-y-3">
            <ul className="flex items-center gap-2">
              <li className="bg-slate-400 rounded-full w-4 h-4"></li>
              <li className="bg-blue-200 rounded-full w-4 h-4"></li>
              <li className="bg-stone-500 rounded-full w-4 h-4"></li>
            </ul>
            <h1 className="font-medium text-lg">{product?.title}</h1>

            <span className="flex items-center gap-3">
              <h1 className="text-sm font-medium">{product?.price}.00$</h1>
              <h1 className="text-sm font-medium text-gray-400">230.00$</h1>
            </span>
          </div>
        </div>
      </div>
    </Link>
  ));

  const category = categories.map((cat, index) => (
    <li
      onClick={() => setSelectedCat(cat)}
      key={index}
      className={`relative text-md md:text-lg font-medium cursor-pointer transition-colors duration-200  ${
        selectedCat === cat ? "text-black" : "text-gray-300"
      }`}
    >
      <span className="relative z-10">
        {cat}
        <span
          className={`absolute left-0 bottom-0 h-[2px] bg-black transition-all duration-300 transform ${
            selectedCat === cat ? "w-full scale-x-100" : "scale-x-0"
          } origin-left`}
        />
      </span>
    </li>
  ));

  return (
    <section className="mt-16">
      <div className="flex flex-col">
        <h1 className="text-[4rem] md:text-[7rem] lg:text-[6rem] text-gray-200 font-bold">
          PRODUCTS
        </h1>
        <Slider
          {...settings}
          className="flex items-center w-[90%] md:w-[70%] lg:w-[60%]"
        >
          {category}
        </Slider>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
        {items}
      </div>
    </section>
  );
}

export default Products;
