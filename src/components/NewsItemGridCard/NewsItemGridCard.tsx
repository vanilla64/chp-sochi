import React, { FC } from 'react';
import { CardBgImage } from "@/components/CardBgImage/CardBgImage";
import { Overlay } from "@/components/Overlay/Overlay";
import { CardDescription } from "@/components/CardDecription/CardDescription";
import { StaticImageData } from "next/image";
import { TagType } from "@/models/tags";

interface Props {
  date?: string
  text: string
  tag: TagType
  img: StaticImageData
  size?: 's' | 'm'
  height?: number
  colSpan?: 2 | 3 | 4 | 6 | 12
  withBackground?: boolean
}

export const NewsItemGridCard: FC<Props> = ({
  date,
  text,
  tag,
  img,
  size = 'm',
  colSpan,
  height,
  withBackground = false,
}) => {
  const className = size === 's'
    ? 'bg-[#202020] rounded-[15px] w-full h-full overflow-hidden relative'
    : `bg-[#2D2D2D] rounded-[15px] overflow-hidden relative`

  return (
    <li
      style={{ gridColumn: `span ${colSpan} / span ${colSpan}`, height }}
      className={className}
    >
      <CardBgImage img={img} />
      <Overlay />
      <CardDescription
        date={date}
        tag={tag}
        text={text}
        size={size}
        withBackground={withBackground}
      />
    </li>
  )
}
