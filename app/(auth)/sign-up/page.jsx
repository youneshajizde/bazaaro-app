"use client";
import React from "react";
import SignUpForm from "@/components/forms/SignUpForm";

function SignUp() {
  return (
    <div className="flex h-screen">
      {/* Left Side - Hidden on small screens */}
      <div className="hidden md:flex w-2/5 bg-green-200 items-center justify-center relative">
        <video
          src={"/videos/v4.mp4"}
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        />
      </div>

      {/* Right Side (Sign Up Form) */}
      <div className="w-full md:w-3/5 flex items-center justify-center">
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
