import { useMemo } from "react";

const getSize = (size) => {
  switch (size) {
    case "sm":
      return "px-4 py -2";
    case "md":
      return "px-8 py-3";
    case "lg":
      return "px-10 py-4";
    default:
      return "px-4 py -2";
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
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  }, [variant]);

  return (
    <button
      type="button"
      className={`rounded-md ${getVariant} ${getSize(size)} ${className}`}
      {...props}
    >
      {title}
    </button>
  );
}

Button.defaultProps = {
  className: "",
  title: "",
};
