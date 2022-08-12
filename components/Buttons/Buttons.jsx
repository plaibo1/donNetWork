import React from 'react'

export const ButtonBase = ({ btnText, click}) => {
  return (
    <button
      onClick={click}
      className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                        text-base font-medium rounded-md text-white bg-baseColor hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
    >
      {btnText}
    </button>
  )
}

export const ButtonBaseLight = ({ btnText, click }) => {
  return (
    <button
      onClick={click}
      className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-medium rounded-md text-baseColor bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
    >
      {btnText}
    </button>
  )
}

