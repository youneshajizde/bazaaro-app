import Image from "next/image";
import React from "react";
import footerImg from "@/public/assets/footer.jpg";
import logo from "@/public/assets/log.png";

function Footer() {
  return (
    <section className="relative w-full h-[550px] mt-14 overflow-hidden bg-cover bg-center">
      <div className="absolute inset-0 bg-blue-800 opacity-80 clip-semi-oval">
        <video
          src={"/videos/v6.mp4"}
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white ">
        <div className="flex items-center gap-2">
          <Image src={logo} width={30} height={30} alt="Logo" />
          <h2 className="text-2xl font-semibold logos-text">Bazaaro</h2>
        </div>
        <p className="text-center mt-2 font-medium">
          Discover the best deals and unique products on Bazaaro.
        </p>
      </div>
    </section>
  );
}

export default Footer;
