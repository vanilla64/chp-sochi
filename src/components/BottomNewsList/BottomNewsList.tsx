'use client'

import React, { FC } from 'react';
import { secondaryNewsFakeData } from "@/mock/newsMock";
import { NewsItemGridCard } from "@/components/NewsItemGridCard/NewsItemGridCard";
import useResize from "@/hooks/useResize";

export const BottomNewsList: FC = () => {
  const width = useResize()

  const getBigColSpan = (index: number) => {
    if (width < 769 && width >= 526) return index === 2 ? 12 : 6
    if (width < 526) return 12
    return 4
  }

  const getSmallColSpan = () => {
    if (width < 769 && width >= 526) return 6
    if (width < 526) return 12
    return 3
  }

  return (
    <ul className="grid gap-7 grid-cols-12">
      {
        secondaryNewsFakeData
          .filter((i, index) => index < 7)
          .map(({ date, text, tag, img }, index) => {
            if (index < 3) return (
              <NewsItemGridCard
                key={Math.random() * index}
                date={date}
                text={text}
                tag={tag}
                img={img}
                height={366}
                // colSpan={
                //   width < 769
                //     ? index === 2 ? 12 : 6
                //     : 4
                // }
                colSpan={getBigColSpan(index)}
                withBackground
              />
            )

            return (
              <NewsItemGridCard
                key={Math.random() * index}
                text={text}
                tag={tag}
                img={img}
                height={191}
                colSpan={getSmallColSpan()}
                size="s"
              />
            )
          })
      }
    </ul>
  )
}
