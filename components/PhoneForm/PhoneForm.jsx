import { useForm, Controller } from "react-hook-form";
import NumberFormat from "react-number-format";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const PhoneForm = ({
  setIsError,
  setShowNumberForm,
  setIsOpen,
  setIsSuccess,
  setSelectedLayout,
  setUserNumber,
  userFrom,
}) => {
  const [loaded, setLoaded] = useState(false);

  const privacyStartText = `Настоящим я, далее – «Субъект Персональных Данных», во исполнение 
  требований Федерального закона от 27.07.2006 г. № 152-ФЗ 
  «О персональных данных» (с изменениями и дополнениями) свободно, 
  своей волей и в своем интересе даю свое согласие ООО «Донтехсвязь»»...`;

  const [privacyShow, setPrivacyShow] = useState(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
    register,
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    const isFullLengthPhone = data.phone.indexOf("_");

    if (isFullLengthPhone !== -1) {
      setError("phone", { type: "minLength" });
      return;
    }

    setLoaded(true);
    await fetch("/api/mailer", {
      method: "post",
      body: JSON.stringify({ ...data, userFrom }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.responseCode === 535) {
          throw new Error("Something went wrong");
        }
        if (setIsOpen) setIsOpen(false);
        if (setSelectedLayout) setSelectedLayout(null);
        setIsSuccess(true);
        setUserNumber(res.phone);
        reset();
        console.log("🚀 ~ onSubmit ~ res:", res);
      })
      .catch((err) => {
        console.error("🚀", err);
        setIsError(true);
        if (setShowNumberForm) setShowNumberForm(false);
      })
      .finally(() => {
        setLoaded(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span className="block mb-3 font-medium text-base">
          Контактная информация
        </span>

        <>
          <input
            placeholder="Почта (не обязательно)"
            {...register("email")}
            className="block w-full mb-4 px-4 py-3 border-2 border-transparent text-base border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
          />

          <input
            placeholder="Адрес (не обязательно)"
            {...register("address")}
            className="block w-full mb-4 px-4 py-3 border-2 border-transparent text-base border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
          />

          <Controller
            control={control}
            name="phone"
            defaultValue=""
            rules={{ required: true }}
            render={({ field: { onChange, ref, name, value } }) => (
              <NumberFormat
                format="+7 (###) ### ## ##"
                mask="_"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={"+7 (000) 00 00 00"}
                className="block w-full px-4 py-3 border-2 border-transparent text-base border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
              />
            )}
          />

          <div className="text-red-500 h-8 text-base">
            {errors.phone?.type === "required" && (
              <span>Введите номера телефона</span>
            )}
            {errors.phone?.type === "minLength" && (
              <span>Введите корректный номера телефона</span>
            )}
          </div>
        </>
      </label>

      <div className="block">
        <span className="text-sm block mb-1">Звоним с 10:00 до 21:00.</span>
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full text-base px-3 py-4 font-medium text-white bg-blue-600 rounded-lg"
          disabled={loaded}
        >
          {loaded ? (
            <AiOutlineLoading3Quarters className="mx-auto h-5 loading text-xl" />
          ) : (
            "Жду звонка"
          )}
        </motion.button>
      </div>

      <div className="w-full mt-4 text-sm text-center text-gray-500">
        Нажимая на кнопку «Жду звонка», вы предоставляете ООО «Донтехсваязь»
        согласие на обработку
        <span
          onMouseEnter={() => setPrivacyShow(true)}
          onMouseLeave={() => setPrivacyShow(false)}
          className="text-baseColor ml-1 cursor-pointer relative"
        >
          персональных данных.
          {privacyShow && (
            <div
              className="mb-3 w-[250px] md:w-[300px] p-4 rounded-xl shadow-md bg-white text-xs 
                text-slate-900 absolute bottom-0 right-0"
            >
              <span
                className="absolute top-1 right-1 text-base"
                onClick={() => setPrivacyShow(false)}
              >
                <FaTimes />
              </span>
              {privacyStartText}{" "}
              <Link href={"/privacy"}>
                <a className="text-baseColor">подробнее</a>
              </Link>
            </div>
          )}
        </span>
      </div>
    </form>
  );
};

export default PhoneForm;
