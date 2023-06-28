import React, { FC } from 'react';
import { LayoutWrapper } from "@/components/LayoutWrapper/LayoutWrapper";
import { HighLightItem } from "@/components/HighLightsAndGridNews/HighLightItem";
import { highLightConfig } from "@/components/HighLightsAndGridNews/mock";
import Image from "next/image";

export const HighLightsAndGridNews: FC = () => {
  return (
    <section className="w-full bg-[#2D2D2D]">
      <LayoutWrapper>
        <div className="grid gap-7 grid-cols-2">
          <ul className="bg-[#202020] py-[35px] px-[28px] rounded-[15px]">
            {highLightConfig.map(({ text, icon }, index) => (
              <HighLightItem key={index * Math.random()} text={text} icon={icon} />
            ))}
          </ul>

          <ul className="grid gap-7 grid-cols-2 grid-rows-2">
            <li className="bg-[#202020] rounded-[15px] w-full h-full overflow-hidden relative">
              {/*<Image src={} alt={} />*/}

              {/*<div>*/}
              {/*  <span className="text-center text-[10px] text-[#E72945] uppercase p-[10px] rounded-[250px] bg-black/[.07]">Эксклюзив</span>*/}
              {/*  <p></p>*/}
              {/*</div>*/}
            </li>

            <li className="bg-[#202020] rounded-[15px] w-full h-full">

            </li>

            <li className="bg-[#202020] rounded-[15px] w-full h-full">

            </li>

            <li className="bg-[#202020] rounded-[15px] w-full h-full">

            </li>
          </ul>
        </div>
      </LayoutWrapper>
    </section>
  )
}
