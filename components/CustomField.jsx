import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input"; // Import from the correct path
import { Textarea } from "./ui/textarea";

function CustomField({ name, placeholder, label, fieldType }) {
  return (
    <FormField
      control={Form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {fieldType === "input" ? (
              <Input placeholder={placeholder} {...field} />
            ) : fieldType === "textarea" ? (
              <Textarea placeholder={placeholder} {...field} />
            ) : null}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default CustomField;
