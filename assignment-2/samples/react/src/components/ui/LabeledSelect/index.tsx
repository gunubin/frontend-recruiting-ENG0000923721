import {Label} from "../Label";
import React from "react";
import styles from "./styles.module.scss";
import {Select} from "../Select";

export type Props = {
  name: string;
  title: string;
  options: string[];
  onChange?: (value: string, name: string) => void;
}

export const LabeledSelect: React.FC<Props> = ({name, title, options, onChange}) => {
  return (
    <div className={styles.row}>
      <div className={styles.left}>
        <Label>{title}</Label>
      </div>
      <div className={styles.right}>
        <Select onChange={onChange} name={name} options={options}/>
      </div>
    </div>
  )
}
