import React, { FC } from 'react';
import Image from "next/image";
import vkLogo from '../../assets/ei_sc-vk.svg'
import ytLogo from '../../assets/bx_bxl-youtube.svg'
import tgLogo from '../../assets/bxl_telegram.svg'

type LinkItem = {
  name: string
  img: string
  url: string
}

export const SocialMediaLinks: FC = () => {
  const linkConfig: LinkItem[] = [
    {
      name: 'VK',
      img: vkLogo,
      url: 'https://www.vk.com/',
    },
    {
      name: 'YouTube',
      img: ytLogo,
      url: 'https://www.youtube.com/',
    },
    {
      name: 'Telegram',
      img: tgLogo,
      url: 'https://www.t.me/',
    },
  ]

  return (
    <ul className="w-[111px] flex items-center justify-between">
      {
        linkConfig.map(({ name, img, url }) => (
          <li
            key={name + url}
            className="w-[33px] h-[33px] flex items-center justify-center bg-[#2D2D2D] rounded-[50%] border-slate-950/[.20] border-solid border-2 hover:opacity-80 duration-100"
          >
            <a href={url} target="_blank">
              <Image className="w-[23px] h-[23px] object-contain" src={img} alt={name} />
            </a>
          </li>
        ))
      }
    </ul>
  )
}
