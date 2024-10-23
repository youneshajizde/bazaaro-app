import Image from "next/image";
import React, { useEffect, useState } from "react";
import img2 from "@/public/assets/whitee.jpg";
import example from "@/public/assets/ex.jpg";
import { supabase } from "@/lib/supabaseClient";
import Slider from "react-slick";

function RightHeader() {
  const [discountedProducts, setDiscountedProducts] = useState([]);

  const discountedPrice = (discount, price) => {
    const discountAmount = (discount / 100) * price;
    return price - discountAmount;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true, // Enable centered mode for better spacing
    centerPadding: "40px", // Add padding around the centered item
  };

  const getProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .gt("discount", 0);

      if (error) {
        console.error("Supabase error:", error);
      } else {
        console.log("Fetched data:", data);
        setDiscountedProducts(data);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const items = discountedProducts?.map((product, index) => (
    <div key={index} className="flex bg-white mx-2">
      {/* <Image
        src={example}
        width={100}
        height={100}
        className="object-cover rounded-xl w-10 h-20 lg:w-24 lg:h-24"
      /> */}
      <div className="information flex flex-col justify-between ml-2">
        <h1 className="font-medium text-sm lg:text-normal">{product?.title}</h1>
        <p className="flex flex-col gap-1 text-xs font-medium">
          {discountedPrice(product?.discount, product?.price)}.00$
          <span className="font-normal text-gray-500">
            {product?.price}.00$
          </span>
        </p>
      </div>
    </div>
  ));

  return (
    <div className="relative hidden lg:block h-[450px] md:h-[500px] bg-blue-400 rounded-3xl">
      <Image
        src={img2}
        width={1000}
        height={1000}
        className="w-full h-full absolute object-cover rounded-3xl"
      />

      <div className="w-full rounded-3xl absolute top-10 flex flex-col gap-8 lg:gap-20">
        <div className="px-10 flex flex-col gap-10">
          <h1 className="text-2xl xl:text-4xl font-semibold text-black leading-normal">
            ACCESS TO HIGH-QUALITY, ECO-FRIENDLY ♦ PRODUCTS AND SERVICES
          </h1>

          <span className="">
            <h1 className="text-sm text-black font-semibold">
              Try it on or buy the look
              <p className="text-xs text-gray-500 font-medium">
                Scan, Adjust, try your clothes on digitally
              </p>
            </h1>
          </span>
        </div>
        <Slider className="w-full" {...settings}>
          {items}
        </Slider>{" "}
        {/* Pass items here */}
      </div>
    </div>
  );
}

export default RightHeader;
