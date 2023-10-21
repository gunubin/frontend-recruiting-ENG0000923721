import {Input} from "../Input";
import {Label} from "../Label";
import React from "react";
import styles from "./styles.module.scss";


export type Props = {
  name: string;
  title: string;
  placeholder?: string;
  errorMessage?: string;
  onChange?: (value: string, name: string) => void;
}

export const LabeledInput: React.FC<Props> = ({name, title, placeholder, errorMessage, onChange}) => {
  return (
    <div className={styles.row}>
      <div className={styles.left}>
        <Label>{title}</Label>
      </div>
      <div className={styles.right}>
        <Input name={name} onChange={onChange} placeholder={placeholder} hasError={!!errorMessage}/>
        <div className={styles.error}>
          {errorMessage}
        </div>
      </div>
    </div>
  )
}
