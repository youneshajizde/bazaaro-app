import React from "react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

function Shop() {
  return (
    <section>
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl font-semibold">Shop</h1>

        <span className="flex items-center gap-3">
          <Button className="bg-transparent rounded-full border-[1px] border-black text-black hover:bg-black hover:text-white">
            Best Seller
          </Button>
          <Button className="bg-transparent rounded-full border-[1px] border-black text-black hover:bg-black hover:text-white">
            Trending
          </Button>
          <Button className="bg-transparent rounded-full border-[1px] border-black text-black hover:bg-black hover:text-white text-gray-500">
            Empathy
          </Button>
        </span>

        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Local Sellers</Label>
        </div>
      </div>
    </section>
  );
}

export default Shop;
