import React from "react";
import newsletterImg from "@/public/assets/nl4.jpg";
import Image from "next/image";
import logo from "@/public/assets/log.png";
import { MousePointerClick } from "lucide-react";
function Newsletter() {
  return (
    <section className="mt-10">
      <div className="w-full h-[450px] rounded-3xl relative overflow-hidden">
        {/* Background Image */}
        <Image
          src={newsletterImg}
          width={0}
          height={0}
          className="object-cover absolute h-full w-full rounded-3xl"
          alt="Newsletter Background"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>

        {/* Content */}
        <div className="w-[65%] mx-auto relative z-10 flex flex-col items-center justify-center h-full text-white space-y-7">
          <h2 className="text-3xl  font-bold text-center logos-text">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-center mt-2 text-lg">
            By joining our newsletter , you will get daily letters about our
            <span className="logos-text font-medium text-blue-300">
              {" "}
              empathy{" "}
            </span>
            and other products that get updated everyday if not every hour
          </p>
          <p className="text-center mt-2 text-sm flex items-center gap-1">
            Become a part of the
            <span className="logos-text text-blue-200 fot-medium  gap-1 flex items-center">
              {" "}
              <Image src={logo} width={20} height={20} />
              Bazaaro{" "}
            </span>
            family
          </p>
          <button className="mt-4 px-10 font-medium py-2 bg-white text-black hover:bg-black hover:text-white rounded-full flex items-center gap-2 transition-all">
            Subscribe <MousePointerClick size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
