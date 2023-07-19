'use client'

import React, { FC } from 'react';
import styles from './Navigation.module.css';
import Link from "next/link";
import { SocialMediaLinks } from "@/components/SocialMediaLinks/SocialMediaLinks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setIsBurgerOpen } from "@/redux/slices/burgerSlice";

type RouteItem = {
  name: string
  url: string
}

export const Navigation: FC = () => {
  const dispatch = useAppDispatch()
  const { isBurgerOpen} = useAppSelector(({ burgerReducer }) => burgerReducer)

  const routes: RouteItem[] = [
    {
      name: 'Главная',
      url: '/',
    },
    {
      name: 'Новости',
      url: '/news-feed',
    },
    {
      name: 'Лонгриды',
      url: '/longreads',
    },
    {
      name: 'Специальные проекты',
      url: '/special-projects'
    },
    {
      name: 'Редакция',
      url: '/about',
    },
  ]

  const classes = {
    navigation: isBurgerOpen
      ? `${styles.navigationList} ${styles.navigationList_open}`
      : styles.navigationList
  }

  return (
    <nav>
      <ul
        className={`
          ${classes.navigation}
          flex flex-col justify-between items-center absolute max-xl:top-[86px]
          left-0 bg-[#323232] rounded-[15px] shadow-md p-3 w-full
          xl:flex-row xl:justify-between xl:min-w-[620px] xl:relative xl:bg-transparent xl:p-0 xl:shadow-none
        `}
      >
        {routes.map(({ name, url }) => (
          <li
            key={name + url}
            className="
              mb-7 last:mb-0
              xl:mr-1 xl:mb-0
            "
          >
            <Link
              href={url}
              onClick={() => dispatch(setIsBurgerOpen(false))}
              className="text-sm uppercase hover:opacity-70 duration-100"
            >
              {name}
            </Link>
          </li>
        ))}
        <li
          className="
            mb-7 last:mb-0
            xl:mr-1 xl:mb-0 xl:hidden
          "
        >
          <span className="text-red-500">mail87564986@mail.ru</span>
        </li>

        <li className="xl:hidden">
          <SocialMediaLinks />
        </li>
      </ul>
    </nav>
  )
}
