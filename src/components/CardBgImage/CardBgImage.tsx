import React, { FC } from 'react';
import Image, {StaticImageData} from "next/image";

interface Props {
  img: StaticImageData
}

export const CardBgImage: FC<Props> = ({ img }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-1">
      <Image className="object-cover w-full h-full" src={img} alt="Image" />
    </div>
  )
}
