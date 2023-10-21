import {useCallback, useState} from "react";
import {emailFormat, postalCodeFormat, required} from "../../../lib/validation";

const formSchema: Record<string, any> = {
  name: {
    validation: required,
  },
  email: {
    validation: emailFormat,
  },
  postalcode: {
    validation: postalCodeFormat,
  },
  prefecture: {
    validation: required,
  },
  address1: {
    validation: required,
  },
  address2: {
    //
  },
}

export const useContactForm = () => {

  const [form, setForm] = useState<Record<string, any>>({});

  const onPressSubmit = useCallback(() => {
    const data = Object.keys(form).reduce((acc, key) => {
      return {...acc, [key]: form[key].value};
    }, {});
    fetch('https://httpstat.us/201', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }, [form]);

  const onChange = useCallback((val: string, name: string) => {
    Object.keys(formSchema).forEach((key) => {
      if (key === name) {
        const errorMessage = formSchema[key].validation?.(val) || '';
        if (errorMessage === '') {
          setForm({...form, [key]: {value: val}});
        } else {
          setForm({...form, [key]: {error: errorMessage}});
        }
      }
    });
  }, [form]);

  const isButtonDisabled = !Object.keys(form).every((key) => {
    return form[key] === '';
  });

  return {
    form,
    isButtonDisabled,
    onChange,
    onPressSubmit,
  }
}
