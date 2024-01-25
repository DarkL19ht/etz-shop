import { Link } from "react-router-dom";
import { useState } from "react";
import SubmitButton from "@components/ui/SubmitButton";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

function Nav() {
  const [openModal, setOpenModal] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const handleCloseModal = () => setOpenModal(false);

  const checking = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 4000);
  };

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
          <Button title="REGISTER" variant="primary" disabled />

          <Link
            type="button"
            className="w-16 rounded-lg bg-sky-500 py-2 md:w-24 md:py-0"
            to="/category"
          >
            CATEGORY
          </Link>
          <Link
            type="button"
            className="w-20 rounded-lg bg-sky-500 py-2 md:w-28 md:py-0"
            to="/products"
          >
            PRODUCT
          </Link>
        </div>
      </nav>
      <Modal title="etranzact" isOpen={openModal} closeModal={handleCloseModal}>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Your payment has been successfully submitted. We’ve sent you an
            email with all of the details of your order.
          </p>
        </div>

        <div className="mt-4 flex justify-between gap-2">
          <SubmitButton
            variant="primary"
            title="Submit"
            size="sm"
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
