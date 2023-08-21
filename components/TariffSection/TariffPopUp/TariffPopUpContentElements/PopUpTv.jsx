/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

export const PopUpTv = ({ channelsCount, channelsLink }) => {
  if (!channelsCount) return null;

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={channelsLink}
      className="font-medium shadow-lg flex items-center rounded-md py-3 pl-1 pr-3 w-40 sm:w-32 relative overflow-hidden group cursor-pointer select-none hover:bg-slate-50 hover:scale-110 transition-all"
    >
      <img className="w-10 mr-2" src="/donntetworkTv.gif" alt="img" />

      <div>
        <span className="block text-sm text-gray-700 ">Каналов:</span>
        <span className="block font-bold text-sm text-gray-800 ">
          {channelsCount}
        </span>
      </div>
    </a>
  );
};
