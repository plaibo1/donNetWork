import { Disclosure } from "@headlessui/react";
import { HiOutlineChevronUp } from "react-icons/hi";
import { ContainerLayout } from "../ContainerLayout/ContainerLayout";
import { HeadingLeft } from "../Headings/Headings";
import { ButtonBase } from "../Buttons/Buttons";
import GlobalModalButton from "../GlobalModalButton/GlobalModalButton";

const questions = [
  {
    question: "Как позвонить в техподдержку?",
    answer:
      "По номеру телефона 202-00-00, добавочный 3. Не забудьте перевести Ваш телефон в тональный режим, нажав звездочку.",
  },
  {
    question: "Есть ли у вас телевидение?",
    answer: "Да, с 3 апреля 2017 года мы запустили данный вид услуги.",
  },
  {
    question: "Когда необходимо оплачивать услугу Интернет?",
    answer:
      "До первого числа каждого месяца нужно положить на договор сумму, равную тарифному плану и подключенным дополнительным услугам.",
  },
  {
    question: "Сколько стоит подключение к сети Интернет?",
    answer: "Подключение абсолютно бесплатно!",
  },
  {
    question: "Настраиваем ли мы роутер при подключении?",
    answer:
      "При первичном подключении к нашей сети производится БЕСПЛАТНАЯ настройка оборудования.",
  },
  {
    question: "Предоставляем ли мы сетевое оборудование (Wi-Fi роутер)?",
    answer:
      "Нет, не предоставляем (Предоставление сетевого оборудования любым провайдером является маркетинговым ходом, никак не сказывающимся на качестве предоставляемых услуг).",
  },
  {
    question: "Что делать, если не работает Интернет?",
    answer:
      "Обратиться в техническую поддержку по номеру 202-00-00, добавочный 3. Не забудьте перевести телефон в тональный режим, нажав *.",
  },
  {
    question: "Что делать, если я приобрел роутер и не могу его настроить?",
    answer:
      "Вы можете принести Ваше устройство к нам в офис, и мы настроим его бесплатно. Либо Вы можете обратиться в службу технической поддержки и вызвать специалиста на дом. Стоимость этой услуги 400 рублей.",
  },
  {
    question: "Какой роутер вы рекомендуете?",
    answer:
      "Мы не рекомендуем конкретную модель, но практика использования роутеров показывает, что наиболее стабильно работают марки Keenetic, TP-Link, Huawei, ASUS.",
  },
  {
    question: "Как я могу сменить тарифный план?",
    answer:
      "Вы можете сменить тарифный план в личном кабинете во вкладке «Управление» либо по звонку или заявлению в абонентский отдел.",
  },
  {
    question: "Если я потерял карту регистрации, как я могу её восстановить?",
    answer:
      "Карта регистрации восстанавливается у нас в офисе. Вам необходимо обратиться в абонентский отдел с документом, подтверждающим Вашу личность (паспортом).",
  },
  {
    question: "Какой тип подключения вы используете?",
    answer: "Мы используем тип подключения по протоколу PPPoE.",
  },
  {
    question: "Как проверить скорость?",
    answer:
      "Измерить скорость интернет-соединения можно на сайте: www.speedtest.net, выбрав в качестве точки замера близлежащие города. Для достижения наиболее точных результатов Ваш компьютер должен быть подключен к роутеру с помощью кабеля, а беспроводные соединения отключены. Рекомендовано также остановить все активные загрузки.",
  },
];

export default function Faq({ id: sectionId }) {
  return (
    <section id={sectionId}>
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
                      <div initial={{ height: 0 }} animate={{ height: "auto" }}>
                        {item.answer}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          })}

          <div className="mt-10 w-full md:w-100 sm:mx-auto">
            <GlobalModalButton>
              <ButtonBase btnText={"Оставить заявку"} />
            </GlobalModalButton>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}
