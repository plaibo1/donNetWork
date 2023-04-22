import { Disclosure } from "@headlessui/react";
import { HiOutlineChevronUp } from "react-icons/hi";
import { ContainerLayout } from "../ContainerLayout/ContainerLayout";
import { AnimatePresence, motion } from "framer-motion";
import { HeadingLeft } from "../Headings/Headings";
import { ButtonBase } from "../Buttons/Buttons";

export default function Faq({ setIsOpen }) {
  const questions = [
    {
      question: "Как позвонить в тех.поддержку?",
      answer:
        "По номеру телефона 202-00-00 добавочный 3. Не забудьте перевести Ваш телефон в тональный режим, нажав звездочку",
    },
    {
      question: "Есть ли у вас кабельное ТВ?",
      answer: "Да, с 3 апреля 2017 года мы запустили данный вид услуги.",
    },
    {
      question: "Когда необходимо оплачивать услугу интернет?",
      answer:
        "До первого числа каждого месяца-сумму равную тарифному плану и подключенным дополнительным услугам.",
    },
    {
      question: "Сколько стоит подключение сети интернет по технологии FTTB?",
      answer: "Подключение по технологии FTTB абсолютно бесплатно!",
    },
    {
      question: "Сколько стоит подключение сети интернет по технологии ADSL?",
      answer:
        "При наличии технической возможности стоимость подключения 500 рублей для физических лиц. Для юридических лиц-стоимость подключения 1000 рублей.",
    },
    {
      question: "Настраиваем ли мы роутер/ADSL модем при подключении?",
      answer:
        "При первичном подключении к нашей сети производится БЕСПЛАТНАЯ настройка оборудования.",
    },
    {
      question:
        "Предоставляем ли мы сетевое оборудование (Wi-Fi роутер или ADSL модем)?",
      answer:
        "Нет, не предоставляем. (предоставление сетевого оборудования любым провайдером является маркетинговым ходом, никак не сказывающимся на качестве предоставляемых услуг )",
    },
    {
      question: "Что делать, если не работает интернет?",
      answer:
        "Обратиться в техническую поддержку по номеру 202-00-00, добавочный номер 3. Не забудьте перевести телефон в тональный режим, нажав *",
    },
    {
      question:
        "Что делать, если я приобрел роутер/ ADSL модем и не могу его настроить?",
      answer:
        "Можете принести ваше устройство к нам в офис и мы его бесплатно настроим. Либо Вы можете обратиться в службу технической поддержки и Вам вызовут специалиста на дом. Стоимость этой услуги 400 рублей для физических лиц и 400 рублей для юридических.",
    },
    {
      question: "Какой роутер вы рекомендуете?",
      answer:
        "Мы не рекомендуем конкретную модель, но практика использования роутеров показывает, что наиболее стабильно работают марки Zyxel, D-Link, Linksys.",
    },
    {
      question: "Как я могу сменить тарифный план?",
      answer:
        "Вы сожете сменить тарифны план зайдя в личный кабинет, либо по заявлению в абонентский отдел.",
    },
    {
      question: "Если я потерял карту регистрации, как я могу её восстановить?",
      answer:
        "Карта регистрации восстанавливается только у нас в офисе. Вам необходимо обратиться в абонентский отдел с документом, подтверждающим Вашу личность (паспортом)",
    },
    {
      question: "Какой тип подключения вы используете?",
      answer: "Мы используем тип подключения по протоколу PPPoE",
    },
    {
      question: "Как проверить скорость?",
      answer:
        "Измерить скорость интернет соединения можно на сайте: http://www.speedtest.net, выбрав в качестве точки замера близлежащие города. Для достижения наиболее точных результатов, Ваш компьютер должен быть подключен к роутеру с помощью кабеля, а беспроводные соединения отключены. Рекомендовано также остановить все активные загрузки.",
    },
  ];

  return (
    <ContainerLayout>
      <HeadingLeft title={"Часто задаваемые вопросы"} subTitle={null} />

      <div className="mx-auto w-full rounded-3xl bg-slate-50 py-3 sm:py-7 px-4 sm:px-10">
        {questions.map((item, index) => {
          return (
            <Disclosure as="div" className="py-7 border-b" key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className="flex items-center w-full justify-between rounded-lg
                      px-0 sm:px-4 text-left text-sm font-medium "
                  >
                    <span className="text-xl sm:text-2xl hover:text-baseColor">
                      {item.question}
                    </span>

                    <HiOutlineChevronUp
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } min-h-[23px] min-w-[23px] ml-3 text-baseColor`}
                    />
                  </Disclosure.Button>

                  <Disclosure.Panel className="px-3 sm:px-6 pt-5 text-lg sm:text-xl text-gray-900">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                    >
                      {item.answer}
                    </motion.div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          );
        })}

        <div className="mt-10 w-full md:w-100 sm:mx-auto">
          <ButtonBase
            btnText={"Оставить заявку"}
            click={() => setIsOpen(true)}
          />
        </div>
      </div>
    </ContainerLayout>
  );
}
