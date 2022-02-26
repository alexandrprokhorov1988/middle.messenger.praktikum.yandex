import Input from '../Input/Input/Input';

type RegistrationProps = {
  formLinkText?: string;
  linkTo?: string;
  events?: {
    submit?: (e: Event) => void,
  },
  emailInput?: Input;
  loginInput?: Input;
  nameInput?: Input;
  secondNameInput?: Input;
  phoneInput?: Input;
  passwordInput?: Input;
  passwordSubmitInput?: Input;
}

export {
  RegistrationProps,
};
