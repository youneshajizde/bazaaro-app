"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/assets/log.png";
import pfp from "@/public/assets/pfp1.jpg";
import { Input } from "./ui/input";
import { Heart, Search, ShoppingBag, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="w-full h-[80px] py-4 px-4 md:px-16 flex items-center justify-between">
      {/* Left Side: Logo */}
      <div className="flex items-center gap-10">
        <span className="flex items-center gap-2">
          <Image src={logo} width={30} height={30} alt="Bazaaro Logo" />
          <h1 className="text-2xl font-semibold logos-text hidden lg:block">
            Bazaaro
          </h1>
        </span>
      </div>

      {/* Center: Search bar (remains visible on all screen sizes) */}
      <div className="flex w-[250px] sm:w-[300px] md:w-[500px] bg-gray-100 rounded-3xl items-center gap-1 px-2">
        <Search className="text-gray-400" />
        <Input
          placeholder="search..."
          className="border-none outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 border-transparent focus:border-transparent w-full"
        />
      </div>

      {/* Right side: Profile and icons (responsive) */}
      <div className="hidden sm:flex items-center gap-4">
        <div className="flex items-center gap-6 text-gray-400">
          <Heart />
          <ShoppingBag />
        </div>
        <div className="h-9 w-px bg-gray-300"></div>
        <div className="profile flex items-center gap-2">
          <Image
            src={pfp}
            width={40}
            height={40}
            className="rounded-full"
            alt="Profile"
          />
          <span className="lg:flex flex-col gap-1 hidden">
            <h1 className="text-xs font-medium text-gray-400">Hi! Welcome</h1>
            <h1 className="text-sm font-medium">Jenna Connor</h1>
          </span>
        </div>
      </div>

      {/* Burger menu icon for small screens */}
      <div className="flex sm:hidden">
        <Menu
          className="text-gray-400 cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
      </div>

      {/* Sidebar menu (grows from the right) */}
      <div
        className={`fixed inset-y-0 right-0 z-40 bg-white shadow-lg transition-all duration-300 ${
          menuOpen ? "w-3/4 max-w-xs" : "w-0"
        } overflow-hidden`}
      >
        <div className="p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">Menu</h1>
            <X
              className="text-gray-400 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>
          <div className="flex items-center gap-6 text-gray-400">
            <Heart />
            <ShoppingBag />
          </div>
          <div className="profile flex items-center gap-2">
            <Image
              src={pfp}
              width={40}
              height={40}
              className="rounded-full"
              alt="Profile"
            />
            <span className="flex flex-col gap-1">
              <h1 className="text-xs font-medium text-gray-400">Hi! Welcome</h1>
              <h1 className="text-sm font-medium">Jenna Connor</h1>
            </span>
          </div>
        </div>
      </div>

      {/* Overlay (closes menu on click) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </section>
  );
}

export default Navbar;
