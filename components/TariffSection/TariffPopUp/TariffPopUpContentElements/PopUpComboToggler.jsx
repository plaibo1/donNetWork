import React from "react";

export const PopUpComboToggler = ({ isCombo, setIsCombo }) => {
  return (
    <div
      className="border border-slate-200 inline-flex items-center p-2 rounded-xl cursor-pointer select-none hover:bg-slate-100 mb-4"
      onClick={() => setIsCombo((c) => !c)}
    >
      <button
        className={`${
          isCombo ? "bg-baseColor" : "bg-baseColor-40"
        } h-[28px] w-[55px] rounded-2xl`}
      >
        <div
          className={`${
            isCombo ? "translate-x-7" : "translate-x-[3px]"
          } h-[24px] w-[24px] rounded-full bg-white transition`}
        ></div>
      </button>

      <span className="mx-2 min-w-[90px] text-center text-base font-bold tracking-tight">
        {isCombo ? (
          <span className="inline-flex items-center">Комбо ✅</span>
        ) : (
          <span className="inline-flex items-center">+ Комбо 🔥</span>
        )}
      </span>
    </div>
  );
};
