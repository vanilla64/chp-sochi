import {TagType} from "@/models/tags";
import {StaticImageData} from "next/image";
import img1 from '../../assets/mock/more-news/pic-1.png'
import img2 from '../../assets/mock/more-news/pic-2.png'

interface IDataItem {
  date: string
  text: string
  tag: TagType
  img: StaticImageData
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
