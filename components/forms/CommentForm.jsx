"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomField from "../CustomField";
import { commentSchema } from "@/lib/signUpSchema";
import { useForm } from "react-hook-form";

function CommentForm() {
  const form = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: "",
      userId: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <CustomField
          fieldType={"textarea"}
          name={"comment"}
          label={""}
          placeholder={"Write a comment..."}
        />
        <Button type="submit" className="w-40 mt-4 bg-green-600">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default CommentForm;
