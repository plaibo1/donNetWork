import { useState } from 'react'
import style from './Hero.module.sass'
import { ContainerLayout } from '../ContainerLayout/ContainerLayout'
import Tabs from '../Tabs/Tabs'



const Hero = ({ setIsOpen, categories }) => {

  

  return (
    <header className={`${style.hero}`}>

      <div className={style.hero__bg}>
        <div className={style.hero__bg__grid}></div>
        <div className={style.hero__bg__blur}></div>
      </div>

      <ContainerLayout>
        <div className="flex flex-col sm:flex-row items-center pt-32">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center">

            <div className={`${style.dotsText} sm:text-center lg:text-left lg:flex-grow flex flex-col`}>

              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Домашний интернет</span>{' '}
                <span className="block text-baseColor xl:inline">в Ростове-на-Дону</span>
              </h1>

              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Более 20000 абонентов в
                Советском, Железнодорожном и Ленинском районах Ростова-на-Дону.
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="mt-3 sm:mt-0">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-medium rounded-md text-baseColor bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Оставить заявку
                  </button>
                </div>
              </div>

            </div>

          </div>

          <div className={`${style.dotsTabs} w-full lg:max-w-lg lg:w-full md:w-1/2 sm:w-5/6`}>
            <span className='font-semibold text-2xl'>Выберите тариф</span>
            <Tabs categories={categories} />
          </div>

        </div>
      </ContainerLayout>

    </header>
  )
}





export default Hero;