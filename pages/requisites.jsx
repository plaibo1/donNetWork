import Link from "next/link";
import {
  ContainerLayout,
  PageContainer,
} from "../components/ContainerLayout/ContainerLayout";
import { HeadingLeft } from "../components/Headings/Headings";

const Requisites = () => {
  return (
    <PageContainer>
      <ContainerLayout>
        <HeadingLeft title="Реквизиты" subTitle={null} />

        <p>
          Общество с ограниченной ответственностью {`"`}Донтехсвязь{`"`}
        </p>
        <p>
          Юридический адрес: Россия, 344082, г. Ростов-на-Дону, ул. М. Горького,
          23 а.
        </p>
        <p>Почтовый адрес: Россия, 344001, г.Ростов-на-Дону, ул.Межевая, 160</p>
        <p>
          тел.(863)202-00-00, факс(863) 236-00-03 ИНН 6164106737, ОГРН
          1166196058434
        </p>
        <p>
          КПП 616401001, ОКПО 12143271 Р/С 40702810852090012366 Юго-западный
          банк
        </p>
        <p>
          ПАО {`"`}Сбербанк России{`"`} г. Ростов-на-Дону БИК 046015602 К/С
        </p>
        <p>
          30101810600000000602 Генеральный директор АХУНДОВ АЛЛАХВЕРДИ МИРЗАГА
          ОГЛЫ
        </p>

        {/* link */}
        <div className="mt-10 w-full flex justify-center">
          <Link href={"/"}>
            <a
              className="w-full sm:w-[500px] flex items-center justify-center px-8 py-3 border border-transparent 
                        text-base font-medium rounded-md text-white bg-baseColor hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Обратно на сайт
            </a>
          </Link>
        </div>
      </ContainerLayout>
    </PageContainer>
  );
};

export default Requisites;
