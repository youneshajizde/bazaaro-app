import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import avatar from "@/public/assets/user.jpg";
import img1 from "@/public/assets/7.jpg";

function LeftHeader() {
  return (
    <div className="relative  h-[450px] md:h-[500px] bg-red-400 rounded-3xl">
      <Image
        src={img1}
        width={1000}
        height={1000}
        className="w-full h-full absolute object-cover rounded-3xl"
      />
      <div className="w-full h-[200px] rounded-3xl absolute bottom-0 px-4 text-white flex flex-col gap-12">
        <div className="flex flex-col gap-3">
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

        <span className="flex items-center gap-2">
          Explore our virtual world
          <ArrowUpRight />
        </span>
      </div>
    </div>
  );
}

export default LeftHeader;
