import Image from "next/image";
import React from "react";
import footerImg from "@/public/assets/footer.jpg";
import logo from "@/public/assets/log.png";
function Footer() {
  return (
    <section className="relative w-full h-[450px] mt-20  overflow-hidden">
      {/* Background Image */}

      {/* Overlay with Abstract Shape */}
      <div className="absolute inset-0 bg-green-100 opacity-60 clip-shape"></div>

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-gray-800">
        <div className="flex items-center gap-2">
          <Image src={logo} width={30} height={30} />
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
