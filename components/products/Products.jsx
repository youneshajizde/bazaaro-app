import { categories } from "@/lib/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

function Products() {
  const [products, setProducts] = useState();
  const [selectedCat, setSelectedCat] = useState("clothings");

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
    <div className="flex flex-col ">
      <div className=" w-full h-[450px] ">
        <div className="relative h-[75%]">
          <Image
            src={product?.images?.[0]?.url}
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
          <h1 className="font-medium text-lg">{product?.title}</h1>

          <span className="flex items-center gap-3">
            <h1 className="text-sm font-medium">{product?.price}.00$</h1>
            <h1 className="text-sm font-medium text-gray-400">230.00$</h1>
          </span>
        </div>
      </div>
    </div>
  ));
  const category = categories.map((cat, index) => (
    <li
      onClick={(e) => setSelectedCat(e.target.innerText)}
      key={index}
      className={`rounded-full px-6 py-1 text-sm font-medium border-gray-600 border-[1px] hover:bg-yellow-300 cursor-pointer hover:border-black transition-all ${
        selectedCat === cat ? "bg-yellow-300" : ""
      }`}
    >
      {cat}
    </li>
  ));
  return (
    <section className="mt-16">
      <div className="flex items-center gap-5">
        <h1 className="text-2xl font-semibold logos-text">Products</h1>
        <ul className="flex items-center gap-3">{category}</ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  mt-8">
        {items}
      </div>
    </section>
  );
}

export default Products;
