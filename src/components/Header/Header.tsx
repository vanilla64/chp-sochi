import React from 'react';
import { LayoutWrapper } from "@/components/LayoutWrapper/LayoutWrapper";
import Image from "next/image";
import logo from "@/assets/header-logo.svg";
import Navigation from "@/components/Navigation/Navigation";
import { SocialMediaLinks } from "@/components/SocialMediaLinks/SocialMediaLinks";

export const Header = () => {
  return (
    <header
      className="bg-cover bg-center bg-no-repeat bg-[url('../assets/bg-map-mono.png')] h-[100%] relative"
    >
      <div className="absolute top-0 left-0 w-[100%] h-[100%] z-0" style={{ background: 'linear-gradient(rgba(32, 32, 32, .99), rgba(32, 32, 32, .8))' }}/>
      <LayoutWrapper classStr="z-1">
        <div className="flex items-center justify-start mb-[50px]">
          <Image className="mr-[50px]" src={logo} alt="Logo" />
          <Navigation />
        </div>

        <div className="flex items-center">
          <input
            className="w-[80%] h-[50px] outline-none py-[15px] px-[20px] placeholder:text-[15px] bg-[#2D2D2D] rounded-[250px] mr-[38px] border-slate-950/[.20] border-solid border-2"
            name="search"
            placeholder="Поиск"
          />

          <SocialMediaLinks />
        </div>
      </LayoutWrapper>
    </header>
  )
}
