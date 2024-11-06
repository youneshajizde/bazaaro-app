import React from "react";
import user from "@/public/assets/p3.jpg";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import cubeImg from "@/public/assets/sfs.png";

function Advertise() {
  return (
    <section className="w-full mx-auto min-h-[400px] mt-20 leading-[4rem] md:leading-[6rem] lg:leading-[9rem]">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0">
        <h1 className="text-[5rem] md:text-[7rem] lg:text-[9rem] text-gray-200 font-bold text-center md:text-left">
          ENJOY
          <br />
          MARKET
        </h1>
        <div className="w-[200px] md:w-[250px] lg:w-[300px]">
          <Image
            src={cubeImg}
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between py-10 space-y-5 md:space-y-0">
        <div className="flex items-center gap-2">
          <Image
            src={user}
            width={40}
            height={50}
            className="rounded-lg w-8 h-10 object-cover"
          />
          <span className="flex flex-col font-medium text-center md:text-left text-sm">
            Catelyn Ken
            <h1 className="text-xs">Director of Empathy</h1>
          </span>
        </div>

        <span className="flex items-center gap-2 text-center md:text-left">
          Join the empathy community
          <ArrowUpRight className="bg-black text-white w-7 h-7 rounded-full p-1 hidden md:block" />
        </span>
      </div>
    </section>
  );
}

export default Advertise;
