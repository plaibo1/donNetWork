/* eslint-disable @next/next/no-img-element */
import React from "react";

export const PopUpInternet = ({ internetSpeed }) => {
  return (
    <div className="font-medium shadow-lg flex items-center rounded-md mr-5 pl-1 py-3 pr-3 w-40">
      <img className="w-10 mr-2" src="/donnetworkNet.gif" alt="img" />
      <div>
        <span className="block text-sm text-gray-700">Скорость:</span>
        <span className="block font-bold text-sm text-gray-800">
          {internetSpeed} Мбит/сек
        </span>
      </div>
    </div>
  );
};
