import { TagType } from "@/models/tags";
import { StaticImageData } from "next/image";

export interface IHighLightItem {
  text: string
  icon: 'play' | 'photo' | 'lighting'
}

export interface IHighLightsGridItem {
  tag: TagType
  text: string
  img: StaticImageData
}
