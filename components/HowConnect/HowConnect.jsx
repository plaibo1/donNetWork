import React from "react";
import { ContainerLayout } from "../ContainerLayout/ContainerLayout";
import { HeadingLeft } from "../Headings/Headings";

export const HowConnect = () => {
  const data = [
    {
      title: "Оставьте заявку",
      description:
        "Просто нажмите «Подключиться» или «Обратный звонок». Проверьте адрес перед подключением.",
    },
    {
      title: "Дождитесь звонка оператора",
      description:
        "Перезвоним в течение 20 минут с 9:00 до 22:00. Подберем тариф и время монтажа в интервале до 2 часов с 10:00 до 21:00, в любой день.",
    },
    {
      title: "Монтажник всё настроит",
      description:
        "Бесплатно и без ущерба для вашего ремонта подключит интернет. Вежливо проконсультирует и настроит оборудование.",
    },
    {
      title: "Оплачивайте без комиссий",
      description:
        "Бесплатно и без ущерба для вашего ремонта подключит интернет. Вежливо проконсультирует и настроит оборудование.",
    },
    {
      title: "Оплачивайте без комиссий",
      description:
        "После подключения у вас будет 1 день на оплату через наши офисы и еще множество других способов.",
    },
  ];
  return (
    <ContainerLayout>
      <HeadingLeft
        title="Как подключить и настроить интернет Донтехсвязь"
        subTitle="Чтобы подключить быстрый интернет в Ростове-на-Дону, вам нужно оформить заявку и потратить не более 30 минут времени на
        монтаж и настройку."
      />

      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={
              index === data.length - 1 ? "mb-0" : "mb-6 pb-6 border-b"
            }
          >
            <div className="flex items-center">
              <span className="flex justify-center items-center rounded-full w-[45px] h-[45px] border-2 border-gray-200 text-xl font-bold mr-3">
                {index + 1}
              </span>
              <span className="text-xl sm:text-3xl font-semibold">
                {item.title}
              </span>
            </div>
            <span className="text-lg sm:text-xl pl-[57px] block">
              {item.description}
            </span>
          </div>
        );
      })}
    </ContainerLayout>
  );
};
