import React from 'react';
import { LayoutWrapper } from "@/components/LayoutWrapper/LayoutWrapper";
import Image from "next/image";
import logo from "@/assets/header-logo.svg";
import { Navigation } from "@/components/Navigation/Navigation";
import { SocialMediaLinks } from "@/components/SocialMediaLinks/SocialMediaLinks";
import { Burger } from "@/components/Burger/Burger";

export const Header = () => {
  return (
    <header
      className="bg-cover bg-center bg-no-repeat bg-[url('../assets/bg-map-mono.png')] h-[100%] relative"
    >
      <div className="absolute top-0 left-0 w-[100%] h-[100%] z-0" style={{ background: 'linear-gradient(rgba(32, 32, 32, .99), rgba(32, 32, 32, .8))' }}/>
      <LayoutWrapper classStr="z-1">
        <div
          className="
            flex justify-center
            xl:items-center xl:justify-start xl:mb-[50px]
          "
        >
          <Image
            className="
              max-sm:w-[150px]
              max-xl:mb-[15px] xl:mr-[50px]
            "
            src={logo} alt="Logo"
          />

          <Burger />
          <Navigation />
        </div>

        <div className="flex items-center">
          <input
            className="
              max-xl:w-full
              h-[50px] outline-none py-[15px] px-[20px] placeholder:text-[15px] bg-[#2D2D2D] rounded-[250px]
              border-slate-950/[.20] border-solid border-2
              xl:w-[80%] xl:mr-[38px]
            "
            name="search"
            placeholder="Поиск"
          />

          <div className="max-xl:hidden">
            <SocialMediaLinks />
          </div>
        </div>
      </LayoutWrapper>
    </header>
  )
}
