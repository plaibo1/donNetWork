import { motion } from 'framer-motion'
import React from 'react'
import { ContainerLayout } from '../ContainerLayout/ContainerLayout'


const AnyQuestion = ({setIsOpen}) => {
  return (
    <ContainerLayout>
      <div className='w-full rounded-3xl border border-slate-200 flex sm:items-center flex-col 
        sm:flex-row px-6 py-8 sm:px-10 sm:py-16'>

        <div className='md:w-4/5'>
          <span className='block text-xl mb-5 sm:mb-10'>Остались вопросы по подключению?</span>

          <div className='flex flex-col xl:flex-row xl:items-end'>
            <a href="tel:+7(863)202-00-00" className='text-2xl md:text-3xl lg:text-4xl font-bold'>+7 (863) 202-00-00</ a>
            <span className='xl:ml-5 text-xl mb-7 mt-5 xl:mt-0 md:mb-0'>или закажите обратный звонок</span>
          </div>
        </div>

        <motion.button
          onClick={() => setIsOpen(true)}
          className="w-full sm:w-[340px] md:w-[370px] flex items-center justify-center px-3 py-3 border border-transparent 
                    text-base font-medium rounded-md text-white bg-baseColor hover:bg-baseColor-10 md:py-4 md:text-lg md:px-10"
        >
          Заказать обратный звонок
        </motion.button>

      </div>
    </ContainerLayout>
  )
}

export default AnyQuestion