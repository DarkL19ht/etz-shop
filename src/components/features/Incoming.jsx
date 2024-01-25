import React from "react";
import searchImage from "@/assets/search.svg"
import qualityImage from "@/assets/quality.svg";
import interactImage from "@/assets/interact.svg";
import exclusiveImage from "@/assets/exclusive.svg";




const Incoming = () => {
  return (
    <div className="mt-80 ">
      <div className="h-5">.</div>
      <div className="mini-title2 m-auto mt-80 w-40 rounded-full py-1 text-center font-semibold">
        JOIN WAITLIST
      </div>
      <div className="m-auto mb-56 w-full text-center">
        <h1 className="primary-color mt-16 text-[500%] font-semibold ">
          What we have <span className="text-black">coming</span>
        </h1>
      </div>
      <div className="mt-40 flex justify-between px-40">
        <div className="w-[45%]">
          <h1 className="primary-color  pt-3 text-justify text-[300%] font-semibold leading-[56px] ">
            Browse and Search Reviews and Ratings.
          </h1>
          <p className="primary-text-color font-base mt-10 text-[200%] leading-10 ">
            Find the best local businesses for your needs with our platform.
            Search by location, rating, keyword, or category, and read customer
            reviews. Critiview makes it easy to find what you need.
          </p>
        </div>

        <img src={[searchImage]} alt="searchImage" width="50%" />
      </div>

      <div className="mt-40 flex justify-between px-40">
        <img src={[qualityImage]} alt="searchImage" width="45%" />
        <div className="w-[50%] justify-start">
          <h1 className="primary-color  pt-3 text-[300%] font-semibold leading-[56px] ">
            Write Quality Reviews and Earn.
          </h1>
          <p className="primary-text-color font-base mt-10 text-[200%] leading-10 ">
            Share honest reviews and ratings on businesses, products and
            services using images, videos and voice messages and earn
          </p>
        </div>
      </div>

      <div className="mt-40 flex justify-between px-40">
        <div className="w-[50%]">
          <h1 className="primary-color  pt-3 text-justify text-[300%] font-semibold leading-[56px] ">
            Interact with Businesses
          </h1>
          <p className="primary-text-color font-base mt-10 text-[200%] leading-10 ">
            Interact with businesses through comments, likes, and messages
          </p>
        </div>

        <img src={[interactImage]} alt="searchImage" width="50%" />
      </div>

      <div className="mt-40 flex justify-between px-40">
        <img src={[exclusiveImage]} alt="searchImage" width="45%" />
        <div className="w-[50%] justify-start">
          <h1 className="primary-color  pt-3 text-[300%] font-semibold leading-[56px] ">
            Exclusive Deals and Discounts from Business
          </h1>
          <p className="primary-text-color font-base mt-10 text-[200%] leading-10 ">
            Access exclusive deals and discounts from businesses that partner
            with Critiview
          </p>
        </div>
      </div>
    </div>
  );
};

export default Incoming;
