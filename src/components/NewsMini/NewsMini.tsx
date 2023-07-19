'use client'

import React, { FC } from 'react';
import { smallNewsFakeData } from "@/mock/newsMock";
import { SmallNewsItem } from "@/components/SmallNewsItem/SmallNewsItem";
import { useResize } from "@/hooks/useResize";

export const NewsMini: FC = () => {
  const width = useResize(window.screen.width)

  return (
    <div
      className="
        grid gap-7 max-[769px]:grid-cols-none grid-cols-2 rounded-[15px] bg-[#2D2D2D] py-[35px] px-[45px]
        max-[531px]:py-[20px] max-[531px]:px-[22px]
      "
    >
      <ul className="grid gap-7 grid-rows-2">
        {
          smallNewsFakeData
            .filter((_, index) => index < 2)
            .map(({ date, text }, index) => (
              <SmallNewsItem key={Math.random() * index} date={date} text={text} size={width < 531 ? 's' : 'm'} />
            ))
        }
      </ul>

      <ul className="grid gap-7 max-[530px]:grid-cols-none grid-cols-2 grid-rows-2">
        {
          smallNewsFakeData
            .filter((_, index) => index > 1)
            .map(({ date, text }, index) => (
              <SmallNewsItem key={Math.random() * index} date={date} text={text} size="s" />
            ))
        }
      </ul>
    </div>

  )
}
