import React from "react";
import { cva } from "class-variance-authority";
import { ImSpinner } from "react-icons/im";
import cn from "@/utils/tailwind-merge";

const buttonVariants = cva("text-base uppercase", {
  variants: {
    variant: {
      primary: "bg-green-200 text-black",
      secondary: "bg-red-500",
      cancel: "bg-gray-500",
    },
    size: {
      sm: "px-2 py-2",
      md: "px-4 py-2",
      lg: "px-6 py-3",
    },
    buttonHeight: {
      sm: "py-2"
    },
    fullWidth: {
      true: "w-full",
    },
    disabled: {
      true: "bg-gray-100 cursor-not-allowed",
    },
    isLoading: {
      true: "block h-7 w-7",
      false: "hidden",
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      size: "sm",
      class: "uppercase rounded-md",
    },
  ],
  defaultVariants: {
    variant: "primary",
    fullWidth: false,
    disabled: false,
    size: "sm",
  },
});

export default function SubmitButton({
  variant,
  size,
  onClick,
  className,
  title,
  fullWidth,
  disabled,
  isLoading,
  loadingText,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        buttonVariants({ variant, size, className, fullWidth, disabled })
      )}
    >
      <div className="flex justify-center gap-2">
        <ImSpinner className={cn(buttonVariants({ isLoading }))} />

        {/* <img src="" alt="loading" className={cn(buttonVariants({ isLoading }))} /> */}
        {isLoading ? (
          <div >{loadingText}</div>
        ) : (
          <div className="w-full">{title}</div>
        )}
      </div>
    </button>
  );
}
