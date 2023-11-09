import { ContainerLayout } from "../ContainerLayout/ContainerLayout";
import { AiOutlineCalendar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { FaTimes } from "react-icons/fa";
import { CgArrowLongRight } from "react-icons/cg";
import { HeadingLeft } from "../Headings/Headings";

export default function SwiperNews({ list, id: sectionId }) {
  const [selectedItem, setSelectedItem] = useState(null);
  if (!list) return null;

  return (
    <section id={sectionId}>
      <ContainerLayout>
        <HeadingLeft title="Новости компании" subTitle="Оставайтесь в курсе!" />

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          grabCursor={true}
          freeMode={true}
          scrollbar={{ hide: false }}
          modules={[FreeMode, Scrollbar]}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {list?.items.map((item) => {
            return (
              <SwiperSlide key={item.sys.id}>
                <motion.div
                  className="mb-3 shadow-md rounded-lg p-5 relative bg-white z-10"
                  layoutId={item.sys.id}
                  onClick={() => {
                    setSelectedItem(null);
                    setSelectedItem(item);
                  }}
                >
                  <div className="text-2xl font-semibold mb-3 h-8 truncate">
                    {item.fields.title}
                  </div>

                  <div className="overflow-hidden h-24 text-ellipsis myGradient relative -z-10">
                    <p className="text-sm">{item.fields.newsText}</p>
                  </div>

                  <div className="-mt-6 mb-3 z-20">
                    <motion.span
                      initial={{ x: 200 }}
                      animate={{ x: 0 }}
                      exit={{ x: -200 }}
                      className="bg-baseColor text-slate-50 hover:bg-myGreen hover:text-slate-900 rounded-full cursor-pointer inline-flex items-center px-3 py-1 text-sm"
                    >
                      Подробнее <CgArrowLongRight className="ml-2" />
                    </motion.span>
                  </div>

                  <div className="flex items-center">
                    <AiOutlineCalendar className="mr-1" />
                    {item.sys.createdAt.split("T")[0].replace(/-/g, ".")}
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <AnimatePresence>
          {selectedItem?.sys.id && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onMouseDown={() => setSelectedItem(null)}
              className="w-full h-screen flex justify-center items-center 
            fixed top-0 left-0 z-max myBg backdrop-blur-sm"
            >
              <motion.div
                layoutId={selectedItem.sys.id}
                onMouseDown={(e) => e.stopPropagation()}
                className="mb-3 shadow-lg rounded-lg px-4 py-5 md:px-5 
              md:py-7 relative w-5/6 md:w-3/4 lg:w-1/2 bg-white max-h-[80vh] overflow-auto"
              >
                <motion.div className="text-3xl md:text-5xl font-bold mb-3 mt-2">
                  {selectedItem.fields.title}
                </motion.div>

                <motion.div
                  className="text-lg md:text-xl font-bold mb-4 
                flex items-center"
                  transition={{ delay: 0.3 }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <AiOutlineCalendar className="mr-1" />
                  {selectedItem.sys.createdAt.split("T")[0].replace(/-/g, ".")}
                </motion.div>

                <motion.p className="text-md md:text-xl mb-1 pr-4 sm:pr-2">
                  {selectedItem.fields.newsText}
                </motion.p>

                <motion.button
                  className="text-white bg-baseColor rounded-lg w-7 h-7 flex hover:bg-baseColor-20 absolute top-2 right-2 active:scale-90"
                  onClick={() => setSelectedItem(null)}
                >
                  <FaTimes className="m-auto" />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </ContainerLayout>
    </section>
  );
}
