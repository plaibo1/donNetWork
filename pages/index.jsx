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
import { client } from '../utils/client';
import { NEWS_ENTRY } from '../utils/variables';


export default function Home({newsList}) {

  const [isOpen, setIsOpen] = useState(false) // ModalFrom component
  const [isSuccess, setIsSuccess] = useState(false) // ModalSuccess component
  const [userNumber, setUserNumber] = useState(false) // user number from phoneForm

  return (
    <div>
      <Head>
        <title>Донтехсвязь - интернет-провайдер в Ростове-на-Дону</title>
        <meta name='title' title='Донтехсвязь - интернет-провайдер в Ростове-на-Дону' />
        <meta name='og:title' title='Донтехсвязь - интернет-провайдер в Ростове-на-Дону' />
        <meta name="description" content="Интернет, ТВ и услуги телефонизации в Ростове-на-Дону для дома и бизнеса" />
        <meta name="og:description" content="Интернет, ТВ и услуги телефонизации в Ростове-на-Дону для дома и бизнеса" />
      </Head>

      <Modal modalStatus={isOpen} setModalStatus={setIsOpen}>
        <FormPopUp setIsOpen={setIsOpen} setIsSuccess={setIsSuccess} setUserNumber={setUserNumber}/>
      </Modal>

      <Modal modalStatus={isSuccess} setModalStatus={setIsSuccess}>
        {isSuccess && <SuccessModal setIsSuccess={setIsSuccess} userNumber={userNumber} />}
      </Modal>


      {/* page start */}

      <Hero setIsOpen={setIsOpen} setIsSuccess={setIsSuccess} setUserNumber={setUserNumber}/>

      <TariffSection setIsSuccess={setIsSuccess} setUserNumber={setUserNumber}/>

      <SwiperNews list={newsList} />

      <TelephonizationIndexPage setIsOpen={setIsOpen} setIsSuccess={setIsSuccess} setUserNumber={setUserNumber} />

      <AnyQuestion setIsOpen={setIsOpen} />

      <Faq setIsOpen={setIsOpen} />

    </div>

  )
}



// get data from contentful
export async function getStaticProps() {

  try {
    const data = await client.getEntries({
      content_type: NEWS_ENTRY,
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
