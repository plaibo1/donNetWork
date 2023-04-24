import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import FormPopUp from "../FormPopUp/FormPopUp";
import SuccessModal from "../SuccessModal/SuccessModal";

const GlobalModalButton = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // ModalSuccess component
  const [userNumber, setUserNumber] = useState(false); // user number from phoneForm

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <>
      {React.cloneElement(children, { onClick: () => setIsOpen(true) })}

      <Modal modalStatus={isOpen} setModalStatus={setIsOpen}>
        <FormPopUp
          setIsOpen={setIsOpen}
          setIsSuccess={setIsSuccess}
          setUserNumber={setUserNumber}
        />
      </Modal>

      <Modal modalStatus={isSuccess} setModalStatus={setIsSuccess}>
        {isSuccess && (
          <SuccessModal setIsSuccess={setIsSuccess} userNumber={userNumber} />
        )}
      </Modal>
    </>
  );
};

export default GlobalModalButton;
