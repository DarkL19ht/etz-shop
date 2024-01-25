import { Switch, Disclosure } from "@headlessui/react";
import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import faq from "@/data/faq"

import SubmitButton from "../ui/SubmitButton";

const Faq = () => {
  const [enabled, setEnabled] = useState(false);
  const [limit, setLimit]= useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const checking = () => {
    setIsLoading(true);
    
    setIsLoading(!isLoading)
    if(limit === 5) { setLimit(faq[0].list.length + 1)}else {setLimit(5)}
  };

  const checking2 = () => {
    setIsLoading(true);

    setIsLoading(!isLoading);
    if (limit === 5) {
      setLimit(faq[1].list.length + 1);
    } else {
      setLimit(5);
    }
  };

  return (
    <div className=" ">
      <div className="primary-bg m-auto mt-48 w-full rounded-lg pt-32 text-center ">
        <h1 className="mb-20 text-[400%] font-semibold text-white">
          Frequently Asked Questions
        </h1>
        <div className="w-full">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? "bg-amber-50" : "bg-white"}
          relative inline-flex h-[10%] w-[30%] shrink-0 cursor-pointer rounded-full border-2 border-transparent py-2 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
          >
            <span className="sr-only"> Use Setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? "translate-x-56" : "translate-x-4"}
            primary-bg pointer-events-none inline-block h-[90%] w-[50%] transform rounded-full py-6 shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
            <div className="-ml-[48%] flex w-full justify-between px-7 py-3 text-[200%]">
              <p className="">For Individuals</p>
              <p className="">For Businesses</p>
            </div>

            <div className="absolute left-[50%] -ml-[48%] flex w-full justify-between px-7 py-3 pr-14 text-[180%] text-white">
              <p className={`${enabled ? "text-transparent" : "text-white"}`}>
                For Individuals
              </p>
              <p className={`${enabled ? "text-white" : "text-transparent"}`}>
                For Businesses
              </p>
            </div>
          </Switch>
        </div>
        <div className="w-full px-1 pt-16">
          {enabled ? (
            <div className="mx-auto w-full max-w-[80%] rounded-2xl p-4">
              {faq[0].list.map((data, index) => {
                return (
                  <div key={data.id}>
                    {data?.id < limit && (
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className=" mb-3 flex w-full justify-between rounded-lg bg-white px-4 py-4 text-left text-sm font-medium text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                              <span>{data.desc}</span>
                              <ChevronUpIcon
                                className={`${
                                  open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-black`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mb-8 bg-white px-4 pb-2 pt-4 text-left text-sm text-gray-500">
                              {data.panel}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )}
                  </div>
                );
              })}

              <SubmitButton
                variant="none"
                title="See more"
                size="sm"
                loadingText="See less"
                isLoading={isLoading}
                onClick={checking}
                className="mb-16 mt-7 text-white"
              />
            </div>
          ) : (
            <div className="mx-auto w-full max-w-[80%] rounded-2xl p-4">
              {faq[1].list.map((data, index) => {
                return (
                  <div key={data.id}>
                    {data?.id < limit && (
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className=" mb-3 flex w-full justify-between rounded-lg bg-white px-4 py-4 text-left text-sm font-medium text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                              <span>{data.desc}</span>
                              <ChevronUpIcon
                                className={`${
                                  open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-black`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mb-8 bg-white px-4 pb-2 pt-4 text-left text-sm text-gray-500">
                              {data.panel}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )}
                  </div>
                );
              })}

              {/* <Button
              title="Join Waitlist"
              size="lg"
              variant="secondary"
              onClick={() => setLimit(faq[0].list.length + 1)}
            /> */}

              <SubmitButton
                variant="none"
                title="See more"
                size="sm"
                loadingText="See less"
                isLoading={isLoading}
                onClick={checking2}
                className="mb-16 mt-7 text-white"
              />

              {/* <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>Do you offer technical support?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                    No.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
