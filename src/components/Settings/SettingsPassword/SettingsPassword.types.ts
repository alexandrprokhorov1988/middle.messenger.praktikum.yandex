import { Input } from '../../../components/Input/Input';
import Button from '../../Button/Button/Button';

type SettingsPasswordProps = {
  formLinkText?: string;
  linkTo?: string;
  events?: {
    submit?: (e: Event) => void,
  },
  oldPasswordInput?: Input;
  newPasswordInput?: Input;
  confirmPasswordInput?: Input;
  linkButton?: Button;
  inputErrorText?: string;
  userInfo?: Record<string, unknown>;
}

export {
  SettingsPasswordProps,
};
