import sort from "@/assets/sortVector.png";
import date from "@/assets/dateVector.png";
import catalog from "@/data/catalog";

const Catalog = () => {
  return (
    <>
      <div className="mt-16 border-b-2 border-sky-500 pb-1 md:mt-10 md:flex md:justify-between ">
        <p
          className="text-center text-4xl font-bold md:text-left md:text-lg"
          autoCapitalize="characters"
        >
          Product Catalog
        </p>
        <div className="mt-3 flex w-5/12 justify-between px-3 pt-2 md:w-2/12 md:px-0 md:pt-0 lg:w-1/12">
          <div className="flex justify-between md:w-2/5">
            <img
              src={sort}
              alt="sort vector"
              className="mr-1 h-[60%] w-[40%] pt-1 md:mr-0"
            />
            <p className=" font-semibold md:font-normal">Sort</p>
          </div>
          <div className="flex w-2/5 justify-between">
            <p className=" font-bold">Date</p>
            <img
              src={date}
              alt="date vector"
              className="mt-[7%] h-[50%] w-[30%] pt-1"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 w-[100%] md:flex md:justify-between">
        {catalog.map((item) => {
          return (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
              {item.id < 5 && (
                <div
                  className={`${
                    item.bestSeller ? "border-2 border-red-600" : ""
                  } mb-10 w-full flex-col rounded-md border-2 bg-white p-1 drop-shadow-lg hover:cursor-pointer hover:border-2 hover:border-sky-500 hover:shadow-lg hover:shadow-slate-600 md:mb-0 md:w-[22.5%]`}
                  key={item.id}
                >
                  {item.bestSeller && (
                    <button
                      type="button"
                      className="absolute right-0 top-0 h-7 w-24 rounded-bl-lg bg-red-600 font-bold text-white "
                    >
                      SHOP NOW
                    </button>
                  )}
                  <img
                    src={item.img}
                    alt="product one"
                    className="mb-3 w-full"
                  />
                  <div className="w-full">{item.productTitle}</div>
                  <p className="font-bold ">{item.price}</p>
                </div>
              )}
            </>
          );
        })}
      </div>
      <div className="mt-5 w-[100%] md:flex md:justify-between">
        {catalog.map((item) => {
          return (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
              {item.id > 4 && (
                <div
                  className={`${
                    item.bestSeller ? "border-2 border-red-600" : ""
                  } mb-10 w-full flex-col rounded-md border-2 bg-white p-1 drop-shadow-lg hover:cursor-pointer hover:border-2 hover:border-sky-500 hover:shadow-lg hover:shadow-slate-600 md:mb-0 md:w-[22.5%]`}
                  key={item.id}
                >
                  {item.bestSeller && (
                    <button
                      type="button"
                      className="absolute right-0 top-0 h-7 w-24 rounded-bl-lg bg-red-600 font-bold text-white "
                    >
                      SHOP NOW
                    </button>
                  )}
                  <img
                    src={item.img}
                    alt="product one"
                    className="mb-3 w-full"
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
