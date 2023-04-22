import React, { useState } from "react";
import Image from "next/image";
import { BsLightningCharge } from "react-icons/bs";
import { GrChannel } from "react-icons/gr";
import { TariffPopUp } from "./TariffPopUp/TariffPopUp";
export const TariffCard = ({ tariff }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentTariffsData = tariff.relationTo.map(({ fields }) => fields);

  return (
    <>
      <div className="box-border shadow-md rounded-2xl overflow-hidden relative mb-6 sm:mb-0 z-10 bg-white">
        <div className="z-10 p-6">
          <span className="block text-xl sm:text-2xl font-semibold mb-3 sm:mb-5">
            {tariff.tariffName}
          </span>

          <span className="flex-col flex items-start">
            <div className="bg-white shadow-sm px-3 rounded-lg inline-flex items-center mb-2">
              <BsLightningCharge className="mr-1" />
              Скорость от:
              <span className="font-semibold ml-1">
                {tariff.minimalInternetSpeed ? tariff.minimalInternetSpeed : 50}{" "}
                Мбит/сек
              </span>
            </div>
            <div className="bg-white shadow-sm px-3 rounded-lg items-center inline-flex">
              <GrChannel className="mr-1" />
              ТВ Каналов от:
              <span className="font-semibold ml-1">
                {tariff.minimalTvChannels ? tariff.minimalTvChannels : 100}
              </span>
            </div>
          </span>
        </div>

        {/* image */}
        <div className="h-[235px] relative -z-10">
          <div className="h-72 w-72 rotate-x absolute -bottom-0 -right-8">
            <Image
              src={"/test.png"}
              layout="fill"
              objectFit="contain"
              alt="донтехсвязь tariff image"
            />
          </div>
        </div>

        <div className="bg-slate-50 px-4 sm:px-6 py-7">
          <div className="h-[110px] lg:h-20">{tariff.description}</div>

          <span className="text-5xl font-bold inline-flex items-end mb-5">
            <span className="text-3xl mr-2">от</span>
            {tariff.minimalPrice}
            <span className="text-base font-semibold ml-1">руб/мес</span>
          </span>

          <button
            onClick={() => setIsOpen(true)}
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                      text-base font-medium rounded-md text-baseColor bg-indigo-100 hover:bg-indigo-200 md:text-lg md:px-10"
          >
            Выбрать &quot;{tariff.tariffName}&quot;
          </button>
        </div>
      </div>

      <TariffPopUp
        tariffs={currentTariffsData}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    </>
  );
};
