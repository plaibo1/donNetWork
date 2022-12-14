import Image from 'next/image'
import React, { useState } from 'react'
import { ContainerLayout, PopUpWrapper } from '../ContainerLayout/ContainerLayout'
import { HeadingLeft } from '../Headings/Headings'
import { motion, AnimatePresence } from "framer-motion"
import { FaTimes } from 'react-icons/fa'
import { BsLightningCharge } from 'react-icons/bs'
import { GrChannel } from 'react-icons/gr'
import PhoneForm from '../PhoneForm/PhoneForm'
import { ButtonBase } from '../Buttons/Buttons'
import ErrorAlert from '../ErrorAlert/ErrorAlert'

const TariffSection = ({categories, setIsSuccess, setUserNumber}) => {

  const [tariffItem, setTariffItem] = useState(null);
  const [isError, setIsError] = useState(false)

  return (
    <section>
      <ContainerLayout>

        <HeadingLeft title={'Тарифы на домашний интернет'} subTitle={'Выберите подходящий тариф'} />

        <div className='flex flex-col sm:grid sm:gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {
            Object.values(categories).map(item => {
              let tariff = item[0]

              return (
                <motion.div key={tariff.categoryId}
                  layoutId={`${tariff.categoryId}fff`}
                  className='box-border shadow-md rounded-2xl overflow-hidden relative mb-6 sm:mb-0 z-10 bg-white'>

                  <div className='z-10 p-6'>
                    <span className='block text-xl sm:text-2xl font-semibold mb-3 sm:mb-5'>
                      {tariff.tariffName}
                    </span>

                    <span className='flex-col flex items-start'>
                      <div className='bg-white shadow-sm px-3 rounded-lg inline-flex items-center mb-2'>
                        <BsLightningCharge className='mr-1' />
                        Скорость: <span className='font-semibold ml-1'>{tariff.speed}</span>
                      </div>
                      <div className='bg-white shadow-sm px-3 rounded-lg items-center inline-flex'>
                        <GrChannel className='mr-1' /> 
                        ТВ Каналов: <span className='font-semibold ml-1'>{tariff.channelsCount}</span>
                      </div>
                    </span>
                  </div>

                  {/* only max tariff */}
                  {
                    tariff.tariffName === 'Максимум' &&
                    <div className="absolute right-3 top-3 bg-white shadow-sm w-[50px] h-[50px] flex rounded-lg">
                      <img src='/thundermin.webp' className='m-auto' alt='img'/>
                    </div> 
                  }

                  {/* image */}
                  <div className="h-[235px] relative -z-10">
                    <div className='h-72 w-72 rotate-x absolute -bottom-0 -right-8'>
                      <Image
                        src={tariff.image}
                        layout='fill'
                        objectFit='contain'
                        alt='донтехсвязь tariff image'
                      />
                    </div>
                  </div>

                  <div className="bg-slate-50 px-4 sm:px-6 py-7">

                    <div className='h-[110px] lg:h-20'>{tariff.title}</div>

                    <span className='text-5xl font-bold inline-flex flex-col mb-5'>
                      {tariff.price}
                      <span className='text-base font-semibold ml-auto'>руб/мес</span>
                    </span>

                    <button
                      onClick={() => setTariffItem(tariff)}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                        text-base font-medium rounded-md text-baseColor bg-indigo-100 hover:bg-indigo-200 md:text-lg md:px-10"
                    >
                      Выбрать тариф
                    </button>

                  </div>

                </motion.div>
              )
            })
          }

          <div className='bg-white sm:col-span-2 rounded-2xl shadow-md flex justify-center items-center'>

            <div className='w-[80%]'> 
              <span className='flex font-bold text-xl py-6 md:py-0 sm:text-2xl md:text-4xl mb-2 md:mb-10'>Пакет тв каналов с каждым тарифом от партнера! </span>
              <div className='w-full sm:w-[300px]'>
                <ButtonBase btnText={'Подробнее от ТВ'} click={() => alert('123')}/>
              </div>
            </div>

          </div>

        </div>

        <AnimatePresence>
          {
            tariffItem && (
              <motion.div 
                className="w-full h-screen flex justify-center items-center 
                  fixed top-0 left-0 z-max myBg backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setTariffItem(null)}>
                
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    layoutId={`${tariffItem?.categoryId}fff`}
                    className='box-border w-[91%] sm:w-[75%] md:w-[65%] lg:w-[500px] h-auto bg-white shadow-md rounded-2xl overflow-hidden relative sm:mb-0 z-10'>

                    <PopUpWrapper initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}}>

                    <div className='z-10 p-6'>

                      <span className='flex text-xl sm:text-2xl font-semibold mb-3 sm:mb-5 items-center'>

                        {tariffItem.tariffName}

                        {/* only max tariffItem */}
                        {
                          tariffItem.tariffName === 'Максимум' &&
                          <span className="w-[50px] h-[50px] flex">
                            <img src='/thundermin.webp' className='m-auto' alt='img' />
                          </span>
                        }

                      </span>

                      <span className='flex-col flex items-start'>
                        <div className='bg-white shadow-sm px-3 rounded-lg inline-flex items-center mb-2'>
                          <BsLightningCharge className='mr-1' />
                          Скорость: <span className='font-semibold ml-1'>{tariffItem.speed}</span>
                        </div>
                        <div className='bg-white shadow-sm px-3 rounded-lg items-center inline-flex'>
                          <GrChannel className='mr-1' />
                          ТВ Каналов: <span className='font-semibold ml-1'>{tariffItem.channelsCount}</span>
                        </div>
                      </span>

                      <span className='text-5xl font-bold inline-flex flex-col mt-5 bg-white p-1 rounded-sm'>
                        {tariffItem.price}
                        <span className='text-base font-semibold ml-auto'>руб/мес</span>
                      </span>

                    </div>

                    <div
                      onClick={() => setTariffItem(null)}
                      className="w-8 h-8 bg-baseColor absolute right-2 top-2 flex 
                        hover:bg-baseColor-20 cursor-pointer rounded-lg active:scale-90">
                      <FaTimes className='m-auto text-white' />
                    </div>


                    {/* image */}
                    <div className="h-[235px] relative -z-10 -mt-12">
                      <div className='h-80 w-80 rotate-x absolute -bottom-0 -right-8 -z-10'>
                        <Image
                          src={tariffItem.image}
                          layout='fill'
                          objectFit='contain'
                          alt='tariff image'
                        />
                      </div>
                    </div>

                    {
                      !isError ? 
                      <div className="bg-slate-50 px-6 py-7 w-full">
                        <PhoneForm 
                          setIsSuccess={setIsSuccess} 
                          setIsError={setIsError} 
                          setSelectedLayout={setTariffItem} 
                          setUserNumber={setUserNumber} 
                          userFrom={`Секция тарифов, выбран: <span style='color: #2b3cff'>${tariffItem.tariffName}</span>`}
                        />
                      </div>

                      :

                      <div className='px-6'>
                        <ErrorAlert  setIsError={setIsError}/>
                      </div>
                      
                    }

                  
                    </PopUpWrapper>
                  </motion.div>
                
              </motion.div>
            )
          }
        </AnimatePresence>

      </ContainerLayout>
    </section>
  )
}

export default TariffSection