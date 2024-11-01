import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CommentForm from "@/components/forms/CommentForm";

function Comments() {
  return (
    <div className="comments ">
      <div className="w-full space-y-4 mt-6">
        <div className="w-full space-y-3">
          <div className="single-comment w-full bg-gray-100 p-3 flex justify-between rounded-xl">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>
                <h1 className="font-medium">Jade linx</h1>
                <p className="text-gray-800 text-sm font-medium">
                  This dress really fits the club , innit?
                </p>
              </span>
            </div>

            <span className="text-sm font-medium text-gray-500">
              1 Week ago
            </span>
          </div>
        </div>

        <div className="mt-4">
          <CommentForm />
        </div>
      </div>
    </div>
  );
}

export default Comments;
