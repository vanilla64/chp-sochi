import React, { FC } from 'react';
import { LayoutWrapper } from "@/components/LayoutWrapper/LayoutWrapper";
import { CardDescription } from "@/components/CardDecription/CardDescription";
import { Overlay } from "@/components/Overlay/Overlay";
import { CardBgImage } from "@/components/CardBgImage/CardBgImage";
import { newsFakeData } from "@/components/NewsWithShowMore/mock";

export const NewsWithShowMore: FC = () => {
  return (
    <section className="w-full">
      <LayoutWrapper>
        <div className="grid gap-7 grid-cols-6 grid-rows-2">
          {
            newsFakeData.map((
              { date, text, tag, img }, index
            ) => {
              if (index <= 1) return (
                <div
                  key={Math.random() * index}
                  className="bg-[#2D2D2D] col-span-3 min-h-[412px] rounded-[15px] relative overflow-hidden"
                >
                  <CardBgImage img={img} />
                  <Overlay />
                  <CardDescription
                    date={date}
                    tag={tag}
                    text={text}
                    size="m"
                  />
                </div>
              )

              return (
                <div
                  key={Math.random() * index}
                  className="bg-[#2D2D2D] col-span-2 min-h-[412px] rounded-[15px] relative overflow-hidden"
                >
                  <CardBgImage img={img} />
                  <Overlay />
                  <CardDescription
                    date={date}
                    tag={tag}
                    text={text}
                    size="m"
                    withBackground
                  />
                </div>
              )
            })
          }
        </div>

        <button
          className="
            flex mx-auto mt-[30px] text-[15px] text-[#E72945] border-solid border-2 border-[#E72945]
            py-[15px] px-[36px] rounded-[250px] outline-none hover:opacity-70 duration-100
          "
        >
          Смотреть все
        </button>
      </LayoutWrapper>
    </section>
  )
}
