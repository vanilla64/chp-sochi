import React, { ReactNode } from 'react';
import { NextPage } from "next";

interface Props {
  children: ReactNode
  classStr?: string
}

export const LayoutWrapper: NextPage<Props> = ({
  children,
  classStr,
}) => {
  return (
    <div
      className={`
        relative container mx-[auto] pt-[16px] pb-[30px] px-[14px]
        xl:py-[60px] xl:px-[100px] ${classStr && classStr}
      `}
    >
      {children}
    </div>
  )
}
