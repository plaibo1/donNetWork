import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import PhoneForm from "../../PhoneForm/PhoneForm";
import { getUserFromTariffHTMLString } from "../../../utils/variables";
import ErrorAlert from "../../ErrorAlert/ErrorAlert";
import { BiRuble } from "react-icons/bi";
import { PopUpComboToggler } from "./TariffPopUpContentElements/PopUpComboToggler";
import { PopUpTv } from "./TariffPopUpContentElements/PopUpTv";
import { PopUpInternet } from "./TariffPopUpContentElements/PopUpInternet";
import { FaTimes } from "react-icons/fa";

export const PopUpContent = ({ tariffs, ...props }) => {
  const { setIsOpen } = props;
  const [isError, setIsError] = useState(false);
  const [isCombo, setIsCombo] = useState(true);

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

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      className="w-[90%] sm:w-[550px] max-h-[90%] overflow-y-auto rounded-[12px] bg-white p-3 shadow-lg relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="bg-red-400 z-20 p-2 absolute top-2 right-2 rounded-lg text-white active:scale-90 active:bg-red-500"
        onClick={() => setIsOpen(false)}
      >
        <FaTimes />
      </button>

      <Tab.Group>
        <div className="text-center text-3xl font-bold mb-3 py-2">
          {tariffs[0].relationTo.fields.tariffName}
        </div>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-600/20 p-1">
          {tariffs.map(({ title: category }) => (
            <Tab
              key={category}
              onClick={() => setIsCombo(true)}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium sm:text-base sm:font-semibold leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-2">
          {tariffs.map((tariff, idx) => {
            return (
              <Tab.Panel
                key={idx}
                className={classNames("rounded-xl bg-white p-3")}
              >
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
                        isCombo
                          ? tariff.comboInternetSpeed
                          : tariff.internetSpeed
                      }
                    />

                    <PopUpTv
                      channelsLink={tariff.tvUrl}
                      channelsCount={
                        isCombo
                          ? tariff.comboChannelsCount
                          : tariff.channelsCount
                      }
                    />
                  </div>
                </div>

                <PopUpComboToggler isCombo={isCombo} setIsCombo={setIsCombo} />

                {!isError ? (
                  <PhoneForm
                    setIsError={setIsError}
                    {...props}
                    userFrom={getUserFromTariffHTMLString(
                      tariffs[0].relationTo.fields.tariffName,
                      tariff.title,
                      isCombo
                    )}
                  />
                ) : (
                  <ErrorAlert setIsError={setIsError} />
                )}
              </Tab.Panel>
            );
          })}
        </Tab.Panels>
      </Tab.Group>
    </motion.div>
  );
};
