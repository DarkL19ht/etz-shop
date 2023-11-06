import React from 'react';

function Nav() {
  return (
    <nav className="flex justify-between border-b-2 pb-5 mb-5">
      <img
        src="../src/assets/Etranzact_Logo.png"
        alt="eTranzact logo"
        className="h-5 md:h-10 w-42 md:w-52"
      />
      <div className="flex justify-between w-6/12 md:w-2/12 px-2 md:px-0 text-xs md:text-normal text-white font-semibold">
        <button
          type="button"
          className="bg-sky-500 w-16 md:w-24 py-2 md:py-0 rounded-lg"
        >
          LOGIN
        </button>
        <button
          type="button"
          className="bg-sky-500 w-20 md:w-28 py-2 md:py-0 rounded-lg"
        >
          REGISTER
        </button>
      </div>
    </nav>
  );
}

export default Nav;
