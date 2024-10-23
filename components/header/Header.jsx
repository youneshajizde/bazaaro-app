import React, { useEffect } from "react";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";

function Header() {
  return (
    <section className="mt-6 grid grid-cols-1 lg:grid-cols-2 w-full min-h-[450px] gap-6">
      <LeftHeader />
      <RightHeader />
    </section>
  );
}

export default Header;
