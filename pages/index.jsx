import * as contentful from 'contentful';
import Head from 'next/head'
import { useState } from 'react'
import FormPopUp from '../components/FormPopUp/FormPopUp'
import Hero from '../components/Hero/Hero'
import Modal from '../components/Modal/Modal'
import SwiperNews from '../components/SwiperNews/SwiperNews'
import TariffSection from '../components/TariffSection/TariffSection'
import TelephonizationIndexPage from '../components/TelephonizationIndexPage/TelephonizationIndexPage'
import AnyQuestion from '../components/AnyQuestion/AnyQuestion'
import Faq from '../components/Faq/Faq'
import SuccessModal from '../components/SuccessModal/SuccessModal'



export default function Home({newsList}) {

  let [categories] = useState({
    "Старт": [
      {
        tariffName: 'Старт',
        title: 'Быстрее скачивай файлы, играй в онлайн-игры и смотри фильмы без зависаний на нескольких устройствах',
        channelsCount: '136',
        speed: '50 Мбит/сек',
        price: '650',
        image: '/start3.png',
        categoryId: '1',
      },
    ],
    "Комфорт": [
      {
        tariffName: 'Комфорт',
        title: 'Быстрее скачивай файлы, играй в онлайн-игры и смотри фильмы без зависаний на нескольких устройствах',
        channelsCount: '202',
        speed: '100 Мбит/сек',
        price: '800',
        image: '/comfort.png',
        categoryId: '2',
      },
    ],
    "Премиум": [
      {
        tariffName: 'Премиум',
        title: 'Сверхскоростной интернет для любых задач. Работай, играй, моментально скачивай файлы',
        channelsCount: '297',
        speed: '100 Мбит/сек',
        price: '900',
        image: '/premium.png',
        categoryId: '3',
      },
    ],
    "Максимум": [
      {
        tariffName: 'Максимум',
        title: 'МЕГА Сверхскоростной интернет для любых задач. Работай, играй, моментально скачивай файлы',
        channelsCount: '297',
        speed: '500 Мбит/сек',
        price: '1100',
        image: '/maximum.png',
        categoryId: '4',
      },
    ],
  })

  const [isOpen, setIsOpen] = useState(false) // ModalFrom component
  const [isSuccess, setIsSuccess] = useState(false) // ModalSuccess component

  return (
    <div>
      <Head>
        <title>Донтехсвязь</title>
        <meta name="description" content="Интернет, ТВ и услуги телефонизации в Ростове-на-Дону для дома и бизнеса" />
      </Head>

      <Modal modalStatus={isOpen} setModalStatus={setIsOpen}>
        <FormPopUp setIsOpen={setIsOpen} setIsSuccess={setIsSuccess}/>
      </Modal>

      <Modal modalStatus={isSuccess} setModalStatus={setIsSuccess}>
        {
          isSuccess && <SuccessModal setIsSuccess={setIsSuccess}/>
        }
      </Modal>


      {/* page start */}

      <Hero setIsOpen={setIsOpen} categories={categories} setIsSuccess={setIsSuccess} />

      <TariffSection categories={categories} setIsSuccess={setIsSuccess}/>

      <SwiperNews list={newsList} />

      <TelephonizationIndexPage setIsOpen={setIsOpen} setIsSuccess={setIsSuccess} />

      <AnyQuestion setIsOpen={setIsOpen} />

      <Faq setIsOpen={setIsOpen} />

      <div className='test'></div>

    </div>

  )
}

// created client
const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN,
});

// get data from contentful
export async function getStaticProps() {

  try {
    const data = await client.getEntries({
      content_type: 'donNetworkNews',
    })

    // console.log("data------- ", data)

    return {
      props: {
        newsList: data
      }
    }
  }
  catch {
    return {
      props: {
        newsList: null
      }
    }
  }

}
