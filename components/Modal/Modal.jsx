import React from "react";
import { FaTimes } from "react-icons/fa";
import s from "./modal.module.scss";

const Modal = ({ modalStatus, setModalStatus, children }) => {
  return (
    <div
      className={modalStatus ? `${s.modal} ${s.active}` : `${s.modal}`}
      onMouseDown={() => setModalStatus(false)}
    >
      <div
        className={
          modalStatus
            ? `${s.modal__content} ${s.active} scroll`
            : `${s.modal__content} scroll`
        }
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          className="bg-red-400 z-20 p-2 absolute top-2 right-2 rounded-lg text-white active:scale-90 active:bg-red-500"
          onClick={() => setModalStatus(false)}
        >
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
