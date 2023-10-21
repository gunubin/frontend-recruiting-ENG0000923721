import React, {SyntheticEvent, useCallback} from 'react';
import styles from './styles.module.scss';

export type Props = {
  name: string;
  placeholder?: string;
  options: string[];
  onChange?: (value: string, name: string) => void;
}

export const Select: React.FC<Props> = (props) => {
  const {options, name, onChange} = props;
  const handleChange = useCallback((e: SyntheticEvent<HTMLSelectElement>) => {
    onChange?.(e.currentTarget.value, name);
  }, [name, onChange]);
  return (
    <div className={styles.container}>
      <select className={styles.select} onChange={handleChange} name={name}>
        {options.map((option) => {
          return (
            <option value={option}>{option}</option>
          )
        })}
      </select>
    </div>
  )
}
