import React from "react";
import user from "@/public/assets/p3.jpg";
import Image from "next/image";
import { ArrowBigUp } from "lucide-react";
function Advertise() {
  return (
    <section className="bg-gray-100 w-full min-h-[400px] mt-16">
      <div className=" items-center justify-center w-[80%] h-[500px] mx-auto flex flex-col space-y-5">
        <h1 className="text-3xl text-blue-200">EMPATHY</h1>
        <p className="text-center font-light text-2xl leading-10">
          Empathy is path for
          <span className=" border-black border-[1px] rounded-full px-3 mx-2">
            • creative
          </span>
          individuals who seek perfection and want to have their own ideas put
          under practice In
          <span className="font-medium text-blue-200"> empathy </span> we
          provide a solid experience for creators to share their ideas
          <span className="font-medium text-xl inline-block ">
            Join us to build a new method in products and services , thus our
            journey begins
          </span>
        </p>
      </div>

      <div className="flex items-center justify-between w-[90%] mx-auto">
        <Image
          src={user}
          width={35}
          height={40}
          className=" rounded-xl inline "
        />

        <span>
          Join the empathy community <ArrowBigUp />
        </span>
      </div>
    </section>
  );
}

export default Advertise;
