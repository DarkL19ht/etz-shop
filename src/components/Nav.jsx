import { useState } from 'react';
import Modal from '@/components/ui/Modal';

function Nav() {
  const [openModal, setOpenModal] = useState(false)
  const handleCloseModal= () => setOpenModal(false)

  return (
    <>
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
            onClick={()=> setOpenModal(true)}
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
      <Modal title="Jane" isOpen={openModal} closeModal={handleCloseModal} >
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Your payment has been successfully submitted. We’ve sent you
            an email with all of the details of your order.
          </p>
        </div>

                <div className="mt-4 flex justify-between">
                  <button
                    type="button"
                    className=" justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={null}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className=" justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={handleCloseModal}
                  >
                    Submit
                  </button>
                </div>
      </Modal>
    </>
  );
}

export default Nav;
