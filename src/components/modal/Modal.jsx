/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function Modal({ closeModal, children }) {
  return (
    <div className="bg-black/50 z-10 fixed inset-0" onClick={closeModal}>
      <div className="flex items-center justify-center h-full">
        <div className="flex items-end flex-col bg-white w-1/2 p-5">
          <button onClick={closeModal}> x </button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
