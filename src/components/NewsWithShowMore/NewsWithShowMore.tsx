'use client'

import React, { FC } from 'react';
import { LayoutWrapper } from "@/components/LayoutWrapper/LayoutWrapper";
import { newsFakeData } from '@/mock/newsMock';
import { NewsItemGridCard } from "@/components/NewsItemGridCard/NewsItemGridCard";
import { NewsSlider } from "@/components/NewsSlider/NewsSlider";
import { SwiperSlide } from "swiper/react";

export const NewsWithShowMore: FC = () => {
  return (
    <section className="w-full">
      <LayoutWrapper>
        <ul className="grid gap-7 grid-cols-6 grid-rows-2 max-md:hidden">
          {
            newsFakeData.map((
              { date, text, tag, img }, index
            ) => {
              if (index <= 1) return (
                <NewsItemGridCard
                  key={Math.random() * index}
                  date={date}
                  text={text}
                  tag={tag}
                  img={img}
                  height={412}
                  colSpan={3}
                  size="m"
                />
              )

              return (
                <NewsItemGridCard
                  key={Math.random() * index}
                  date={date}
                  text={text}
                  tag={tag}
                  img={img}
                  height={412}
                  colSpan={2}
                  size="m"
                  withBackground
                />
              )
            })
          }
        </ul>

        <NewsSlider height={412} hideWidth={768}>
          {
            newsFakeData.map((
              { date, text, tag, img }, index
            ) => {
              return (
                <SwiperSlide key={Math.random() * index}>
                  <NewsItemGridCard
                    date={date}
                    text={text}
                    tag={tag}
                    img={img}
                    height={412}
                    colSpan={2}
                    size="m"
                    withBackground
                  />
                </SwiperSlide>
              )
            })
          }
        </NewsSlider>

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
