"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
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
      <div className="w-[90%] mx-auto">
        <Header />
      </div>
    </main>
  );
}
