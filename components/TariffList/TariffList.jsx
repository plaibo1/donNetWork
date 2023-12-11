import React, { useState } from "react";
import { PopUpInternet } from "../TariffSection/TariffPopUp/TariffPopUpContentElements/PopUpInternet";
import { PopUpTv } from "../TariffSection/TariffPopUp/TariffPopUpContentElements/PopUpTv";
import { PopUpComboToggler } from "../TariffSection/TariffPopUp/TariffPopUpContentElements/PopUpComboToggler";
import GlobalModalButton from "../GlobalModalButton/GlobalModalButton";
import { getUserFromTariffHTMLString } from "../../utils/variables";

export const TariffList = ({ tariffs }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {tariffs.map((tariff, index) => {
        return <Tariff key={index} tariff={tariff} />;
      })}
    </div>
  );
};

const Tariff = ({ tariff }) => {
  const {
    channelsCount,
    comboChannelsCount,
    comboInternetSpeed,
    comboPrice,
    internetSpeed,
    tariffName,
    // order, // deprecated
    // plusTv, // deprecated
    price,
    title,
    tvUrl,
  } = tariff;

  const [isCombo, setIsCombo] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const [setShowNumberForm] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
      <div className="border border-slate-300 rounded-xl p-6">
        <h3 className="text-3xl font-bold mb-3 py-2">{title}</h3>

        <div className="rounded-xl bg-white mb-4">
          {/* mini cards */}
          <div className="flex flex-row-reverse justify-between items-center">
            {/* price */}
            <div className="text-3xl sm:text-5xl flex flex-col items-end font-bold">
              {isCombo ? comboPrice : price}
              <span className="text-sm font-normal">руб/мес</span>
            </div>

            {/* icons and properties */}
            <div className="inline-flex flex-col sm:flex-row sm-flex mb-3 sm:mb-5 flex-wrap">
              <PopUpInternet
                internetSpeed={isCombo ? comboInternetSpeed : internetSpeed}
              />

              <PopUpTv
                channelsLink={tvUrl}
                channelsCount={isCombo ? comboChannelsCount : channelsCount}
              />
            </div>
          </div>

          <PopUpComboToggler isCombo={isCombo} setIsCombo={setIsCombo} />
        </div>

        <GlobalModalButton
          fromTariffPath={getUserFromTariffHTMLString(
            tariffName,
            tariff.title,
            isCombo
          )}
        >
          <button
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                      text-base font-medium rounded-md text-baseColor bg-indigo-100 hover:bg-indigo-200 md:text-lg md:px-10"
          >
            Выбрать
          </button>
        </GlobalModalButton>
      </div>
    </>
  );
};
