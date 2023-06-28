import React, { FC } from 'react';
import Link from "next/link";

type RouteItem = {
  name: string
  url: string
}

export const Navigation: FC = () => {
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

  return (
    <nav>
      <ul className="flex flex-row justify-between min-w-[620px]">
        {routes.map(({ name, url }) => (
          <li className="mr-1" key={name + url}>
            <Link className="text-sm uppercase hover:opacity-70 duration-100" href={url}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
