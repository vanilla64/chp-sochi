'use client'

import styles from './Burger.module.css';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setIsBurgerOpen } from "@/redux/slices/burgerSlice";

export const Burger = () => {
  const dispatch = useAppDispatch()
  const { isBurgerOpen} = useAppSelector(({ burgerReducer }) => burgerReducer)

  const classes = {
    button: styles.button,
    lineTop: isBurgerOpen
      ? `${styles.line} ${styles.line_pos_top} ${styles.line_pos_top_isOpen_true}`
      : `${styles.line} ${styles.line_pos_top}`,
    lineMid: isBurgerOpen
      ? `${styles.line} ${styles.line_pos_mid} ${styles.line_pos_mid_isOpen_true}`
      : `${styles.line} ${styles.line_pos_mid}`,
    lineBottom: isBurgerOpen
      ? `${styles.line} ${styles.line_pos_bottom} ${styles.line_pos_bottom_isOpen_true}`
      : `${styles.line} ${styles.line_pos_bottom}`,
  }

  return (
    <button
      onClick={() => dispatch(setIsBurgerOpen(!isBurgerOpen))}
      className={`
        ${classes.button}
        xl:hidden
      `}
    >
      <div className={classes.lineTop} />
      <div className={classes.lineMid} />
      <div className={classes.lineBottom} />
    </button>
  )
}
