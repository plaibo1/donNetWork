import { useState } from "react";
import Image from "next/image";
import PhoneForm from "../PhoneForm/PhoneForm";

import style from "./formPopUp.module.scss";

const FormPopUp = ({
  setIsOpen,
  setIsSuccess,
  setUserNumber,
  fromTariffPath,
}) => {
  const [showNumberForm, setShowNumberForm] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <div className={`${style.formPopUpWidth}`}>
      <div className="relative z-10 px-5 pt-8 pb-8 sm:pb-12 h-fit bg-white rounded-lg sm:px-7">
        <h3 className="mb-6 text-2xl font-medium text-center">
          {showNumberForm ? "Оставьте заявку" : "Связаться со специалистом"}
        </h3>

        <div className="mb-8 w-full flex justify-center">
          <button
            className={`${
              showNumberForm
                ? "bg-baseColor text-white"
                : "bg-white text-gray-800"
            } rounded-lg py-2.5 px-3 sm:px-5 text-xs sm:text-sm font-medium leading-4 sm:leading-5 ring-white ring-opacity-10 ring-offset-2 
                                ring-offset-baseColor focus:outline-none focus:ring-2 shadow mr-5`}
            onClick={() => setShowNumberForm(true)}
          >
            Подключить услугу
          </button>

          <button
            className={`${
              !showNumberForm
                ? "bg-baseColor text-white"
                : "bg-white text-gray-800"
            } rounded-lg px-3 py-2.5 sm:px-5 text-xs sm:text-sm font-medium leading-4 sm:leading-5 ring-white ring-opacity-10 ring-offset-2 
                                ring-offset-baseColor focus:outline-none focus:ring-2 shadow`}
            onClick={() => setShowNumberForm(false)}
          >
            Вопрос в техподдержку
          </button>
        </div>

        <div>
          {showNumberForm ? (
            <>
              <p className="text-gray-500 text-xs md:text-base mb-3">
                Оформить заявку, получить информацию о тарифах и подключении
              </p>

              <PhoneForm
                setIsSuccess={setIsSuccess}
                setIsOpen={setIsOpen}
                setIsError={setIsError}
                setShowNumberForm={setShowNumberForm}
                setUserNumber={setUserNumber}
                userFrom={fromTariffPath || "Главная форма"}
              />
            </>
          ) : (
            <>
              {isError ? (
                <div className="w-full bg-red-500 text-white px-5 pt-3 pb-8 mb-5 rounded-lg relative">
                  <div className="mb-5">
                    Произошла ошибка. Сейчас ведутся работы на сервере, но вы
                    можете оставть заявку по бесплатному номеру:
                    <a
                      href="tel:+7(863)202-00-00"
                      className="px-2 py-1 bg-baseColor-20 rounded-md mt-2 inline-block"
                    >
                      +7 (863) 202-00-00
                    </a>
                  </div>
                  <button
                    onClick={() => setIsError(false)}
                    className="px-5 py-1 bg-red-400 hover:bg-red-700 absolute right-2 bottom-2 rounded-md"
                  >
                    ок
                  </button>
                </div>
              ) : null}

              <div>
                <p className="text-gray-500 text-xs md:text-base mb-3">
                  Вопросы о работе оборудования, платежах, смене тарифа,
                  подключении услуг
                </p>

                <div className="z-20">
                  <div className="-mb-8 -z-10 relative w-full flex justify-center">
                    <Image
                      src="/rocket.png"
                      alt="call us image"
                      width={123}
                      height={150}
                    />
                  </div>

                  <div className="bg-slate-100 p-4 rounded-lg z-10">
                    <div className="mb-3 font-normal text-base">
                      Для оперативного решения вопроса позвоните по бесплатному
                      телефону:
                    </div>
                    <a
                      href="tel:+7(863)202-00-00"
                      className="text-baseColor text-xl sm:text-2xl font-medium"
                    >
                      +7 (863) 202-00-00
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormPopUp;
