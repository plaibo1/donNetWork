import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import PhoneForm from "../../PhoneForm/PhoneForm";
import { getUserFromTariffHTMLString } from "../../../utils/variables";
import ErrorAlert from "../../ErrorAlert/ErrorAlert";

export const PopUpContent = ({ tariffs, ...props }) => {
  console.log(
    "🚀 ~ file: PopUpContent.jsx:9 ~ PopUpContent ~ tariffs:",
    tariffs
  );
  const [isError, setIsError] = useState(false);
  const [addTv, setAddTv] = useState(false);

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
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
                  <div className="p-3 rounded-lg border border-slate-300">
                    Цена: {addTv ? tariff.price + tariff.plusTv : tariff.price}
                  </div>
                  <div className="p-3 rounded-lg border border-slate-300">
                    Скорость: {tariff.internetSpeed}
                  </div>
                  <div className="p-3 rounded-lg border border-slate-300">
                    Каналов: {tariff.channelsCount}
                  </div>

                  <div
                    onClick={() => setAddTv((s) => !s)}
                    className={`p-3 rounded-lg border ${
                      addTv
                        ? "bg-baseColor opacity-100 text-white"
                        : "bg-white opacity-50"
                    } border-slate-300 cursor-pointer hover:border-baseColor hover:opacity-100`}
                  >
                    Добавить тв (+{tariff.plusTv}руб)
                  </div>
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
