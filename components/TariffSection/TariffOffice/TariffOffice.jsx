import Image from "next/image";
import React, { useState } from "react";
import { TariffOfficePopUp } from "./TariffOfficePopUp";

export const TariffOffice = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              src={"/test.png"}
              layout="fill"
              objectFit="contain"
              alt="донтехсвязь tariff image"
            />
          </div>
        </div>

        <div className="bg-slate-50 px-4 sm:px-6 py-7">
          <div className="h-[110px] lg:h-20">Здесь описание офисов</div>

          <span className="text-5xl font-bold inline-flex items-end mb-5">
            <span className="text-3xl mr-2">от</span>1
            <span className="text-base font-semibold ml-1">руб/мес</span>
          </span>

          <button
            onClick={() => setIsOpen(true)}
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                  text-base font-medium rounded-md text-baseColor bg-indigo-100 hover:bg-indigo-200 md:text-lg md:px-10"
          >
            Выбрать &quot;{"tariff.tariffName"}&quot;
          </button>
        </div>
      </div>

      <TariffOfficePopUp setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};
