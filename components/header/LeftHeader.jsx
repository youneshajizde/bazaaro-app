import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import avatar from "@/public/assets/user.jpg";
import img1 from "@/public/assets/76.jpg";
import { leftHeaderImgs } from "@/lib/constants";
import Slider from "react-slick";

function LeftHeader() {
  const settings = {
    fade: true,
    infinite: true,
    autoplay: true, // Ensure autoplay is enabled
    autoplaySpeed: 1500, // Controls the speed between slides
    speed: 2000, // Controls the duration of the fade animation
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    pauseOnHover: false, // Makes sure it doesn’t stop autoplay when hovered
    arrows: false, // Hides navigation arrows to ensure it’s purely autoplay
  };

  const slides = leftHeaderImgs.map((img, index) => (
    <Image
      key={index}
      src={img}
      width={1000}
      height={1000}
      className="w-full  h-[450px] md:h-[500px] object-cover rounded-3xl"
    />
  ));

  return (
    <div className="relative h-[450px] md:h-[500px]  rounded-3xl">
      <Slider className="" {...settings}>
        {slides}
      </Slider>

      <div className="w-full h-[200px] rounded-3xl absolute bottom-0 px-4 text-white flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2">
            <Image
              src={avatar}
              width={40} 
              height={50} 
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
