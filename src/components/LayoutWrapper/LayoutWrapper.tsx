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
    <div className={`container mx-[auto] py-[60px] px-[100px] relative ${classStr && classStr}`}>{children}</div>
  )
}
