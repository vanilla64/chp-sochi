import React, { FC } from 'react';
import { Tag } from "@/components/Tag/Tag";
import styles from "./CardDescription.module.css";
import { TagType } from "@/models/tags";
import Image from "next/image";
import shareIcon from '../../assets/share-icon.svg'

interface Props {
  date?: string
  tag: TagType
  text: string
  size?: 's' | 'm'
  withBackground?: boolean
}

export const CardDescription: FC<Props> = ({ date, tag, text, size = 's', withBackground = false }) => {
  return (
    <div className={`absolute bottom-0 left-0 z-3 pt-[23px] px-[14px] box-border ${withBackground ? 'bg-[#131313]' : ''}`}>
      <Tag text={tag} />
      <p
        className={
          styles[`description_size_${size}`] + `
          ${styles.description}
          text-sm font-light
        `}
      >
        {text}
      </p>
      {
        date &&
        <div className="mb-[25px] flex justify-between">
          <span className="text-sm text-[#B4B4B4] font-normal">{date}</span>
          <Image className="w-[20px] h-[20px]" src={shareIcon} alt="Share" />
        </div>
      }
    </div>
  )
}
