import React, { useState } from 'react'
import { ButtonBase } from '../Buttons/Buttons'
import { ContainerLayout } from '../ContainerLayout/ContainerLayout'
import { motion, AnimatePresence  } from "framer-motion"
import { BsTelephone } from 'react-icons/bs'
import Image from 'next/image'

const TelephonizationIndexPage = () => {

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
          <motion.div onClick={() => setSelectedId(null)} className='w-full h-screen fixed top-0 left-0 bg-baseColor flex justify-center items-center z-max'>
            <motion.div className="p-6 sm:p-16 md:p-20 rounded-2xl bg-sweetCorn w-1/2 overflow-hidden" layoutId={selectedId}>

              <p className='block text-xl sm:text-4xl font-bold mb-10 md:mb-12'>
                Донтехсвязь выполняет работы по телефонизации жилых домов
                по заявке Товарищества собственников жилья или Управляющей компании.
              </p>

              {/* image */}
              <motion.div
                transition={{delay: 0.2}} 
                initial={{x: -50, opacity: 0}} 
                animate={{x: 0, opacity: 1}} exit={{opacity: 0, x: 100}}
                className='h-100 w-100 relative'>
                <Image
                  src={'/premium.png'}
                  layout='fill'
                  objectFit='contain'
                />
              </motion.div>

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
          </motion.div>
        )
      }

    </>
  )
}

export default TelephonizationIndexPage