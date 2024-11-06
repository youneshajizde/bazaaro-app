import Image from "next/image";
import React from "react";
import logo from "@/public/assets/log.png";
import { Facebook, Instagram, MoveUp, Twitter } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative w-full mx-auto h-auto mt-20 overflow-hidden border-t-[1px] border-gray-200">
      {/* Top Section (Hidden on small screens) */}
      <div className="w-full h-[15%] py-4 hidden sm:flex">
        <div className="w-[90%] mx-auto flex items-center justify-between">
          <h1 className="text-sm font-medium bg-black rounded-full text-white px-2 ">
            2025
          </h1>
          <h1 className="text-sm font-medium flex items-center gap-2">
            Back to top
            <MoveUp
              size={40}
              className="bg-black text-white rounded-full p-2"
            />
          </h1>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex w-[97%] sm:w-[90%]  mx-auto flex-col justify-center h-[50%] lg:h-auto lg:py-8 text-center sm:text-left py-10">
        <p className="text-sm font-medium hidden sm:flex text-gray-600">
          Have a project in mind?
        </p>
        <p className="title-text-style">
          LET'S TALK
        </p>
      </div>

      {/* Bottom Section: 4 Columns of Links and Logo */}
      <div className="w-full flex py-10 ">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
          {/* Logo and Name */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <div className="flex items-center gap-2">
              <Image src={logo} width={30} height={30} alt="Logo" />
              <h2 className="text-2xl font-semibold logos-text">Bazaaro</h2>
            </div>
            <p className="text-sm">
              Discover the best deals and unique products on Bazaaro.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" aria-label="Facebook">
                <Facebook color="#3b5998" size={24} />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter color="#1DA1F2" size={24} />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram color="#E1306C" size={24} />
              </Link>
            </div>
          </div>

          {/* Column 1 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Company</h3>
            <a href="#" className="text-sm text-gray-600">
              About Us
            </a>
            <a href="#" className="text-sm text-gray-600">
              Careers
            </a>
            <a href="#" className="text-sm text-gray-600">
              Press
            </a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Support</h3>
            <a href="#" className="text-sm text-gray-600">
              Help Center
            </a>
            <a href="#" className="text-sm text-gray-600">
              Safety Information
            </a>
            <a href="#" className="text-sm text-gray-600">
              Cancellation Options
            </a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Community</h3>
            <a href="#" className="text-sm text-gray-600">
              Events
            </a>
            <a href="#" className="text-sm text-gray-600">
              Blog
            </a>
            <a href="#" className="text-sm text-gray-600">
              Invite Friends
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
