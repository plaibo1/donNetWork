import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import PhoneForm from "../../PhoneForm/PhoneForm";
import { getUserFromTariffHTMLString } from "../../../utils/variables";
import ErrorAlert from "../../ErrorAlert/ErrorAlert";
import { BiRuble } from "react-icons/bi";

export const PopUpContent = ({ tariffs, ...props }) => {
  const [isError, setIsError] = useState(false);
  const [addTv, setAddTv] = useState(true);

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
        <div className="text-center text-2xl font-semibold mb-3">
          {tariffs[0].relationTo.fields.tariffName}
        </div>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {tariffs.map(({ title: category }) => (
            <Tab
              key={category}
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
            return (
              <Tab.Panel
                key={idx}
                className={classNames("rounded-xl bg-white p-3")}
              >
                {/* mini cards */}
                <div className="flex flex-row-reverse justify-between items-center">
                  {/* price */}
                  <div className="text-3xl sm:text-5xl flex flex-col items-end font-bold">
                    {addTv ? tariff.price + tariff.plusTv : tariff.price}{" "}
                    <span className="text-sm font-normal">руб/мес</span>
                  </div>

                  {/* icons and properties */}
                  <div className="inline-flex flex-col sm:flex-row sm-flex mb-3 sm:mb-5">
                    <div className="font-medium shadow-lg flex items-center rounded-md mr-5 pl-1 py-3 pr-3 w-40">
                      <img
                        className="w-10 mr-2"
                        src="/donnetworkNet.gif"
                        alt="img"
                      />
                      <div>
                        <span className="block text-sm text-gray-700">
                          Скорость:
                        </span>
                        <span className="block font-bold text-sm text-gray-800">
                          {tariff.internetSpeed} Мбит/сек
                        </span>
                      </div>
                    </div>

                    <div className="font-medium shadow-lg flex items-center rounded-md py-3 pl-1 pr-3 w-40 sm:w-32 relative overflow-hidden">
                      {!addTv && (
                        <>
                          <div className="w-[120%] h-[2px] bg-slate-300 absolute rotate-[25deg] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                          <div className="w-[120%] h-[2px] bg-slate-300 absolute rotate-[-25deg] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        </>
                      )}

                      <img
                        className="w-10 mr-2"
                        src="/donntetworkTv.gif"
                        alt="img"
                      />
                      <div>
                        <span className="block text-sm text-gray-700">
                          Каналов:
                        </span>
                        <span className="block font-bold text-sm text-gray-800">
                          {tariff.channelsCount}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="border border-slate-200 inline-flex items-center p-2 rounded-xl cursor-pointer select-none hover:bg-slate-100 mb-4"
                  onClick={() => setAddTv((s) => !s)}
                >
                  <button
                    className={`${
                      addTv ? "bg-baseColor" : "bg-baseColor-40"
                    } h-[28px] w-[55px] rounded-2xl`}
                  >
                    <div
                      className={`${
                        addTv ? "translate-x-7" : "translate-x-[3px]"
                      } h-[24px] w-[24px] rounded-full bg-white transition`}
                    ></div>
                  </button>

                  <span className="mx-2 min-w-[145px] text-center text-base">
                    {addTv ? (
                      <span className="inline-flex items-center">
                        Убрать ТВ -{tariff.plusTv} <BiRuble />
                      </span>
                    ) : (
                      <span className="inline-flex items-center">
                        Добавить ТВ +{tariff.plusTv} <BiRuble />
                      </span>
                    )}
                  </span>
                </div>

                {!isError ? (
                  <PhoneForm
                    setIsError={setIsError}
                    {...props}
                    userFrom={getUserFromTariffHTMLString(
                      tariffs[0].relationTo.fields.tariffName,
                      tariff.title
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
