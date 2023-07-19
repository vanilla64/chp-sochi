import { TagType } from "@/models/tags";
import { StaticImageData } from "next/image";
import img1 from '../assets/mock/more-news/pic-1.png';
import img2 from '../assets/mock/more-news/pic-2.png';

import img1_1 from '../assets/mock/secondary-news/img-1.png';
import img2_2 from '../assets/mock/secondary-news/img-2.png';
import img3 from '../assets/mock/secondary-news/img-3.png';
import img4 from '../assets/mock/secondary-news/img-4.png';
import img6 from '../assets/mock/secondary-news/img-6.png';
import img7 from '../assets/mock/secondary-news/img-7.png';
import img8 from '../assets/mock/secondary-news/img-8.png';
import img9 from '../assets/mock/secondary-news/img-9.png';

interface IDataItem {
  date: string
  text: string
  tag: TagType
  img: StaticImageData
}

interface ISmallNewsItem {
  date: string
  text: string
}

const text = 'Тестовый контент, который не должен нести никакого смысла,\n' +
  '  лишь показать наличие самого текста или продемонстрировать\n' +
  'типографику в деле.\n' +
  '\n' +
  '  Тестовый контент, который не должен нести никакого смысла,\n' +
  '  лишь показать наличие самого текста или продемонстрировать\n' +
  'типографику в деле.'

export const newsFakeData: IDataItem[] = [
  {
    date: '18 июня, 12:25',
    text,
    tag: 'Эксклюзив',
    img: img1,
  },
  {
    date: '28 декабря, 14:55',
    text,
    tag: 'Новости',
    img: img2,
  },

  {
    date: '18 июня, 12:25',
    text,
    tag: 'Эксклюзив',
    img: img1,
  },
  {
    date: '28 декабря, 14:55',
    text,
    tag: 'Новости',
    img: img1,
  },
  {
    date: '18 июня, 12:25',
    text,
    tag: 'Эксклюзив',
    img: img2,
  },
]

export const secondaryNewsFakeData: IDataItem[] = [
  {
    date: '28 декабря, 14:55',
    text,
    tag: 'Новости',
    img: img1_1,
  },
  {
    date: '28 декабря, 14:55',
    text,
    tag: 'Эксклюзив',
    img: img2_2,
  },
  {
    date: '28 декабря, 14:55',
    text,
    tag: 'Новости',
    img: img3,
  },
  {
    date: '28 декабря, 14:55',
    text,
    tag: 'Новости',
    img: img4,
  },
  {
    date: '28 декабря, 14:55',
    text,
    tag: 'Новости',
    img: img1,
  },
  {
    date: '28 декабря, 14:55',
    text,
    tag: 'Новости',
    img: img6,
  },
  {
    date: '28 декабря, 14:55',
    text,
    tag: 'Эксклюзив',
    img: img7,
  },
  {
    date: '28 декабря, 14:55',
    text,
    tag: 'Новости',
    img: img8,
  },
  {
    date: '28 декабря, 14:55',
    text,
    tag: 'Новости',
    img: img9,
  },
]

export const smallNewsFakeData: ISmallNewsItem[] = [
  {
    date: '28 декабря, 14:55',
    text,
  },
  {
    date: '18 июня, 12:25',
    text,
  },

  {
    date: '28 декабря, 14:55',
    text,
  },
  {
    date: '18 июня, 12:25',
    text,
  },
  {
    date: '28 декабря, 14:55',
    text,
  },
  {
    date: '18 июня, 12:25',
    text,
  },
]
