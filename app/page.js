"use client";

import Advertise from "@/components/Advertise";
import Header from "@/components/header/Header";
import Navbar from "@/components/Navbar";
import Shop from "@/components/shop/Shop";
import SplashPop from "@/components/SplashPop";
import Image from "next/image";
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
      <Navbar />
      <div className="w-[90%] mx-auto flex flex-col space-y-28">
        <Header />
        <Shop />
      </div>
      <Advertise />
    </main>
  );
}
