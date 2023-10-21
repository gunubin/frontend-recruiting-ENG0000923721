export type Validate = (value: string) => string | undefined;

export const required: Validate = (value) => {
  if (value === '' || value === undefined) {
    return '必須項目です';
  }
  return '';
}

export const postalCodeFormat: Validate = (value) => {
  if (!/^\d{7}$/.test(value)) {
    return 'ハイフンを含めず半角数字で入力してください';
  }
  return '';
}

export const emailFormat: Validate = (value) => {
  if (!/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/.test(value)) {
    return '正しいメールアドレスを入力してください';
  }
  return '';
}
