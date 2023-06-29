import React, { FC } from 'react';
import { TagType } from "@/models/tags";

interface Props {
  text: TagType
}

export const Tag: FC<Props> = ({ text}) => {
  return (
    <span
      className="
        text-center text-[10px] text-[#E72945] uppercase px-[10px] py-[6px]
        rounded-[250px] bg-black/[.70] box-border
      "
    >
      {text}
    </span>
  )
}
