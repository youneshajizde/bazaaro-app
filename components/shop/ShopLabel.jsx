import React from "react";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

function ShopLabel() {
  return (
    <div className="flex items-center justify-between ">
      <h1 className="text-2xl font-semibold">Shop</h1>

      <span className="flex items-center gap-3">
        <Button className="bg-transparent rounded-full border-[1px] border-black text-black hover:bg-black hover:text-white">
          Best Seller
        </Button>
        <Button className="bg-transparent rounded-full border-[1px] border-black text-black hover:bg-black hover:text-white">
          Trending
        </Button>
        <Button className="bg-transparent rounded-full border-[1px] border-black text-gray-500 hover:bg-black hover:text-white ">
          Empathy
        </Button>
      </span>

      <div className="hidden md:flex items-center space-x-2 ">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Local Sellers</Label>
      </div>
    </div>
  );
}

export default ShopLabel;
