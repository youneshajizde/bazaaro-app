import React from "react";
import Image from "next/image";
import { StarFilledIcon } from "@radix-ui/react-icons";
import newsletterImg from "@/public/assets/nll.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import gamilImg from "@/public/assets/ggm.png";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";

function Newsletter() {
  return (
    <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 lg:px-0">
      <div className="flex flex-col space-y-5">
        <span className="flex items-center gap-1">
          <StarFilledIcon
            fill="white"
            className="w-8 h-8 md:w-9 md:h-9 bg-black rounded-xl p-2 text-white"
          />
          <span className="flex flex-col">
            <h1 className="font-medium text-sm md:text-base">
              10+ Mil subscribers
            </h1>
            <p className="text-xs md:text-sm font-medium underline">
              Read our success stories
            </p>
          </span>
        </span>
        <h1 className="title-text-style">CREDIT</h1>

        <span className="flex flex-col">
          <p className="font-medium text-sm md:text-base">
            "The best platform to buy and post goods in Asia and beyond"
          </p>

          <span className="flex items-center gap-2 mt-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>
              <h1 className="font-medium text-xs md:text-sm">Jade Linx</h1>
              <p className="text-gray-800 text-xs font-medium">
                UI/UX Designer
              </p>
            </span>
          </span>

          <span className="mt-10 flex items-center gap-3">
            <Button className="rounded-full hover:bg-transparent hover:text-black hover:border-2 hover:border-black text-sm md:text-base">
              Subscribe now
            </Button>
            <Link href={"/"} className="text-sm font-medium underline">
              Read more
            </Link>
          </span>
        </span>
      </div>

      <div className="relative bg-black rounded-2xl w-full h-[400px] lg:h-full">
        {/* Adjust parent height for smaller screens */}
        <Image
          src={newsletterImg}
          alt="Newsletter background"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />

        <div className="relative w-full h-full">
          {/* Positioning the gmail card in the top-left */}
          <div className="bg-white rounded-2xl absolute top-5 left-5 flex items-center space-x-3 md:space-x-4 px-3 py-3 md:py-4 text-xs md:text-sm shadow-lg">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className="font-medium hidden sm:block">
              Jade has been paid for the design
            </p>

            <span className="flex items-center gap-1">
              <Check className="bg-black text-white w-5 h-5 md:w-7 md:h-7 p-1 rounded-full" />
              <ChevronRight className="hidden md:block" />
            </span>
          </div>

          {/* Centering the gmail image */}
          <Image
            src={gamilImg}
            alt="Gmail Image"
            width={150}
            height={150}
            className="object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28"
          />

          {/* Large text in the bottom-right corner */}
          <h1 className="absolute bottom-5 right-5 text-3xl md:text-5xl lg:text-6xl text-white font-bold opacity-90">
            NEWSLETTER
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
