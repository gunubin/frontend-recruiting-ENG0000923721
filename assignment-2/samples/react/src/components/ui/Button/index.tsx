import React from "react";
import styles from "./styles.module.scss";

export type Props = {
 children: string;
 onPress: () => void;
 isDisabled?: boolean;
}

export const Button: React.FC<Props> = (props) => {
  const {onPress, isDisabled} = props;
  return <button className={`${styles.button} ${isDisabled && styles.disabled}`} onClick={onPress}>{props.children}</button>
}
