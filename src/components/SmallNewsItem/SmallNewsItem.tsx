import React, { FC } from 'react';
import styles from './SmallNewsItem.module.css';

interface Props {
  date: string
  text: string
  size?: 's' | 'm'
}

export const SmallNewsItem: FC<Props> = ({ date, text, size = 'm' }) => {
  const classes = {
    text: size === 's'
      ? `${styles.text} ${styles.text_size_s}`
      : `${styles.text} ${styles.text_size_m}`,
    date: size === 's'
      ? `${styles.date} ${styles.date_size_s}`
      : `${styles.date} ${styles.date_size_m}`,
  }

  return (
    <li>
      <p className={classes.text}>{text}</p>
      <span className={classes.date}>{date}</span>
    </li>
  )
}
