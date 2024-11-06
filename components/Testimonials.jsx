import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import oud from "@/public/assets/oudwood.png";
import coffee from "@/public/assets/cafe.jpg";
import { supabase } from "@/lib/supabaseClient";
import Slider from "react-slick";

function Testimonials() {
  const [testimonial, setTestimonial] = useState();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // For medium screens and below
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For small screens and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For extra-small screens (e.g., mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getTestimonials = async () => {
    try {
      const { data, error } = await supabase.from("testimonials").select("*");
      if (error) {
        console.log(error);
      } else {
        console.log(data);
        setTestimonial(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <section className="mt-16">
      <div className="flex items-center flex-col justify-center space-y-2 text-center">
        <h1 className="font-medium">See why our users love us!</h1>
        <p className="text-sm">
          "I religiously await the weekly emails. Obsessed."
          <span className="text-xs font-medium text-gray-600">
            Angela Cruise
          </span>
        </p>
      </div>

      <Slider {...settings} className="mt-10">
        <div className="slide-item mx-2">
          {" "}
          {/* Add margin to create gap */}
          <div className="w-full h-[310px] rounded-2xl bg-gray-100 p-4 flex flex-col space-y-5">
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

        {testimonial?.map((t, index) => (
          <div className="slide-item mx-2" key={index}>
            {" "}
            {/* Add margin here */}
            <div className="bg-gray-100 w-full h-[310px] rounded-2xl p-4 flex flex-col justify-between">
              <div className="flex flex-col space-y-6">
                <h1 className="text-xl font-medium">{t?.title}</h1>
                <h1 className="text-sm text-gray-400">{t?.name}</h1>
                <p className="text-sm font-medium">{t?.description}</p>
              </div>

              <p className="font-medium underline flex items-center gap-1 justify-end">
                More info <ArrowUpRight />
              </p>
            </div>
          </div>
        ))}

        <div className="slide-item mx-2">
          {" "}
          {/* Add margin here */}
          <div className="w-full h-[310px] rounded-2xl bg-gray-100">
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
              <h1 className="text-3xl text-gray-500 special-font">Tom Ford</h1>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Testimonials;
