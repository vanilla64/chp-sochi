'use client'

import { LayoutWrapper } from "@/components/LayoutWrapper/LayoutWrapper";
import { secondaryNewsFakeData } from "@/mock/newsMock";
import { NewsItemGridCard } from "@/components/NewsItemGridCard/NewsItemGridCard";
import { useResize } from "@/hooks/useResize";

export const SecondaryNews = () => {
  const width = useResize(window.screen.width)

  const getColspan = () => {
    if (width < 1025 && width >= 551) return 6
    if (width < 551) return 12
    return 3
  }

  return (
    <section className="w-full bg-[#2D2D2D]">
      <LayoutWrapper>
        <ul className="grid gap-7 grid-cols-12">
          {
            secondaryNewsFakeData.map(({ date, text, tag, img }, index) => {
              if (index < 4) return (
                <NewsItemGridCard
                  key={Math.random() * index}
                  date={date}
                  text={text}
                  tag={tag}
                  img={img}
                  height={298}
                  colSpan={getColspan()}
                  size="s"
                  withBackground
                />
              )

              if (index >= 4 && index < 7) return (
                <NewsItemGridCard
                  key={Math.random() * index}
                  date={date}
                  text={text}
                  tag={tag}
                  img={img}
                  height={366}
                  colSpan={width < 769 ? 12 : 4}
                  size="s"
                  withBackground
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
                  colSpan={width < 769 ? 12 : 6}
                  size="m"
                />
              )
            })
          }
        </ul>
      </LayoutWrapper>
    </section>
  )
}
