"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { signInSchema } from "@/lib/signUpSchema";
import CustomField from "../CustomField";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

function SignInForm() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    console.log(values);
    const { email, password } = values;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.log(error.message);
      } else {
        console.log("signed in successfully!");
        console.log(data.user);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-w-[400px] mx-auto p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-bold text-center mb-4 logo-text">Sign In</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CustomField
            fieldType={"input"}
            name={"email"}
            label={"Email"}
            placeholder={"Jonas@gmail.com"}
          />
          <CustomField
            fieldType={"input"}
            name={"password"}
            label={"Password"}
            placeholder={"1234567"}
          />

          <Button type="submit" className="w-full mt-4 bg-green-600 ">
            Submit
          </Button>
        </form>
      </Form>

      <p className="text-sm font-medium flex items-center gap-1 text-gray-400 mt-3">
        don you have an account?
        <Link href={"/sign-up"} className="text-blue-600">
          sign up
        </Link>
      </p>
    </div>
  );
}

export default SignInForm;
