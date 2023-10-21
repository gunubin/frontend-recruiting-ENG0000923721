import React, {SyntheticEvent, useCallback} from 'react';
import styles from './styles.module.scss';

export type Props = {
  name: string;
  hasError?: boolean;
  placeholder?: string;
  onChange?: (val: string, name: string) => void;
}

export const Input: React.FC<Props> = ({name, onChange, hasError, placeholder}) => {
  const handleChange = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    onChange?.(e.currentTarget.value, name);
  }, [name, onChange]);
  return <input className={`${styles.input} ${hasError && styles.error}`} name={name} placeholder={placeholder}
                onChange={handleChange}/>
}
