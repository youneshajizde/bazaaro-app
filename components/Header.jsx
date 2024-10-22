import Image from "next/image";
import React from "react";
import img1 from "@/public/assets/7.jpg";
import img2 from "@/public/assets/whitee.jpg";
import avatar from "@/public/assets/user.jpg";
import example from "@/public/assets/ex.jpg";
function Header() {
  return (
    <section className="mt-6 flex w-full min-h-[500px] gap-6">
      <div className="flex-1 bg-red-400 relative rounded-3xl">
        <Image
          src={img1}
          width={1000}
          height={1000}
          className="w-full h-full absolute object-cover rounded-3xl"
        />
        <div className="w-full h-[200px]  rounded-3xl absolute bottom-0 px-4 text-white flex flex-col gap-4">
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
      <div className="flex-1 bg-blue-400 relative rounded-3xl">
        <Image
          src={img2}
          width={1000}
          height={1000}
          className="w-full h-full absolute object-cover rounded-3xl"
        />

        <div className="w-full  rounded-3xl absolute top-10  flex flex-col gap-16">
          <div className="px-10 flex flex-col gap-10">
            <h1 className="text-4xl font-semibold text-black leading-normal	">
              ACCESS TO HIGH-QUALITY, ECO-FRIENDLY ♦ PRODUCTS AND SERVICES
            </h1>

            <span className=" ">
              <h1 className=" text-sm text-black font-semibold">
                Try it on or buy the look
                <p className="text-xs text-gray-500 font-medium">
                  Scan , Adjust , try your clothes on digitally
                </p>
              </h1>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white w-[210px] h-[100px] rounded-xl flex gap-2 p-2">
              <Image
                src={example}
                width={100}
                height={100}
                className="object-cover rounded-xl w-24"
              />
              <span className="flex flex-col justify-between">
                <h1 className="font-medium">Silloute BR</h1>
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
