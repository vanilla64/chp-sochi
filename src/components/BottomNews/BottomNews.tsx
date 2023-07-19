import React, { FC } from 'react';
import { LayoutWrapper } from "@/components/LayoutWrapper/LayoutWrapper";
import { NewsMini } from "@/components/NewsMini/NewsMini";
import { BottomNewsList } from "@/components/BottomNewsList/BottomNewsList";

export const BottomNews: FC = () => {
  return (
    <section className="w-full">
      <LayoutWrapper>
        <div className="grid gap-7">
          <NewsMini />
          <BottomNewsList />
        </div>
      </LayoutWrapper>
    </section>
  )
}
