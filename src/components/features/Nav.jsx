import { Link } from "react-router-dom";
import { useState } from "react";
import SubmitButton from "@components/ui/SubmitButton";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import logo from "@/assets/logo.svg";

function Nav(active) {
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleCloseModal = () => setOpenModal(false);

  const checking = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 4000);
    // alert("You have been added to the waitlist!")
  };

  return (
    <>
      <nav className="fixed z-10 -ml-[10%] -mt-5 mb-5 flex w-full justify-between bg-white pb-5 pl-[9.5%] pr-[10.3%] pt-10">
        <Link
          type="button"
          className="w-16 rounded-lg text-base font-semibold text-black hover:w-60 md:h-5 md:w-52 "
          to="/"
        >
          <img
            src={[logo]}
            alt="Critiview logo"
            className="w-42 h-5 md:h-12 md:w-52 md:hover:h-14"
          />
        </Link>

        <div className="md:text-normal flex w-6/12 justify-between gap-2 px-2 text-xs font-semibold text-white md:w-2/12 md:px-0">
          <Link
            type="button"
            className={active === "active" ?  "underline decoration-wavy w-16 rounded-lg  py-2 text-base font-normal text-black md:w-24 md:py-3" : "w-16 rounded-lg  py-2 text-base font-normal text-black md:w-24 md:py-3 " }
            to="/aboutUs"
          >
            About us
          </Link>
          
          <Button
            title="Join Waitlist"
            size="lg"
            variant="secondary"
            onClick={() => setOpenModal(true)}
          />
          
        </div>
      </nav>
      <Modal title="" isOpen={openModal} closeModal={handleCloseModal}>
        <div className="mt-2">
          <img src={[logo]} alt="Logo" className="-mt-4" />
          <input
            type="text"
            className="mt-5 w-full rounded-md border-2 border-slate-500 p-2 focus:outline-none"
            placeholder="Input email address"
          />
        </div>

        <div className="mt-4 flex justify-between gap-2">
          <SubmitButton
            variant="secondary"
            title="Submit"
            size="md"
            fullWidth
            loadingText="Please Wait..."
            isLoading={isLoading}
            onClick={checking}
          />
        </div>
      </Modal>
    </>
  );
}

export default Nav;
