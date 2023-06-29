import React, { FC } from 'react';
import { IHighLightItem } from "@/components/HighLightsAndGridNews/types";
import Image from "next/image";
import playIcon from "@/assets/play-icon.svg";
import photoIcon from "@/assets/photo-icon.svg";
import lightningIcon from "@/assets/lightning-icon.svg";

export const HighLightItem: FC<IHighLightItem> = ({ text, icon }) => {
  const setIcon = () => {
    switch (icon) {
      case 'play': return playIcon
      case 'photo': return photoIcon
      case 'lighting': return lightningIcon
      default: return playIcon
    }
  }

  return (
    <li className="flex mb-[11px] last:mb-0">
      <Image className="w-[17px] h-[17px] mt-[3px] mr-[8px]" src={setIcon()} alt="Play Icon" />
      <p className="text-sm text-[#E7E7E7]">{text}</p>
    </li>
  )
}
