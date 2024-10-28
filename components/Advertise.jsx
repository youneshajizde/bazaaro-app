import React from "react";
import user from "@/public/assets/p3.jpg";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
function Advertise() {
  return (
    <section className="bg-gray-100 w-full min-h-[400px] mt-16">
      <div className=" items-center justify-center w-[80%] h-[400px] mx-auto flex flex-col space-y-5">
        <h1 className="text-3xl text-blue-200 logo-text">EMPATHY</h1>
        <p className="text-center font-light text-sm md:text-2xl  md:leading-10 ">
          Empathy is path for • creative individuals who seek perfection and
          want to have their own ideas put under practice In
          <span className="font-medium text-blue-200 logo-text"> empathy </span>
          we provide a solid experience for creators to share
          <span className="font-medium text-sm md:text-2xl block">
            Join us to build a new method in products and services , thus our
            journey begins
          </span>
        </p>
      </div>

      <div className="flex items-center justify-between w-[90%] mx-auto py-10">
        <div className="flex items-center gap-2">
          <Image
            src={user}
            width={40}
            height={50}
            className="rounded-lg w-8 h-10 object-cover"
          />
          <span className="flex flex-col space-y-3 font-medium text-sm">
            Catelyn Ken
            <h1 className="text-xs">Director of empathy</h1>
          </span>
        </div>

        <span className="flex items-center gap-2">
          Join the empathy community
          <ArrowUpRight className="bg-black text-white w-7 h-7 rounded-full p-1 hidden md:block" />
        </span>
      </div>
    </section>
  );
}

export default Advertise;
