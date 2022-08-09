
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import style from './Hero.module.sass'
import { ContainerLayout } from '../ContainerLayout/ContainerLayout'


const Hero = ({setIsOpen}) => {
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
                  Получить консультацию
                </button>
              </div>
            </div>

          </div>

        </div>

        <div className={`${style.dotsTabs} w-full lg:max-w-lg lg:w-full md:w-1/2 sm:w-5/6`}>
          <span className='font-semibold text-2xl'>Выберите тариф</span>
          <Tabs />
        </div>

        </div>
      </ContainerLayout>

    </header>
  )
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Tabs() {
  let [categories] = useState({
    "Старт": [
      {
        title: 'Быстрее скачивай файлы, играй в онлайн-игры и смотри фильмы без зависаний на нескольких устройствах',
        channelsCount: '136',
        speed: '50 Мбит/сек',
        price: '650',
        btnLink: '#',
      },
    ],
    "Комфорт": [
      {
        title: 'Быстрее скачивай файлы, играй в онлайн-игры и смотри фильмы без зависаний на нескольких устройствах',
        channelsCount: '202',
        speed: '100 Мбит/сек',
        price: '800',
        btnLink: '#',
      },
    ],
    "Премиум": [
      {
        title: 'Сверхскоростной интернет для любых задач. Работай, играй, моментально скачивай файлы',
        channelsCount: '297',
        speed: '100 Мбит/сек',
        price: '900',
        btnLink: '#',
      },
    ],
    "Максимум": [
      {
        title: 'МЕГА Сверхскоростной интернет для любых задач. Работай, играй, моментально скачивай файлы',
        channelsCount: '297',
        speed: '500 Мбит/сек',
        price: '1100',
        btnLink: '#',
      },
    ],
  })

  return (
    <div className="w-full px-0 md:px-2 py-5 sm:px-0">
      <Tab.Group>

        <Tab.List className="flex space-x-1 rounded-xl bg-gray-200 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'transition duration-300 ease-in',
                  'ring-white ring-opacity-10 ring-offset-2 ring-offset-baseColor focus:outline-none focus:ring-2',
                  'active:scale-90 active:bg-white',
                  selected
                    ? 'bg-white shadow text-baseColor'
                    : 'text-gray-800 hover:bg-gray-400 hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                // 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >

              {posts.map((post, index) => (
                <div key={index}>

                  <div className="flex flex-col items-center md:flex-row">

                    <div className="flex mb-7 md:mb-0">
                      <div className='font-medium shadow-lg px-3 py-3 mr-5 flex flex-col items-center rounded-md'>
                        <img className='w-20' src="/donnetworkNet.gif" alt="img" />
                        <span className='block text-sm text-gray-700'>Скорость:</span>
                        <span className='font-bold text-gray-800'>{post.speed}</span>
                      </div>

                      <div className='font-medium shadow-lg px-3 py-3 md:mr-5 flex flex-col items-center rounded-md'>
                        <img className='w-20' src="/donntetworkTv.gif" alt="img" />
                        <span className='block text-sm text-gray-700'>Каналов:</span>
                        <span className='font-bold text-gray-800'>{post.channelsCount}</span>
                      </div>
                    </div>

                    <div className='flex flex-col items-end md:ml-auto'>
                      <span className='font-bold text-5xl'>{post.price}</span>
                      <span>руб/мес</span>
                    </div>

                  </div>

                  <h3 className="text-md leading-5 mt-8">
                    {post.title}
                  </h3>

                  <button
                    onClick={() => console.log(post)}
                    className="w-full mt-10 flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-medium rounded-md text-white bg-baseColor hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Подать заявку
                  </button>

                </div>
              ))}

            </Tab.Panel>
          ))}
        </Tab.Panels>
        
      </Tab.Group>
    </div>
  )
}


export default Hero;