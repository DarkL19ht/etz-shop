import React from "react";
import { cva } from "class-variance-authority";
import cn from "@/utils/tailwind-merge";

const buttonVariants = cva("text-base uppercase", {
  variants: {
    variant: {
      primary: "bg-green-500 text-white",
      secondary: "bg-red-500",
      cancel: "bg-gray-500",
    },
    size: {
      sm: 'px-2 py-2',
      md: 'px-4 py-2',
      lg: 'px-6 py-3',
    },
    fullWidth: {
      true: "w-full"
    },
    disabled: {
      true: "bg-gray-100 cursor-not-allowed"
    }
  },
  compoundVariants: [
    {
      variant: "primary",
      size: "sm",
      class: "uppercase rounded-md"
    }
  ],
  defaultVariants: {
    variant:"primary",
    fullWidth: false,
    disabled: false,
    size: "sm"
  },
});

export default function ETZButton({variant, size, className, title, fullWidth, disabled}) {
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant, size, className, fullWidth, disabled }))}
    >
      {title}
    </button>
  );
}
