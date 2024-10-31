import { Label } from "@/components/ui/label";
import { colors, sizes } from "@/lib/constants";
import { CreditCard, ShoppingCart, Star } from "lucide-react";
import React from "react";
import { RocketIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
function ProductDetail() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col space-y-5">
        <h1 className="text-2xl font-medium">Misaria GR Black</h1>
        <h1 className="rounded-full border-[1px] border-black px-3 py-1 w-24 text-center text-sm">
          clothings
        </h1>
        <Alert>
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
        <span className="flex items-center gap-5 text-lg">
          <p className="font-medium">199.00$</p>
          <p className="text-gray-400">250.00$</p>
        </span>
        <span className="flex items-center gap-3">
          <h1 className="text-md flex items-center gap-1 font-medium">
            <Star fill="orange" stroke="0" /> 5
          </h1>
          <h1 className="text-sm text-gray-500 font-medium">Reviews(19)</h1>
        </span>
        <span>
          <Label className="text-md">Sizes</Label>
          <div className="mt-3 flex items-center gap-2">
            {sizes.map((size, index) => (
              <span
                key={index}
                className="bg-stone-800 p-2 rounded-lg text-white text-xs font-medium"
              >
                {size}
              </span>
            ))}
          </div>
        </span>
        <span>
          <Label className="text-md">Colors</Label>
          <div className="mt-3 flex items-center gap-2">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`h-6 w-6 border-gray-400 border-[2px] rounded-full bg-${color}-600`}
                title={color}
              ></div>
            ))}
          </div>
        </span>
      </div>

      <div className="flex items-center w-full gap-3">
        <Button className="px-5 py-2 bg-stone-800 hover:bg-black ">
          Add to cart <ShoppingCart />
        </Button>
        <Button className="px-5 py-2 bg-transparent border-stone-800 border-[1px] hover:bg-black text-black hover:text-white">
          Buy it now <CreditCard />
        </Button>
      </div>
    </div>
  );
}

export default ProductDetail;
