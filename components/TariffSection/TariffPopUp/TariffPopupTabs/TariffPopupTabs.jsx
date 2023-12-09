import React, { useState } from "react";
import { classNames } from "../../../../utils/classNames";
import PhoneForm from "../../../PhoneForm/PhoneForm";
import { PopUpComboToggler } from "../TariffPopUpContentElements/PopUpComboToggler";
import { PopUpTv } from "../TariffPopUpContentElements/PopUpTv";
import { PopUpInternet } from "../TariffPopUpContentElements/PopUpInternet";
import ErrorAlert from "../../../ErrorAlert/ErrorAlert";
import { getUserFromTariffHTMLString } from "../../../../utils/variables";

export const TariffPopupTabs = ({ tariffData, ...props }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="sm:w-[550px] p-3 sm:p-6 box-border">
      <div className="text-center text-3xl font-bold mb-3 py-2">
        {tariffData[0].tariffName}
      </div>

      <div className="flex space-x-1 rounded-xl bg-blue-600/20 p-1">
        {tariffData.map(({ title }, index) => {
          return (
            <TariffTab
              key={index}
              index={index}
              selected={activeTab === index}
              setActiveTab={setActiveTab}
            >
              {title}
            </TariffTab>
          );
        })}
      </div>

      <TariffTabContent
        tariffName={tariffData[0].tariffName}
        tariff={tariffData[activeTab]}
        {...props}
      />
    </div>
  );
};

const TariffTab = ({ selected, children, setActiveTab, index }) => {
  const setActive = () => {
    setActiveTab(index);
  };

  console.log();

  return (
    <button
      onClick={setActive}
      className={classNames(
        "w-full rounded-lg py-2.5 text-sm font-medium sm:text-base sm:font-semibold leading-5 text-blue-700",
        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
        selected
          ? " bg-white shadow"
          : " text-blue-100 hover:bg-white/[0.12] hover:text-white"
      )}
    >
      {children}
    </button>
  );
};

const TariffTabContent = ({ tariff, tariffName, ...props }) => {
  const [isError, setIsError] = useState(false);
  const [isCombo, setIsCombo] = useState(true);

  if (!Boolean(tariff)) return null;

  return (
    <div className={"rounded-xl bg-white p-3"}>
      {/* mini cards */}
      <div className="flex flex-row-reverse justify-between items-center">
        {/* price */}
        <div className="text-3xl sm:text-5xl flex flex-col items-end font-bold">
          {isCombo ? tariff.comboPrice : tariff.price}
          <span className="text-sm font-normal">руб/мес</span>
        </div>

        {/* icons and properties */}
        <div className="inline-flex flex-col sm:flex-row sm-flex mb-3 sm:mb-5">
          <PopUpInternet
            internetSpeed={
              isCombo ? tariff.comboInternetSpeed : tariff.internetSpeed
            }
          />

          <PopUpTv
            channelsLink={tariff.tvUrl}
            channelsCount={
              isCombo ? tariff.comboChannelsCount : tariff.channelsCount
            }
          />
        </div>
      </div>

      <PopUpComboToggler isCombo={isCombo} setIsCombo={setIsCombo} />

      {!isError ? (
        <PhoneForm
          {...props}
          setIsError={setIsError}
          userFrom={getUserFromTariffHTMLString(
            tariffName,
            tariff.title,
            isCombo
          )}
        />
      ) : (
        <ErrorAlert setIsError={setIsError} />
      )}
    </div>
  );
};
