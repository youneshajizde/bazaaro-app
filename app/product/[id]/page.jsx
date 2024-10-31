import React from "react";
import Crumbs from "./component/crumbs";
import ImageGallery from "./component/ImageGallery";
import { prImages } from "@/lib/constants";
import ProductDetail from "./component/ProductDetail";
function page() {
  console.log(prImages);
  
  return (
    <div className="w-[90%] mx-auto flex flex-col space-y-10">
      <Crumbs />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
        <div className="md:col-span-1">
          <ImageGallery images={prImages} />
        </div>
        <div className="md:col-span-1">
          <ProductDetail />
        </div>
      </div>
    </div>
  );
}

export default page;
