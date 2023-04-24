import React, { useEffect, useState } from "react";
import { ContainerLayout } from "../ContainerLayout/ContainerLayout";
import { HeadingLeft } from "../Headings/Headings";

import { TariffCard } from "./TariffCard";
import { client } from "../../utils/client";
import { TARIFFS_ENTRY } from "../../utils/variables";
import { TariffOffice } from "./TariffOffice/TariffOffice";

const TariffSection = ({ id: sectionId }) => {
  const [tariffData, setTariffData] = useState([]);

  useEffect(() => {
    const fetchTariffData = async () => {
      try {
        const data = await client.getEntries({
          content_type: TARIFFS_ENTRY,
        });

        const sortAndCleanData = data.items
          .map(({ fields }) => fields)
          .sort((a, b) => a.order - b.order);

        setTariffData(sortAndCleanData);
      } catch (error) {
        console.log("failed fetchTariffData: ", error);
      }
    };
    fetchTariffData();
  }, []);

  return (
    <section id={sectionId}>
      <ContainerLayout>
        <HeadingLeft
          title={"Куда проводим?"}
          subTitle={"Выберите куда хотите подключить интернет"}
        />

        <div className="flex flex-col sm:grid sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tariffData?.map((tariff, index) => (
            <TariffCard key={index} tariff={tariff} />
          ))}

          <TariffOffice />
        </div>
      </ContainerLayout>
    </section>
  );
};

export default TariffSection;
