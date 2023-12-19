import { useMemo } from "react";

const getSize = () => {
  switch (size) {
    case "sm":
      return "px-4 py-2";
    case "secondary":
      return "px-8 py-3";
    default:
      return "px-4 py-2";
  }
};

export default function Button({
  title,
  className,
  type = "button",
  variant,
  ...props
}) {
  const getVariant = useMemo(() => {
    switch (variant) {
      case "primary":
        return "bg-blue-500";
      case "secondary":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  }, [variant]);

  return (
    <button
      type={type}
      className={`rounded-md bg-red-500 ${getVariant} ${getSize(
        (size = "lg")
      )} ${className}`}
      {...props}
    >
      {title}
    </button>
  );
}

Button.defaultProps = {
  className: "",
  title: "Click me",
};
