"use client";

import Advertise from "@/components/Advertise";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Products from "@/components/products/Products";
import Shop from "@/components/shop/Shop";
import Shopper from "@/components/Shopper";
import SplashPop from "@/components/SplashPop";
import Testimonials from "@/components/Testimonials";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const splashShown = localStorage.getItem("theSplash");

    if (!splashShown) {
      setShowSplash(true);
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("theSplash", "true");
      }, 4000);

      return () => clearTimeout(timer);
    } else {
      setLoading(true);
    }
  }, []);

  if (loading && showSplash) {
    return <SplashPop />;
  }

  return (
    <main>
      <div className="w-[90%] mx-auto flex flex-col space-y-10 md:space-y-20 lg:space-y-24">
        <Header />
        <Shop />
        <Advertise />
      </div>
      <Shopper />
      <div className="w-[90%] mx-auto flex flex-col space-y-10 md:space-y-20 lg:space-y-24">
        <Products />
        <Testimonials />
        <Newsletter />
      </div>
      <Footer />
    </main>
  );
}
