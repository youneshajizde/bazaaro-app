"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUpSchema } from "@/lib/signUpSchema";
import CustomField from "../CustomField";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

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

function SignUpForm() {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  return (
    <div className="min-w-[400px] mx-auto p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-bold text-center mb-4 logo-text">Sign Up</h2>
      <p className="text-center text-gray-600 mb-6">
        Create an account to access all features
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CustomField
            name={"username"}
            label={"Username"}
            placeholder={"Jonas"}
          />
          <CustomField
            name={"email"}
            label={"Email"}
            placeholder={"Jonas@gmail.com"}
          />
          <CustomField
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

// "use client";

// import React, { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import { Form } from "@/components/ui/form";
// import CustomField from "../CustomField";
// import Link from "next/link";
// import { signUpSchema } from "@/lib/validations";
// import supabase from "@/lib/supabaseClient";
// import { useRouter } from "next/navigation";
// function SignUpForm() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const router = useRouter();
// const form = useForm({
//   resolver: zodResolver(signUpSchema),
//   defaultValues: {
//     username: "",
//     email: "",
//     password: "",
//   },
// });

//   const onSubmit = async (values) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const { email, password } = values;

//       const { error } = await supabase.auth.signUp({
//         email,
//         password,
//       });

//       if (error) {
//         setError(error.message);
//         console.log("supabase has faced an issue", error);
//       } else {
//         alert(
//           "authentication was successfull! now you will be navigated to the sign in page"
//         );
//         router.push("/sign-in");
//       }
//     } catch (e) {
//       console.log(e);
//     } finally {
//       setLoading(false);
//       console.log("finished submitting...");
//     }
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-7">
//         <CustomField
//           fieldType={"input"}
//           label={"Username"}
//           name={"username"}
//           placeHolder={"your username"}
//           control={form.control}
//         />
//         <CustomField
//           fieldType={"input"}
//           label={"Email"}
//           name={"email"}
//           placeHolder={"your email"}
//           control={form.control}
//         />
//         <CustomField
//           fieldType={"input"}
//           label={"Password"}
//           name={"password"}
//           placeHolder={"your password"}
//           control={form.control}
//         />
//         {error && <p className="text-red-500">{error}</p>}
//         <Button
//           className="bg-blue-600 text-white w-full rounded-xl !mt-7 hover:bg-blue-700"
//           type="submit"
//           disabled={loading}
//         >
//           {loading ? "Registering..." : "Register"}
//         </Button>
//       </form>
//     </Form>
//   );
// }

// export default SignUpForm;
