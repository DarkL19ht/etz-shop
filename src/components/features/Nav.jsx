/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

function Nav() {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <nav className="mb-5 flex justify-between border-b-2 pb-5">
        <img
          src="../src/assets/Etranzact_Logo.png"
          alt="eTranzact logo"
          className="w-42 h-5 md:h-10 md:w-52"
        />
        <div className="md:text-normal flex w-6/12 justify-between gap-2 px-2 text-xs font-semibold text-white md:w-2/12 md:px-0">
          <button
            type="button"
            className="w-16 rounded-lg bg-sky-500 py-2 md:w-24 md:py-0"
            onClick={() => setOpenModal(true)}
          >
            LOGIN
          </button>
          <Button title="REGISTER" variant="secondary" size="md" />
          <Link
            type="button"
            className="w-20 rounded-lg bg-sky-500 py-2 md:w-28 md:py-0"
            to="/category"
          >
            Category
          </Link>
          <Link
            type="button"
            className="w-20 rounded-lg bg-sky-500 py-2 md:w-28 md:py-0"
            to="/products"
          >
            Product
          </Link>
        </div>
      </nav>
      <Modal title="" isOpen={openModal} closeModal={handleCloseModal}>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Your payment has been successfully submitted. We’ve sent you an
            email with all of the details of your order.
          </p>
        </div>

        <div className="mt-4">
          <button
            type="button"
            className=" justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={null}
          >
            Submit
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Nav;
