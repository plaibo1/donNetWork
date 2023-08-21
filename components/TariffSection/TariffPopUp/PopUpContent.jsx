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

export const PopUpContent = ({ tariffs, ...props }) => {
  const [isError, setIsError] = useState(false);
  const [isCombo, setIsCombo] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      className="w-[90%] sm:w-[500px] rounded-[12px] bg-white p-3 shadow-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <Tab.Group>
        <div className="text-center text-2xl font-semibold mb-3 py-2">
          {tariffs[0].relationTo.fields.tariffName}
        </div>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {tariffs.map(({ title: category }) => (
            <Tab
              key={category}
              onClick={() => setIsCombo(true)}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
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
            console.log(tariff);
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
