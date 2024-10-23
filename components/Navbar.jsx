import Image from "next/image";
import React from "react";
import logo from "@/public/assets/log.png";
import pfp from "@/public/assets/pfp1.jpg";
import { Input } from "./ui/input";
import { Heart, Search, ShoppingBag } from "lucide-react";
import { DropdownMenuCheckboxes } from "./ProfileMenu";

function Navbar() {
  return (
    <section className=" w-full h-[80px] py-4 px-16 flex items-center justify-between ">
      <div className="flex items-center gap-10">
        <span className="flex items-center gap-2">
          <Image src={logo} width={30} height={30} />
          <h1 className="font-semibold logo-text">BÀAZARO</h1>
        </span>
        <div className="w-[500px] bg-gray-100 rounded-3xl flex items-center gap-1 px-2">
          <Search className="text-gray-400" />
          <Input
            placeholder="search..."
            className="border-none outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 border-transparent focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-10 text-gray-400">
          <Heart />
          <ShoppingBag />
        </div>

        <div className="h-9 w-px bg-gray-300"></div>
        <div className="profile flex items-center gap-2 ">
          <Image src={pfp} width={40} height={40} className="rounded-full" />
          <span className="flex flex-col gap-1">
            <h1 className="text-xs font-medium text-gray-400">Hi! Welcome</h1>
            <h1 className="text-sm font-medium">Jenna connor</h1>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
