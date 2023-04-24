import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import PhoneForm from "../../PhoneForm/PhoneForm";
import ErrorAlert from "../../ErrorAlert/ErrorAlert";

export const TariffOfficePopUp = ({
  isOpen,
  setIsOpen,
  setUserNumber,
  setIsSuccess,
}) => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-screen flex items-center justify-center fixed top-0 left-0 z-[99999] backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="w-[90%] sm:w-[500px] rounded-[12px] bg-white p-8 shadow-lg relative min-h-[300px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xl">
              Все тарифы индивидуальны, без учета трафика, укажите желаемую
              скорость в заявке ООО &quot;Донтехсвязь&quot;также предлагает
              услугу &quot;Фиксированный IP-адрес&quot;
            </div>

            <div className="w-[80%] mx-auto min-h-[200px] relative">
              <Image
                layout="fill"
                draggable="false"
                objectFit="contain"
                src="/handsShake.png"
                alt="handsShake"
              />
            </div>

            {!isError ? (
              <PhoneForm
                setIsError={setIsError}
                setUserNumber={setUserNumber}
                setIsSuccess={setIsSuccess}
                setIsOpen={setIsOpen}
                userFrom="Офисная форма"
              />
            ) : (
              <ErrorAlert setIsError={setIsError} />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
