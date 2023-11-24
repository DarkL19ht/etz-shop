import { useState } from 'react';
import Modal from '@/components/ui/Modal';
import { Link } from 'react-router-dom';

function Nav() {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <nav className="mb-5 flex justify-between w-[89%] border-b-2 pb-5">
        <img
          src="../src/assets/Etranzact_Logo.png"
          alt="eTranzact logo"
          className="w-42 h-5 md:h-10 md:w-52"
        />
        <div className="md:text-normal gap-3 flex w-6/12 justify-between px-2 text-xs font-semibold text-white md:w-2/12 md:px-0">
          <button
            type="button"
            className="w-16 rounded-lg bg-sky-500 py-2 md:w-24 md:py-0"
            onClick={() => setOpenModal(true)}
          >
            LOGIN
          </button>
          <button
            type="button"
            className="w-20 rounded-lg bg-sky-500 py-2 md:w-28 md:py-0"
          >
            REGISTER
          </button>
          <button
            type="button"
            className="w-20 rounded-lg bg-sky-500 py-2 md:w-28 md:py-0"
            
          >
            <Link to ='/products'>PRODUCT</Link>
          </button>{' '}
          <button
            type="button"
            className="w-20 rounded-lg bg-sky-500 py-2 md:w-28 md:py-0"
          >
            <Link to ='/category'>CATEGORY</Link>
          </button>
        </div>
      </nav>
      <Modal title="Jane" isOpen={openModal} closeModal={handleCloseModal}>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Your payment has been successfully submitted. We’ve sent you an
            email with all of the details of your order.
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
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Nav;
