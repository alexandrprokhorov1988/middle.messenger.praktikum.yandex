type SettingsInputProps = {
  events?: {
    click?: () => void,
    focusout?: (e: Event) => void
  };
  labelName?: string;
  inputType?: string;
  inputName?: string;
  inputPlaceholder?: string;
  required?: string;
  inputValue?: string;
  minlength?: string;
  maxlength?: string;
  pattern?: string;
  inputErrorText?: string;
  value?: string;
}

export {
  SettingsInputProps,
};
