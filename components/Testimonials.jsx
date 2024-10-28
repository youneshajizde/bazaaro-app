import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import oud from "@/public/assets/oudwood.png";
import coffee from "@/public/assets/cafe.jpg";
function Testimonials() {
  return (
    <section className="mt-16">
      <div className="flex items-center flex-col justify-center space-y-2">
        <h1 className="font-medium">See why do our users love us!</h1>
        <p className="text-sm">
          "I religiously await the weekly emails. Obsessed."
          <span className="text-xs font-medium text-gray-600">
            Angela Cruise
          </span>
        </p>
      </div>

      <div className="flex items-center gap-10 mt-5">
        <div className="bg-blue-100 w-[230px] h-[310px] rounded-2xl  p-4 flex flex-col justify-between">
          <div className="flex flex-col space-y-6">
            <h1 className="text-xl font-medium">Job</h1>
            <h1 className="text-sm text-gray-400">Los angeles - CA</h1>
            <p className="text-sm font-medium">
              Lunch time starts at a logical time which gives us enough time to
              talk to our peers and fellow co-workers. I have worked in several
              hubs yet Bazaaro has to be the best place to work in!
            </p>
          </div>

          <p className="font-medium underline flex items-center gap-1 justify-end">
            More info <ArrowUpRight />
          </p>
        </div>

        <div className="w-[230px] h-[310px] rounded-2xl bg-blue-100">
          <div className="relative rounded-t-2xl h-[65%]">
            <Image
              src={oud}
              width={1000}
              height={1000}
              className="w-full object-cover absolute rounded-t-2xl h-full"
            />
          </div>
          <div className="flex items-center flex-col space-y-1 mt-2">
            <h1 className="text-4xl special-font">Oud Wood</h1>
            <h1 className="text-3xl text-gray-500 special-font ">Tom Ford</h1>
          </div>
        </div>

        <div className="w-[230px] h-[310px] rounded-2xl bg-blue-100 p-4 flex flex-col space-y-5">
          <div className="flex items-center flex-col space-y-1 mt-2">
            <h1 className="text-4xl special-font">WORKSHOP</h1>
            <h1 className="text-gray-500 text-sm">Join the squad!</h1>
          </div>

          <div className="relative rounded-2xl h-[65%]">
            <Image
              src={coffee}
              width={1000}
              height={1000}
              className="w-full object-cover absolute rounded-2xl h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
