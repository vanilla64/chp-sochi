import React, { FC } from 'react';
import styles from "./Overlay.module.css";

export const Overlay: FC = () =>
  <div className={`${styles.overlay} absolute top-0 left-0 w-full h-full z-2`} />
