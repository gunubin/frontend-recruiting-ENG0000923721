import {ContactForm} from "./View";
import {useContactForm} from "./hooks";
import React from "react";

export const ConnectedContactForm = () => {
  const props = useContactForm();
  return React.createElement(ContactForm, props);
}
