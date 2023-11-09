import Head from "next/head";
import { useState } from "react";
import FormPopUp from "../components/FormPopUp/FormPopUp";
import Hero from "../components/Hero/Hero";
import Modal from "../components/Modal/Modal";
import SwiperNews from "../components/SwiperNews/SwiperNews";
import TariffSection from "../components/TariffSection/TariffSection";
import AnyQuestion from "../components/AnyQuestion/AnyQuestion";
import Faq from "../components/Faq/Faq";
import SuccessModal from "../components/SuccessModal/SuccessModal";
import { client } from "../utils/client";
import { NEWS_ENTRY, heroContentId } from "../utils/variables";
import { Contacts } from "../components/Contacts/Contacts";
// import { HowConnect } from "../components/HowConnect/HowConnect";

export default function Home({ newsList, heroData /*advantagesData*/ }) {
  const [isOpen, setIsOpen] = useState(false); // ModalFrom component
  const [isSuccess, setIsSuccess] = useState(false); // ModalSuccess component
  const [userNumber, setUserNumber] = useState(false); // user number from phoneForm

  return (
    <div>
      <Head>
        <title>Донтехсвязь - интернет-провайдер в Ростове-на-Дону</title>
        <meta
          name="title"
          title="Донтехсвязь - интернет-провайдер в Ростове-на-Дону"
        />
        <meta
          name="og:title"
          title="Донтехсвязь - интернет-провайдер в Ростове-на-Дону"
        />
        <meta
          name="description"
          content="Интернет, ТВ и услуги телефонизации в Ростове-на-Дону для дома и бизнеса"
        />
        <meta
          name="og:description"
          content="Интернет, ТВ и услуги телефонизации в Ростове-на-Дону для дома и бизнеса"
        />
      </Head>
      <Modal modalStatus={isOpen} setModalStatus={setIsOpen}>
        <FormPopUp
          setIsOpen={setIsOpen}
          setIsSuccess={setIsSuccess}
          setUserNumber={setUserNumber}
        />
      </Modal>
      <Modal modalStatus={isSuccess} setModalStatus={setIsSuccess}>
        {isSuccess && (
          <SuccessModal setIsSuccess={setIsSuccess} userNumber={userNumber} />
        )}
      </Modal>

      {/* page start */}
      <Hero
        id={"hero"}
        heroData={heroData}
        setIsOpen={setIsOpen}
        setIsSuccess={setIsSuccess}
        setUserNumber={setUserNumber}
      />

      {/* <TariffSection id="whatConnection" /> */}

      <SwiperNews id="news" list={newsList} />

      {/* <TelephonizationIndexPage
        setIsOpen={setIsOpen}
        setIsSuccess={setIsSuccess}
        setUserNumber={setUserNumber}
        id="telephonization"
      /> */}

      {/* <Advantages advantagesData={advantagesData} id="advantages" /> */}

      {/* <HowConnect /> */}

      <AnyQuestion />

      <Faq id="faq" />

      <Contacts id={"contacts"} />
    </div>
  );
}

// get data from contentful
export async function getServerSideProps() {
  try {
    const newsData = await client.getEntries({
      content_type: NEWS_ENTRY,
      limit: 15,
      order: "-sys.createdAt",
    });

    // const advantagesData = await client.getEntries({
    //   content_type: ADVANTAGES_ENTRY,
    // });

    const heroData = await client.getEntry(heroContentId);

    return {
      props: {
        newsList: newsData,
        heroData: heroData.fields,
        // advantagesData: advantagesData.items.map(({ fields }) => fields),
      },
    };
  } catch {
    return {
      props: {
        newsList: null,
        heroData: {
          headingBlack: "Домашний интернет",
          accentText: "в Ростове-на-Дону",
          description:
            "Более 20000 абонентов в Советском, Железнодорожном и Ленинском районах Ростова-на-Дону.",
        },
        advantagesData: null,
      },
    };
  }
}
