import React, {ReactNode} from 'react';
import {NextPage} from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation/Navigation";
import logo from "@/assets/header-logo.svg";
import { LayoutWrapper } from "@/components/LayoutWrapper/LayoutWrapper";
import { SocialMediaLinks } from "@/components/SocialMediaLinks/SocialMediaLinks";
import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";

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
