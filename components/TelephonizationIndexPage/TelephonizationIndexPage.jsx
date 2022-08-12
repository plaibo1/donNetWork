import React from 'react'
import { ButtonBase } from '../Buttons/Buttons'
import { ContainerLayout } from '../ContainerLayout/ContainerLayout'

import { BsTelephone } from 'react-icons/bs'

const TelephonizationIndexPage = () => {
  return (
    <ContainerLayout>
      <div className="p-6 sm:p-16 md:p-20 rounded-2xl bg-sweetCorn">

        <p className='block text-xl sm:text-4xl font-bold mb-10 md:mb-12'>
          Донтехсвязь выполняет работы по телефонизации жилых домов 
          по заявке Товарищества собственников жилья или Управляющей компании.
        </p>
        
        <div className='flex items-center flex-col sm:flex-row'>
          
          <div className='w-full sm:w-48 md:w-80'>
            <ButtonBase btnText={'Узнать подробности'} click={() => null} />
          </div>

          <span className='font-medium text-xl my-4 sm:my-0 sm:mx-7'>или</span>

          <a href="tel:+7(863)202-00-00" className='font-bold sm:text-md md:text-xl 
            lg:text-2xl flex items-center sm:flex-row '>

            <BsTelephone className='mr-2' />
            +7 (863) 202-00-00
          </a>

        </div>

      </div>
    </ContainerLayout>
  )
}

export default TelephonizationIndexPage