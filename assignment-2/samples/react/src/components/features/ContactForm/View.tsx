import React from "react";
import {LabeledInput} from "../../ui/LabeledInput";
import {LabeledSelect} from "../../ui/LabeledSelect";
import styles from './styles.module.scss'
import {Button} from "../../ui/Button";
import {prefectures} from "../../../constants";

export type Props = {
  isButtonDisabled: boolean;
  form: any;
  onChange: (val: string, name: string) => void;
  onPressSubmit: () => void;
}

export const ContactForm: React.FC<Props> = (props) => {
  const {isButtonDisabled, onPressSubmit, onChange, form} = props;
  return (
    <div className={styles.form}>
      <div className={styles.control}>
        <LabeledInput name="name" title="氏名" onChange={onChange} errorMessage={form.name?.error} />
      </div>
      <div className={styles.control}>
        <LabeledInput name="email" title="Eメール" onChange={onChange} errorMessage={form.email?.error}/>
      </div>
      <div className={styles.control}>
        <LabeledInput name="postalcode" title="郵便番号" onChange={onChange} errorMessage={form.postalcode?.error}/>
      </div>
      <div className={styles.control}>
        <LabeledSelect name="prefecture" title="都道府県" options={prefectures} onChange={onChange} />
      </div>
      <div className={styles.control}>
        <LabeledInput name="address1" title="市区町村・番地" onChange={onChange} errorMessage={form.address1?.error}/>
      </div>
      <div className={styles.control}>
        <LabeledInput name="address2" title="建物名・号室" onChange={onChange} errorMessage={form.address2?.error}/>
      </div>
      <div className={styles.btn}>
        <Button isDisabled={isButtonDisabled} onPress={onPressSubmit}>登録</Button>
      </div>
    </div>
  )
}
