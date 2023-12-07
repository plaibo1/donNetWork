import { PopUpContent } from "./PopUpContent";

export const TariffPopUp = ({ tariffs, ...props }) => {
  if (!props.isOpen) return null;

  return (
    <div
      className="w-full h-screen flex items-center justify-center fixed top-0 left-0 z-[99999] backdrop-blur-md"
      onClick={() => props.setIsOpen(false)}
    >
      <PopUpContent tariffs={tariffs} {...props} />
    </div>
  );
};
