import React, { FC } from 'react';
import { LayoutWrapper } from "@/components/LayoutWrapper/LayoutWrapper";
import { HighLightItem } from "@/components/HighLightsAndGridNews/HighLightItem";
import { highLightConfig, highLightGridConfig } from "@/components/HighLightsAndGridNews/mock";
import { HighLightGridItem } from "@/components/HighLightsAndGridNews/HighLightGridItem";

export const HighLightsAndGridNews: FC = () => {
  return (
    <section className="w-full bg-[#2D2D2D]">
      <LayoutWrapper>
        <div className="grid gap-7 grid-cols-2">
          <ul className="bg-[#202020] py-[35px] px-[28px] rounded-[15px]">
            {highLightConfig.map(({ text, icon}, index) => (
              <HighLightItem key={index * Math.random()} text={text} icon={icon} />
            ))}
          </ul>

          <ul className="grid gap-7 grid-cols-2 grid-rows-2">
            {highLightGridConfig.map(({ tag, text, img }, index) => (
              <HighLightGridItem key={index * Math.random()} tag={tag} text={text} img={img} />
            ))}
          </ul>
        </div>
      </LayoutWrapper>
    </section>
  )
}
