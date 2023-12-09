import { useEffect } from "react";
import { motion } from "framer-motion";

import { FaTimes } from "react-icons/fa";
import { TariffPopupTabs } from "./TariffPopupTabs/TariffPopupTabs";

export const PopUpContent = ({ tariffData, ...props }) => {
  const { setIsOpen } = props;

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "Escape":
          setIsOpen(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsOpen]);

  return <TariffPopupTabs tariffData={tariffData} {...props} />;
};
