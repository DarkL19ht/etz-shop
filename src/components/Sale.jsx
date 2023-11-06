import React from 'react';
import hotSale from '../utils/hotSale';

const Sale = () => {
  return (
    <div className="md:flex md:justify-between mt-10 border-b-2 pb-0 md:pb-10">
      <div className="w-full md:w-[40%]">
        <h2 className="font-bold text-xl md:text-2xl mb-0 md:mb-2">
          About the eCommerce Website
        </h2>
        <h2 className="text-lg md:text-2xl font-semibold text-slate-400 mb-0 md:mb-2">
          Groceries
        </h2>
        <p className="text-sm md:text-lg">
          eTranzact is your number one online shopping site in Nigeria. We are
          an online store where you can purchase all your electronics, as well
          as books, home appliances, kiddies items, fashion items for men,
          women, and children; cool gadgets, computers, groceries, automobile
          parts, and more on the go.
        </p>
      </div>
      <div className="mt-10 md:mt-0 w-full md:w-[48%]">
        <button
          type="button"
          className="w-full h-10 bg-red-600 text-white rounded-tl-lg text-left pl-5 mb-5 text-xl font-bold"
        >
          HOT SALE!!!
        </button>
        <div className="md:flex md:justify-between">
          {hotSale.map((value) => (
            <div
              className="flex-col border-2 p-1 rounded-md drop-shadow-lg hover:shadow-slate-600 hover:border-sky-500 hover:border-2 hover:shadow-lg bg-white hover:cursor-pointer mb-10 md:mb-0"
              key={value.id}
            >
              <img src={value.img} alt="product one" className="w-full mb-3" />
              <div className="w-full text-lg md:text-sm">
                {value.productTitle}
              </div>
              <p className="font-bold ">{value.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sale;
