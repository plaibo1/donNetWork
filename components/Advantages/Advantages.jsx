import React from "react";
import { AdvantagesCard } from "./AdvantagesCard";
import { ContainerLayout } from "../ContainerLayout/ContainerLayout";
import { HeadingLeft } from "../Headings/Headings";

export const Advantages = ({ advantagesData, id: sectionId }) => {
  if (!advantagesData) return null;

  return (
    <section id={sectionId}>
      <ContainerLayout>
        <HeadingLeft
          title="Преимущества интернета Донтехсвязь"
          subTitle="Подключайтесь!"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10">
          {advantagesData.map((item, index) => {
            return (
              <AdvantagesCard
                key={index}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </ContainerLayout>
    </section>
  );
};
