import Image from "next/image";
import {
  ContainerLayout,
  PageContainer,
} from "../components/ContainerLayout/ContainerLayout";
import { client } from "../utils/client";
import { LICENSES_ENTRY } from "../utils/variables";

const PrivacyPage = ({ licenses }) => {
  return (
    <PageContainer>
      <ContainerLayout>
        <div className="mb-10">
          <h1 className="text-2xl md:text-5xl font-extrabold mb-3 leading-[1.1]">
            Лицензии
          </h1>

          <div className="w-24 h-2 bg-baseColor rounded-xl"></div>
        </div>

        <div>
          {licenses.map(({ fields, sys }) => {
            return (
              <div key={sys.id} className="mb-10">
                <h2 className="text-2xl font-bold mb-2">{fields.title}</h2>
                <p className="text-xl mb-2">{fields.description}</p>
                <div className="mb-6">{fields.date}</div>

                <div className="flex justify-center items-center">
                  <a
                    href={`https:${fields.image.fields.file.url}`}
                    target="_blank"
                    className="inline-block relative border border-slate-100 rounded-xl shadow-md"
                    rel="noreferrer"
                  >
                    <Image
                      width={fields.image.fields.file.details.image.width / 3}
                      height={fields.image.fields.file.details.image.height / 3}
                      // layout="responsive"
                      objectFit="contain"
                      src={`https:${fields.image.fields.file.url}`}
                      alt={fields.image.fields.title}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </ContainerLayout>
    </PageContainer>
  );
};

export default PrivacyPage;

export async function getServerSideProps() {
  try {
    const licensesData = await client.getEntries({
      content_type: LICENSES_ENTRY,
      order: "-sys.createdAt",
    });

    return {
      props: {
        licenses: licensesData.items,
      },
    };
  } catch (err) {
    console.log("🚀 license getServerSideProps ~ err:", err);
    return {
      props: {},
    };
  }
}
