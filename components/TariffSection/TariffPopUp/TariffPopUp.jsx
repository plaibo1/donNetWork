import Modal from "../../Modal/Modal";
import { PopUpContent } from "./PopUpContent";

export const TariffPopUp = ({ tariffData, ...props }) => {
  if (!props.isOpen) return null;

  return (
    <Modal modalStatus={props.isOpen} setModalStatus={props.setIsOpen}>
      <PopUpContent tariffData={tariffData} {...props} />
    </Modal>
  );
};
