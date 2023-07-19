import React from 'react';
import { LayoutWrapper } from "@/components/LayoutWrapper/LayoutWrapper";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { PageLayout } from "@/app/PageLayout";

function About() {
  const textInfo: string[] = [
    'ООО «Название организации» (ОГРН 114589677746534900)',
    'Адрес местонахождения редакции: 127015, г. Москва, Пример\n' +
    'адреса, дом 100, строение 2, эт. 4, пом. I.',
    'По вопросам партнерства, коммерческим предложениям \n' +
    'и спец проектам: ',
  ]

  const mail =
    <span className="text-red-600 underline hover:cursor-pointer hover:opacity-80 duration-200">info21586@yu.ru</span>

  return (
    <PageLayout>
      <section className="w-full bg-[#2D2D2D]">
        <LayoutWrapper>
          <PageTitle title="Редакция" />
          {
            textInfo.map((text, index, selfArr) => {
              return (
                <p
                  key={Math.random() * index}
                  className="text-[#ADADAD] text-base mb-[16px] last:mb-0"
                >
                  {text}
                  {index === selfArr.length - 1 && mail}
                </p>
              )
            })
          }
        </LayoutWrapper>
      </section>
    </PageLayout>
  )
}

export default About
