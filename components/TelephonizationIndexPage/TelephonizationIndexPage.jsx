import React, { useState } from 'react'
import { ButtonBase } from '../Buttons/Buttons'
import { ContainerLayout } from '../ContainerLayout/ContainerLayout'
import { motion, AnimatePresence  } from "framer-motion"
import { BsTelephone } from 'react-icons/bs'
import Image from 'next/image'
import PhoneForm from '../PhoneForm/PhoneForm'
import { FaTimes } from 'react-icons/fa'

const TelephonizationIndexPage = ({setIsSuccess}) => {

  const [selectedId, setSelectedId] = useState(null)

  return (
    <>
    <ContainerLayout>
      <motion.div className="p-6 sm:p-16 md:p-20 rounded-2xl bg-sweetCorn" layoutId='TelephonizationIndexPage'>

        <p className='block text-xl sm:text-4xl font-bold mb-10 md:mb-12'>
          Донтехсвязь выполняет работы по телефонизации жилых домов 
          по заявке Товарищества собственников жилья или Управляющей компании.
        </p>
        
        <div className='flex items-center flex-col sm:flex-row'>
          
          <div className='w-full sm:w-48 md:w-80'>
            <ButtonBase btnText={'Узнать подробности'} click={() => setSelectedId('TelephonizationIndexPage')} />
          </div>

          <span className='font-medium text-xl my-4 sm:my-0 sm:mx-7'>или</span>

          <a href="tel:+7(863)202-00-00" className='font-bold sm:text-md md:text-xl 
            lg:text-2xl flex items-center sm:flex-row '>

            <BsTelephone className='mr-2' />
            +7 (863) 202-00-00
          </a>

        </div>

      </motion.div>
    </ContainerLayout>

      {
        selectedId && (
          <motion.div className='w-full h-screen flex justify-center items-center 
            fixed top-0 left-0 z-max myBg backdrop-blur-sm'
            onClick={() => setSelectedId(null)}
            >
            <motion.div 
              onClick={(e) => e.stopPropagation()}
              className="p-6 sm:p-16 md:p-20 rounded-2xl bg-sweetCorn overflow-hidden relative
              w-[90%] sm:w-[80%] md:w-[600px]" 
              layoutId={selectedId}
            >

              <span className='block text-xl sm:text-4xl font-bold mb-2'>
                Оставьте заявку
              </span>

              <span className='mb-10 block text-lg'>
                Менеджер свяжется с вами, как можно скорее
              </span>

              <div className='absolute top-2 right-2 bg-slate-900 w-7 flex h-7 
                rounded-lg text-white cursor-pointer hover:bg-baseColor' 
                onClick={() => setSelectedId(null)}>

                <FaTimes className='m-auto'/>
              </div>

              <div>
                <PhoneForm setIsSuccess={setIsSuccess} setSelectedLayout={setSelectedId} />
              </div>

            </motion.div>
          </motion.div>
        )
      }

    </>
  )
}

export default TelephonizationIndexPage