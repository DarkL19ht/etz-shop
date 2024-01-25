import React, { useState } from "react";
import SubmitButton from "../ui/SubmitButton";
import map from "@/assets/map.svg"

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);

  const checking = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 4000);
  };
  return (
    <div className="mt-28  w-full text-center mb-80">
      <div className="mini-title m-auto w-40 rounded-full py-1 text-center font-semibold">
        JOIN WAITLIST
      </div>
      <h1 className="mt-16 text-[500%] font-semibold">Find. Rate. Validate.</h1>
      <h1 className="primary-color mt-16 text-[500%] font-semibold">
        Trusted businesses <span className="text-black">and</span> products
      </h1>
      <p className="primary-text-color m-auto mt-16 w-[65%] text-[170%] leading-8">
        A platform to write and find honest ratings and reviews on products,
        services, and businesses and help businesses improve their offerings
        based on customer feedback.
      </p>
      <div className="waitlist-input m-auto mt-10 flex w-[35%] justify-between rounded-full border-2 p-2">
        <input
          type="text"
          className="waitlist-bg m-auto w-[200%] rounded-md p-2 text-lg  focus:outline-none"
          placeholder="Input email address"
        />
        <SubmitButton
          variant="secondary"
          title="Join Waitlist"
          size="sm"
          fullWidth
          loadingText="Please Wait..."
          isLoading={isLoading}
          onClick={checking}
          className="rounded-full"
        />
      </div>
      <div className="w-full mt-16 h-80">
        <img src={[map]} alt="map" className="absolute  left-0 w-full" />
      </div>
    </div>
  );
};

export default Hero;
