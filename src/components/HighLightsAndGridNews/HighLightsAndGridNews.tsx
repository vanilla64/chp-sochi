'use client'

import React, { FC } from 'react';
import { LayoutWrapper } from "@/components/LayoutWrapper/LayoutWrapper";
import { HighLightItem } from "@/components/HighLightsAndGridNews/HighLightItem";
import { highLightConfig, highLightGridConfig } from "@/components/HighLightsAndGridNews/mock";
import { NewsItemGridCard } from "@/components/NewsItemGridCard/NewsItemGridCard";
import { SwiperSlide } from 'swiper/react';
import { NewsSlider } from "@/components/NewsSlider/NewsSlider";

export const HighLightsAndGridNews: FC = () => {
  // @ts-ignore
  return (
    <section className="w-full bg-[#2D2D2D]">
      <LayoutWrapper>
        <div
          className="
            max-xl:grid-cols-1 max-xl:grid-rows-2 max-[491px]:grid-rows-none
            grid gap-7 grid-cols-2
          "
        >
          <ul className="bg-[#202020] py-[35px] px-[28px] rounded-[15px]">
            {highLightConfig.map(({ text, icon}, index) => (
              <HighLightItem key={index * Math.random()} text={text} icon={icon} />
            ))}
          </ul>

          <ul
            className="
              max-[491px]:grid-cols-1 max-[491px]:hidden
              grid gap-7 grid-cols-2 grid-rows-2
            "
          >
            {highLightGridConfig.map(({ tag, text, img }, index) => (
              <NewsItemGridCard
                key={Math.random() * index}
                text={text}
                tag={tag}
                img={img}
                size="s"
              />
            ))}
          </ul>

          <NewsSlider>
            {highLightGridConfig.map(({ tag, text, img }, index) => (
              <SwiperSlide key={Math.random() * index}>
                <NewsItemGridCard
                  text={text}
                  tag={tag}
                  img={img}
                  size="s"
                />
              </SwiperSlide>
            ))}
          </NewsSlider>
        </div>
      </LayoutWrapper>
    </section>
  )
}
