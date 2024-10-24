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
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    cssEase: "linear",
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
    <div
      key={index}
      className="bg-white !flex gap-2  p-1 rounded-xl shadow-lg mx-2" // Use Tailwind for styling
    >
      <div className="picture">
        <Image
          src={product?.images?.[0]}
          width={100}
          height={100}
          className="object-cover rounded-xl w-16 h-20" // Ensure width and height match for consistent layout
          alt="Product"
        />
      </div>

      <div className="information !flex !flex-col !justify-between ml-2 ">
        <h1 className="font-medium text-sm lg:text-normal">{product?.title}</h1>
        <p className="flex flex-col justify-between text-xs font-medium">
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
            ACCESS TO HIGH-QUALITY, ECO-FRIENDLY{" "}
            <span className="text-orange-300">♦</span> PRODUCTS AND SERVICES
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
        <Slider {...settings}>{items}</Slider>
      </div>
    </div>
  );
}

export default RightHeader;
