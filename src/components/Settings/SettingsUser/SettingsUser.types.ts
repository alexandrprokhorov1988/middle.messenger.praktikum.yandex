import SettingsButton from '../../Button/SettingsButton/SettingsButton';
import SettingsInput from '../../Input/SettingsInput/SettingsInput';
import SettingsUser from './SettingsUser';
import SettingsPassword from '../SettingsPassword/SettingsPassword';

type SettingsUserProps = {
  formLinkText?: string;
  linkTo?: string;
  events?: {
    submit?: (e: Event) => void,
  },
  emailInput?: SettingsInput;
  loginInput?: SettingsInput;
  nameInput?: SettingsInput;
  secondNameInput?: SettingsInput;
  phoneInput?: SettingsInput;
  passwordInput?: SettingsInput;
  passwordSubmitInput?: SettingsInput;
  avatarImage?: string;
  disabledUserInfoForm?: string;
  userInfo?: Record<string, string>;
  state?: string;
  buttonChangeInfo?: SettingsButton;
  buttonChangePassword?: SettingsButton;
  settingsUser?: SettingsUser;
  settingsPassword?: SettingsPassword;
  nameInChatInput?: SettingsInput;
}

export {
  SettingsUserProps,
};
