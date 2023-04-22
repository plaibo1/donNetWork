import { useEffect } from "react";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";

export const PopUpContent = ({ tariffs }) => {
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
          {tariffs.map((tariff, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div className="bg-slate-400 mb-2">price: {tariff.price}</div>
              <div className="bg-slate-400 mb-2">
                internetSpeed: {tariff.internetSpeed}
              </div>
              <div className="bg-slate-400 mb-2">
                channelsCount: {tariff.channelsCount}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </motion.div>
  );
};
