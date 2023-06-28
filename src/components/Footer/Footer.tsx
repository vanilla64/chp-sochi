import React, { FC } from 'react';
import { LayoutWrapper } from "@/components/LayoutWrapper/LayoutWrapper";
import Image from "next/image";
import footerLogo from '../../assets/footer-logo.svg'
import Navigation from "@/components/Navigation/Navigation";
import { SocialMediaLinks } from "@/components/SocialMediaLinks/SocialMediaLinks";
import mailIcon from '../../assets/ion_mail.svg'

export const Footer: FC = () => {
  return (
    <footer>
      <LayoutWrapper classStr="py-[25px]">
        <div className="flex items-center justify-between">
          <Image className="w-[112px] h-[112px] mr-[45px]" src={footerLogo} alt="Footer logo" />
          <Navigation />
          <div className="h-[21px] flex items-center justify-between">
            <Image src={mailIcon} alt="mailIcon" />
            <p className="text-sm text-[#C7C7C7]">mail87564986@mail.ru</p>
          </div>
          <SocialMediaLinks />
        </div>
      </LayoutWrapper>
    </footer>
  )
}
