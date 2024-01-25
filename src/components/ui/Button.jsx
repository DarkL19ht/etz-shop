import { useMemo } from "react";



const getSize = (size) => {
  switch (size) {
    case "sm":
      return "px-4 py-2 ";
    case "lg":
      return "px-2 py-7 md:w-40 md:py-0";
    default:
      return "px-4 py-2";
  }
};

export default function Button({
  title,
  className,
  type,
  variant,
  size,
  ...props
}) {
  const getVariant = useMemo(() => {
    switch (variant) {
      case "primary":
        return "bg-blue-500";
      case "secondary":
        return "btn-primary";
      default:
        return "bg-gray-400";
    }
  }, [variant]);

  return (
    <button
      type="button"
      className={` w-16 rounded-full py-2 text-base md:w-40 md:py-0  ${getVariant} ${getSize(
        size === "lg"
      )} ${className}`}
      {...props}
    >
      {title}
    </button>
  );
}

Button.defaultProps = {
  className: ".btn-primary",
  title: "Click me",
};
