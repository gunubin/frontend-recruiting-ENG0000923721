import React from "react";
import styles from "./styles.module.scss";

export type Props = {
  children: string;
}

export const Label: React.FC<Props> = ({children}) => {
  return (
    <div className={styles.label}>{children}</div>
  )
}
