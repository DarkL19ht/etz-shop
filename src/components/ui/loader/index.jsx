import React from "react";

const Loader = () => {
  return (
    <div>
      <div
        className=" inline-block h-5 w-5 animate-spin rounded-full border-[2px] border-solid border-white border-r-transparent pt-3 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
};

export default Loader;
