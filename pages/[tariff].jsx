import React from "react";
import { TARIFFS_ENTRY } from "../utils/variables";
import { client, parse } from "../utils/client";
import Head from "next/head";
import {
  ContainerLayout,
  PageContainer,
} from "../components/ContainerLayout/ContainerLayout";
import Image from "next/image";
import Link from "next/link";
import { prettifyTariffsData } from "../utils/prettifyTariffsData";
import { TariffList } from "../components/TariffList/TariffList";

export default function TariffPage({ tariffData }) {
  const tariffs = prettifyTariffsData(tariffData);

  return (
    <PageContainer>
      <Head>
        <title>Тарифы Донтехсвязь - {tariffData.tariffName}</title>

        <meta
          name="title"
          title={`Получите доступ к выгодному домашнему интернету в Ростове-на-Дону с тарифами и ценами от компании Донтехсвязь`}
        />
        <meta
          name="og:title"
          title={`Получите доступ к выгодному домашнему интернету в Ростове-на-Дону с тарифами и ценами от компании Донтехсвязь`}
        />
        <meta
          name="description"
          content="Получите доступ к широкому спектру услуг, таких как интернет, телевидение и телефония, предоставляемых в Ростове-на-Дону как для домашнего использования, так и для бизнеса."
        />
        <meta
          name="og:description"
          content="Получите доступ к широкому спектру услуг, таких как интернет, телевидение и телефония, предоставляемых в Ростове-на-Дону как для домашнего использования, так и для бизнеса."
        />
      </Head>

      <ContainerLayout>
        <div className="flex gap-2 mb-5 flex-col items-start sm:flex-row sm:items-center sm:gap-4 sm:mb-12">
          <Image
            src={`https:${tariffData.thumbnail.fields.file.url}`}
            width={96}
            height={94}
            objectFit="contain"
            alt="донтехсвязь tariff image"
            blurDataURL={`https:${tariffData.thumbnail.fields.file.url}`}
            placeholder="blur"
          />

          <h1 className="text-2xl md:text-5xl font-extrabold mb-3 leading-[1.1]">
            <Link href="/#whatConnection">
              <a className="hover:text-slate-400">Тарифы</a>
            </Link>
            {" / "}
            <span className="text-baseColor">{tariffData.tariffName}</span>
          </h1>
        </div>

        <TariffList tariffs={tariffs} />
      </ContainerLayout>
    </PageContainer>
  );
}

export async function getServerSideProps({ params }) {
  const { tariff } = params;

  try {
    const fetchedTariffData = await client.getEntries({
      content_type: TARIFFS_ENTRY,
      "fields.slug[in]": tariff,
    });

    const tariffData = parse(fetchedTariffData.items[0].fields);

    return {
      props: {
        tariffData,
      },
    };
  } catch (err) {
    console.log("🚀👾 tariff failed with: ", err);

    return {
      notFound: true,
    };
  }
}
