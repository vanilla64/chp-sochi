import React, { FC } from 'react';
import { IHighLightsGridItem } from "@/components/HighLightsAndGridNews/types";
import { CardDescription } from "@/components/CardDecription/CardDescription";
import { Overlay } from "@/components/Overlay/Overlay";
import { CardBgImage } from "@/components/CardBgImage/CardBgImage";

export const HighLightGridItem: FC<IHighLightsGridItem> = ({ text, tag, img }) => {
  return (
    <li className="bg-[#202020] rounded-[15px] w-full h-full overflow-hidden relative">
      <CardBgImage img={img} />
      <Overlay />
      <CardDescription tag={tag} text={text} />
    </li>
  )
}
