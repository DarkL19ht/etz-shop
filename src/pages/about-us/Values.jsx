import { gsap } from "gsap";
import { useEffect } from "react";
import { motion } from "framer-motion";
import values from "@/data/values";


const Values = () => {

    useEffect(() => {
       


        const slider = gsap.to(".slider", {
          x: -2275,
          fill: "blue",
          duration: 25,
          repeat: -1,
          ease: "none",
        });

        return () => {
          slider.kill();
          
        };
    },[])

  return (
    <div className="mt-20">
      <h1 className="primary-color circle m-auto w-[20%] pb-20 pt-32 text-[64px] font-medium text-white mb-20">
        Our Values
      </h1>
      <div className=" no-scrollbar overflow-x-scroll">
        <div className="slider flex w-[300%] justify-evenly ">
          {values.map((value) => {
            return (
              <div
                key={value.id}
                className=" primary-bg mx-5 h-full w-[28%] rounded-3xl pr-5 pt-5"
              >
                <div className="h-full w-full rounded-tr-2xl bg-white pl-5 pr-5 pt-5">
                  <h1 className="primary-color m-auto mt-[10%] h-[150px] w-full text-left text-[48px] font-medium leading-10 ">
                    {value.title}
                  </h1>
                  <motion.div
                    whileHover={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img
                      src={value.img}
                      alt="empathyLogo"
                      className=" mt-[10%] w-[50%]"
                    />
                  </motion.div>
                </div>
              </div>
            );
          })}
          {
            values.map(value => {
                return (
                  <div
                    key={value.id}
                    className=" primary-bg mx-5 h-full w-[28%] rounded-3xl pr-5 pt-5"
                  >
                    <div className="h-full w-full rounded-tr-2xl bg-white pl-5 pr-5 pt-5">
                      <h1 className="primary-color m-auto mt-[10%] h-[150px] w-full text-left text-[48px] font-medium leading-10 ">
                        {value.title}
                      </h1>
                      <motion.div
                        whileHover={{ opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <img
                          src={value.img}
                          alt="empathyLogo"
                          className=" mt-[10%] w-[50%]"
                        />
                      </motion.div>
                    </div>
                  </div>
                );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Values;
