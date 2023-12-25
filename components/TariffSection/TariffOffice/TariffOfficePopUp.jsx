import Image from "next/image";
import { useEffect, useState } from "react";
import PhoneForm from "../../PhoneForm/PhoneForm";
import ErrorAlert from "../../ErrorAlert/ErrorAlert";
import { FaTimes } from "react-icons/fa";

export const TariffOfficePopUp = ({
  isOpen,
  setIsOpen,
  setUserNumber,
  setIsSuccess,
}) => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "Escape":
          setIsOpen(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "visible";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="w-full h-screen flex items-center justify-center fixed top-0 left-0 z-[99999] backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-[90%]  max-h-[90%] overflow-y-auto sm:w-[500px] rounded-[12px] bg-white p-8 shadow-lg relative min-h-[300px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="bg-red-400 z-20 p-2 absolute top-2 right-2 rounded-lg text-white active:scale-90 active:bg-red-500"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>

            <div className="text-center mb-2">
              <div className="text-3xl font-bold py-2">Офис</div>

              <div className="text-lg font-semibold">
                Все тарифы индивидуальны.
              </div>

              <div className="text-lg ">
                Оставьте заявку и мы перезвоним вам!
              </div>
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
          </div>
        </div>
      )}
    </>
  );
};
