import { AnimatePresence, motion } from "framer-motion";

import { PopUpContent } from "./PopUpContent";

export const TariffPopUp = ({ tariffs, ...props }) => {
  return (
    <AnimatePresence>
      {props.isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-screen flex items-center justify-center fixed top-0 left-0 z-[99999] backdrop-blur-md"
          onClick={() => props.setIsOpen(false)}
        >
          <PopUpContent tariffs={tariffs} {...props} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
