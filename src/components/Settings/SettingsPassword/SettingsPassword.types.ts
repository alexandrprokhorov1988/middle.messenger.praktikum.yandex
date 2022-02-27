import { Input } from '../../../components/Input/Input';

type SettingsPasswordProps = {
  formLinkText?: string;
  linkTo?: string;
  events?: {
    submit?: (e: Event) => void,
  },
  oldPasswordInput?: Input;
  newPasswordInput?: Input;
  confirmPasswordInput?: Input;
}

export {
  SettingsPasswordProps,
};
