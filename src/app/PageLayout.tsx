import React, { ReactNode } from 'react';
import { NextPage } from "next";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

interface Props {
  children: ReactNode
}
export const PageLayout: NextPage<Props> = ({ children }) => {
  return (
    <body>
      <Header />
      <main className="flex min-h-[55vh] flex-col items-center justify-between">{children}</main>
      <Footer />
    </body>
  )
}
