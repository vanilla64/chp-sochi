import React, { FC } from 'react';
import { LayoutWrapper } from "@/components/LayoutWrapper/LayoutWrapper";
import Image from "next/image";
import footerLogo from '../../assets/footer-logo.svg'
import { Navigation } from "@/components/Navigation/Navigation";
import { SocialMediaLinks } from "@/components/SocialMediaLinks/SocialMediaLinks";
import mailIcon from '../../assets/ion_mail.svg'

export const Footer: FC = () => {
  return (
    <footer className="bg-[#2D2D2D] border-t-[1px] border-t-[#202020]">
      <LayoutWrapper classStr="py-[25px]">
        <div className="
            flex items-center justify-between relative
            max-sm:flex-col max-sm:h-[250px]
          "
        >
          <Image className="w-[112px] h-[112px] mr-[45px] max-sm:mr-0" src={footerLogo} alt="Footer logo" />
          {/*<Navigation />*/}
          <div className="h-[21px] flex items-center justify-between">
            <Image src={mailIcon} alt="mailIcon" />
            <p className="text-sm text-[#C7C7C7]">mail87564986@mail.ru</p>
          </div>
          <SocialMediaLinks />
        </div>
      </LayoutWrapper>
      <p className="text-center text-[#E7E7E7] py-[14px] bg-[#202020]">&copy;{` ${new Date().getFullYear()} Все права защищены`}</p>
    </footer>
  )
}
