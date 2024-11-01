"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { signUpSchema } from "@/lib/signUpSchema";
import CustomField from "../CustomField";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

function SignUpForm() {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    console.log(values);

    try {
      const { email, password, username } = values;

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { display_name: username },
        },
      });
      if (error) {
        console.log("error louie louie", error);
      } else {
        console.log("signed up successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-w-[400px] mx-auto p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-bold text-center mb-4 logo-text">Sign Up</h2>
      <p className="text-center text-gray-600 mb-6">
        Create an account to access all features
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CustomField
            fieldType={"input"}
            name={"username"}
            label={"Username"}
            placeholder={"Jonas"}
          />
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
        don't have an account?
        <Link href={"/sign-in"} className="text-blue-600">
          sign in
        </Link>
      </p>
    </div>
  );
}

export default SignUpForm;
