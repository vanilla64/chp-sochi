import React, { FC, ReactNode } from 'react';
import styles  from './NewsSlider.module.css'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Props {
  children: ReactNode
  height?: number
  hideWidth?: 491 | 768
}

export const NewsSlider: FC<Props> = ({ children, height = 250, hideWidth = 491 }) => {
  return (
    <Swiper
      pagination={{ type: 'progressbar' }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false, }}
      className={`${styles.slider} ${styles[`slider_hide_${hideWidth}`]} w-full min-[491px]:hidden`}
      // @ts-ignore
      style={{ '--swiper-navigation-color': '#E72945', '--swiper-pagination-color': '#E72945', height }}
    >
      {children}
    </Swiper>
  )
}
