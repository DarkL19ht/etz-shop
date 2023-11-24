import React from 'react';
import sort from '@/assets/sortVector.png';
import date from '@/assets/dateVector.png';
import catalog from '../../data/catalog';

const Catalog = () => {
  return (
    <>
      <div className="md:flex md:justify-between mt-16 md:mt-10 border-b-2 border-sky-500 pb-1 ">
        <p
          className="font-bold text-4xl md:text-lg text-center md:text-left"
          autoCapitalize="characters"
        >
          Product Catalog
        </p>
        <div className="flex justify-between px-3 md:px-0 w-5/12 md:w-2/12 lg:w-1/12 pt-2 md:pt-0 mt-3">
          <div className="flex justify-between md:w-2/5">
            <img
              src={sort}
              alt="sort vector"
              className="w-[40%] h-[60%] pt-1 mr-1 md:mr-0"
            />
            <p className=" font-semibold md:font-normal">Sort</p>
          </div>
          <div className="flex justify-between w-2/5">
            <p className=" font-bold">Date</p>
            <img
              src={date}
              alt="date vector"
              className="w-[30%] h-[50%] pt-1 mt-[7%]"
            />
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-between w-[100%] mt-5">
        {catalog.map((item) => {
          return (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
              {item.id < 5 && (
                <div
                  className={`${
                    item.bestSeller ? 'border-2 border-red-600' : ''
                  } flex-col border-2 mb-10 md:mb-0 p-1 rounded-md w-full md:w-[22.5%] drop-shadow-lg hover:shadow-slate-600 hover:border-sky-500 hover:border-2 hover:shadow-lg bg-white hover:cursor-pointer`}
                  key={item.id}
                >
                  {item.bestSeller && (
                    <button
                      type="button"
                      className="bg-red-600 text-white font-bold w-24 h-7 rounded-bl-lg absolute top-0 right-0 "
                    >
                      SHOP NOW
                    </button>
                  )}
                  <img
                    src={item.img}
                    alt="product one"
                    className="w-full mb-3"
                  />
                  <div className="w-full">{item.productTitle}</div>
                  <p className="font-bold ">{item.price}</p>
                </div>
              )}
            </>
          );
        })}
      </div>
      <div className="md:flex md:justify-between w-[100%] mt-5">
        {catalog.map((item) => {
          return (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
              {item.id > 4 && (
                <div
                  className={`${
                    item.bestSeller ? 'border-2 border-red-600' : ''
                  } flex-col border-2 mb-10 md:mb-0 p-1 rounded-md w-full md:w-[22.5%] drop-shadow-lg hover:shadow-slate-600 hover:border-sky-500 hover:border-2 hover:shadow-lg bg-white hover:cursor-pointer`}
                  key={item.id}
                >
                  {item.bestSeller && (
                    <button
                      type="button"
                      className="bg-red-600 text-white font-bold w-24 h-7 rounded-bl-lg absolute top-0 right-0 "
                    >
                      SHOP NOW
                    </button>
                  )}
                  <img
                    src={item.img}
                    alt="product one"
                    className="w-full mb-3"
                  />
                  <div className="w-full">{item.productTitle}</div>
                  <p className="font-bold ">{item.price}</p>
                </div>
              )}
            </>
          );
        })}
        {/* {catalog.map((value) => {
          if (value.id > 4) {
            return (
              <div
                className={`${
                  value.bestSeller ? 'border-2 border-red-600' : ''
                } flex-col border-2 mb-10 md:mb-0 p-1 rounded-md w-full md:w-[22.5%] drop-shadow-lg hover:shadow-slate-600 hover:border-sky-500 hover:border-2 hover:shadow-lg bg-white hover:cursor-pointer`}
                key={value.id}
              >
                {value.bestSeller && (
                  <button
                    type="button"
                    className="bg-red-600 text-white font-bold w-24 h-7 rounded-bl-lg absolute top-0 right-0 "
                  >
                    SHOP NOW
                  </button>
                )}
                <img
                  src={value.img}
                  alt="product one"
                  className="w-full mb-3"
                />
                <div className="w-full">{value.productTitle}</div>
                <p className="font-bold ">{value.price}</p>
              </div>
            );
          }
        })} */}
      </div>
    </>
  );
};

export default Catalog;
