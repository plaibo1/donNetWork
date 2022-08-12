import Image from 'next/image'
import React from 'react'
import { ContainerLayout } from '../ContainerLayout/ContainerLayout'
import { HeadingLeft } from '../Headings/Headings'




const TariffSection = ({categories}) => {
  return (
    <section>
      <ContainerLayout>

        <HeadingLeft title={'Тарифы на домашний интернет'} subTitle={'Выберите подходящий тариф'} />

        <div className='flex flex-col sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3'>
          {
            Object.values(categories).map(item => {
              let tariff = item[0]

              return (
                <div key={tariff.categoryId} className='box-border p-6 shadow-md rounded-2xl'>

                  <span className='block text-base sm:text-2xl font-semibold mb-3 sm:mb-5'>
                  {Object.keys(categories)[tariff.categoryId - 1]}
                  </span>

                  <span className='text-5xl font-bold'>
                    {tariff.price} 
                    <span className='text-base font-semibold'>руб/мес</span>
                  </span>

                  <div>Скорость: <span className='font-semibold'>{tariff.speed}</span></div>
                  <div>ТВ Каналов: <span className='font-semibold'>{tariff.channelsCount}</span></div>

                  {/* image */}
                  <div className='h-80 w-80 relative'>
                    <Image
                      src={tariff.image}
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>


                  <div>{tariff.title}</div>

                  <button
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-medium rounded-md text-baseColor bg-indigo-100 hover:bg-indigo-200 md:text-lg md:px-10"
                  >
                    Оставить заявку
                  </button>

                </div>
              )
            })
          }

          <div className='bg-white col-span-2 rounded-2xl shadow-md'></div>

        </div>
        

      </ContainerLayout>
    </section>
  )
}

export default TariffSection