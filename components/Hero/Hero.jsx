/* eslint-disable @next/next/no-img-element */
import { ContainerLayout } from "../ContainerLayout/ContainerLayout";
import GlobalModalButton from "../GlobalModalButton/GlobalModalButton";
import TariffSection from "../TariffSection/TariffSection";
import style from "./Hero.module.sass";

const Hero = ({ heroData, id: sectionId }) => {
  return (
    <header className={`${style.hero}`} id={sectionId}>
      <div className={style.hero__bg}>
        <div className={style.hero__bg__grid}></div>
        <div className={style.hero__bg__blur}></div>
      </div>

      <ContainerLayout>
        <div className="pt-24 flex justify-center">
          <div
            className={`${style.dotsText} w-full md:w-[740px] text-center flex flex-col`}
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">{heroData.headingBlack}</span>

              <span className="block text-baseColor">
                {heroData.accentText}
              </span>
            </h1>

            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg w-full max-w-[600px] mx-auto">
              {heroData.description}
            </p>

            <div className="mt-5 sm:mt-8 flex justify-center">
              <div className="mt-3 sm:mt-0">
                <GlobalModalButton>
                  <button
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                      text-base font-medium rounded-md text-baseColor bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Оставить заявку
                  </button>
                </GlobalModalButton>
              </div>
            </div>
          </div>
        </div>

        <TariffSection id="whatConnection" />
      </ContainerLayout>
    </header>
  );
};

export default Hero;
