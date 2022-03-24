import Input from '../Input/Input/Input';
import Button from '../Button/Button/Button';

type AuthorizationProps = {
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
  linkButton? : Button;
}

export {
  AuthorizationProps,
};
