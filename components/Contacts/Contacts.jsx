import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../ScrollAnimationWrapper/ScrollAnimationWrapper";
import getScrollAnimation from "../../utils/getScrollAnimation";
import { ContainerLayout } from "../ContainerLayout/ContainerLayout";
import { HeadingLeft } from "../Headings/Headings";
import { FaWhatsappSquare, FaTelegram } from "react-icons/fa";
import { SiVk } from "react-icons/si";

const contacts = [
  {
    id: 1,
    type: "phone",
    title: "Телефоны",
    contactValues: [
      {
        id: 1,
        value: "+7 (863) 202-00-00",
        title: "Единый номер",
        icons: null,
      },
      {
        id: 6,
        value: "+ 7 (928) 147-66-43",
        title: null,
        icons: [
          { Icon: FaWhatsappSquare, twColor: "text-green-400" },
          { Icon: FaTelegram, twColor: "text-blue-500" },
        ],
      },
    ],
  },
  {
    id: 2,
    type: "email",
    title: "Электронная почта",
    contactValues: [
      {
        id: 3,
        value: "dts@donnetwork.ru",
        title: "Приёмная",
      },
      {
        id: 7,
        value: "info@donnetwork.ru",
        title: "Aбонентский отдел",
      },
      {
        id: 71,
        value: "support@donnetwork.ru ",
        title: "Тех. поддержка",
      },
    ],
  },
  {
    id: 3,
    type: "text",
    title: "Адрес",
    contactValues: [
      {
        id: 4,
        value: "Межевая ул., 160, Ростов-на-Дону, Ростовская обл., 344001",
      },
    ],
  },
];

export const Contacts = ({ id: sectionId }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <section id={sectionId}>
      <ContainerLayout>
        <ScrollAnimationWrapper className="relative w-full">
          <motion.div variants={scrollAnimation}>
            <div className="rounded-3xl shadow-sm border border-slate-100 py-8 sm:py-12 px-6 sm:px-12 lg:px-16 w-full z-10 bg-white-300">
              <HeadingLeft title={"Контакты"} subTitle={null} />

              <div className="flex flex-col mt-10 mb-8 gap-3 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:gap-y-3 md:gap-x-32">
                {Boolean(contacts.length) &&
                  contacts.map((contactBlock) => {
                    return (
                      <div className="flex flex-col mb-3" key={contactBlock.id}>
                        <span className="text-2xl block mb-2 font-medium">
                          {contactBlock.title}
                        </span>

                        {contactBlock.contactValues.map((contact) => {
                          if (contactBlock.type === "phone") {
                            return (
                              <span
                                key={contact.id}
                                className="inline-flex flex-wrap justify-center flex-col sm:items-center sm:justify-start sm:flex-row"
                              >
                                <a
                                  key={contact.id}
                                  href={`tel:${contact.value}`}
                                  className="text-baseColor mr-2"
                                >
                                  {contact.value}
                                </a>
                                {contact.icons ? (
                                  <div className="text-xl inline-flex gap-1">
                                    {contact.icons.map(
                                      ({ Icon, twColor }, index) => {
                                        return (
                                          <Icon
                                            key={index}
                                            className={twColor}
                                          />
                                        );
                                      }
                                    )}
                                  </div>
                                ) : (
                                  <p className="text-slate-400">
                                    {contact.title}
                                  </p>
                                )}
                              </span>
                            );
                          } else if (contactBlock.type === "email") {
                            return (
                              <span
                                key={contact.id}
                                className="inline-flex flex-wrap justify-center flex-col sm:items-center sm:justify-start sm:flex-row"
                              >
                                <a
                                  href={`mailto:${contact.value}`}
                                  className="text-baseColor mr-2"
                                >
                                  {contact.value}
                                </a>

                                <span className="text-slate-400">
                                  {contact.title}
                                </span>
                              </span>
                            );
                          } else {
                            return (
                              <p className="mb-1" key={contact.id}>
                                {contact.value}
                              </p>
                            );
                          }
                        })}
                      </div>
                    );
                  })}

                {/* custom social media */}
                <div className="flex flex-col mb-3">
                  <span className="text-2xl block mb-2 font-medium">
                    Социальные сети
                  </span>

                  <a
                    target="_blank"
                    href="https://vk.com/donnetwork"
                    className="flex items-center hover:text-blue-700"
                    rel="noreferrer"
                  >
                    <SiVk className="text-2xl text-blue-700 mr-2" />
                    <span>Группа вконтакте</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </ContainerLayout>
    </section>
  );
};
