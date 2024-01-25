import { useState } from "react";
import { Link } from "react-router-dom";
import SubmitButton from "../ui/SubmitButton";
import wave from "@/assets/wave.svg";
import footerLogo from "@/assets/footerLogo.svg";
import footer from "@/data/footer";


const JoinUs = () => {
  const [isLoading, setIsLoading] = useState(false);

  const checking = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 4000);
    // alert("You have been added to the waitlist!")
  };
  return (
    <div className="absolute left-0 z-50 m-auto mt-48 w-full bg-white pt-10 text-center">
      <div className="primary-bg pb-10 ">
        <h1 className=" font-base mb-10 pt-3 text-[200%] leading-[56px] text-white ">
          Be among the first to enjoy all the benefits and more
        </h1>
        <h1 className="mb-20 text-[400%] font-semibold text-white">
          Join Waitlist
        </h1>
        <div className="waitlist-input m-auto mb-20 mt-10 flex w-[35%] justify-between rounded-full border-2 p-2">
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
      </div>
      <img
        src={[wave]}
        alt="wave"
        width="100%"
        height="300"
        className=" relative left-0 -mt-20 "
      />

      <div className=" relative left-0 top-40 px-44 pb-10 text-left ">
        <div className="m-auto flex w-full justify-between border-b-2 pb-10 text-center">
          <div className="">
            <img src={[footerLogo]} alt="Logo" width="80%" height="50%" />
          </div>
          <div className="flex w-[80%] justify-around text-left">
            {footer.map((data) => {
              return (
                <div key={data.id} className=" ">
                  <h1 className="mb-5 text-lg font-medium">{data.title}</h1>
                  {data.text?.map((value) => {
                    return (
                      // <p key={value.indexOf} className="mb-5">
                      //   {value}
                      // </p>
                      <Link key={value.indexOf} type="button" to={value.to}>
                        <p className="mb-5">{value.name}</p>
                      </Link>
                    );
                  })}
                  {data.img?.map((value) => {
                    return (
                      <Link
                        key={value.indexOf}
                        type="button"
                        to="https://google.com"
                      >
                        <img
                          src={value.logo}
                          alt={value.alt}
                          className="mb-5"
                        />
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative z-50 py-20 w-full bg-white">
          <h1 className="  m-auto  w-[50%]  text-center">
            © 2023, All Rights Reserved
          </h1>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;