import Image from "next/image";
import React, { useState } from "react";
import { TariffOfficePopUp } from "./TariffOfficePopUp";
import Modal from "../../Modal/Modal";
import SuccessModal from "../../SuccessModal/SuccessModal";

export const TariffOffice = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // ModalSuccess component
  const [userNumber, setUserNumber] = useState(false); // user number from phoneForm

  return (
    <>
      <div className="box-border shadow-md rounded-2xl overflow-hidden relative mb-6 sm:mb-0 z-10 bg-white flex justify-between flex-col">
        <div className="z-10 p-6">
          <span className="block text-xl sm:text-2xl font-semibold mb-3 sm:mb-5">
            Офис
          </span>
        </div>

        {/* image */}
        <div className="h-[235px] relative -z-10">
          <div className="h-72 w-72 rotate-x absolute -right-8">
            <Image
              src="/tariffOffice.png"
              width={288}
              height={288}
              objectFit="contain"
              alt="донтехсвязь tariff image"
              blurDataURL="/tariffOffice-thumbnail.png"
              placeholder="blur"
            />
          </div>
        </div>

        <div className="bg-slate-50 px-4 sm:px-6 py-7">
          <div className="h-[110px] lg:h-20">Интернет для бизнеса</div>

          <span className="text-5xl font-bold inline-flex items-end mb-5">
            <span className="text-3xl mr-2">от</span>1000
            <span className="text-base font-semibold ml-1">руб/мес</span>
          </span>

          <button
            onClick={() => setIsOpen(true)}
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                  text-base font-medium rounded-md text-baseColor bg-indigo-100 hover:bg-indigo-200 md:text-lg md:px-10"
          >
            Выбрать &quot;Офис&quot;
          </button>
        </div>
      </div>

      <TariffOfficePopUp
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setIsSuccess={setIsSuccess}
        setUserNumber={setUserNumber}
      />

      <Modal modalStatus={isSuccess} setModalStatus={setIsSuccess}>
        {isSuccess && (
          <SuccessModal setIsSuccess={setIsSuccess} userNumber={userNumber} />
        )}
      </Modal>
    </>
  );
};
