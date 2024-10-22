import Image from "next/image";
import React, { useEffect } from "react";
import img1 from "@/public/assets/7.jpg";
import img2 from "@/public/assets/whitee.jpg";
import avatar from "@/public/assets/user.jpg";
import example from "@/public/assets/ex.jpg";
import { supabase } from "@/lib/supabaseClient";

function Header() {
  const getProducts = async () => {
    try {
      const { data, error } = await supabase.from("products").select("*");

      if (error) {
        console.error("Supabase error:", error);
      } else {
        console.log("Fetched data:", data);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="mt-6 grid grid-cols-1 md:grid-cols-2 w-full min-h-[500px] gap-6">
      <div className="relative bg-red-400 rounded-3xl">
        <Image
          src={img1}
          width={1000}
          height={1000}
          className="w-full h-full absolute object-cover rounded-3xl"
        />
        <div className="w-full h-[200px] rounded-3xl absolute bottom-0 px-4 text-white flex flex-col gap-4">
          <span className="flex items-center gap-2">
            <Image
              src={avatar}
              width={0}
              height={0}
              className="rounded-lg w-8 h-10 object-cover"
            />
            •<h1>Jane McGee</h1>
          </span>
          <span className="text-3xl font-medium">Artist of the week</span>
        </div>
      </div>

      <div className="relative bg-blue-400 rounded-3xl">
        <Image
          src={img2}
          width={1000}
          height={1000}
          className="w-full h-full absolute object-cover rounded-3xl"
        />

        <div className="w-full rounded-3xl absolute top-10 flex flex-col gap-8 lg:gap-16">
          <div className="px-10 flex flex-col gap-10">
            <h1 className="text-sm lg:text-3xl xl:text-4xl font-semibold text-black leading-normal">
              ACCESS TO HIGH-QUALITY, ECO-FRIENDLY ♦ PRODUCTS AND SERVICES
            </h1>

            <span className="hidden lg:block">
              <h1 className="text-sm text-black font-semibold">
                Try it on or buy the look
                <p className="text-xs text-gray-500 font-medium">
                  Scan, Adjust, try your clothes on digitally
                </p>
              </h1>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white w-[180px] h-[100px] lg:w-[210px] lg:h-[100px] rounded-xl flex gap-2 p-2">
              <Image
                src={example}
                width={100}
                height={100}
                className="object-cover rounded-xl w-20 lg:w-24"
              />
              <span className="flex flex-col justify-between">
                <h1 className="font-medium text-sm  lg:text-normal">
                  Silloute BR
                </h1>
                <p className="flex flex-col gap-1 text-xs font-medium">
                  150.00$
                  <span className="font-normal text-gray-500">199.00$</span>
                </p>
              </span>
            </div>

            <div className="bg-white w-[180px] h-[100px] lg:w-[210px] lg:h-[100px] rounded-xl flex gap-2 p-2">
              <Image
                src={example}
                width={100}
                height={100}
                className="object-cover rounded-xl w-20 lg:w-24"
              />
              <span className="flex flex-col justify-between">
                <h1 className="font-medium text-sm  lg:text-normal">
                  Silloute BR
                </h1>
                <p className="flex flex-col gap-1 text-xs font-medium">
                  150.00$
                  <span className="font-normal text-gray-500">199.00$</span>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
