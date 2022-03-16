import SettingsButton from '../../Button/SettingsButton/SettingsButton';
import SettingsInput from '../../Input/SettingsInput/SettingsInput';
import Button from '../../Button/Button/Button';
import AddAvatarModal from '../../Modal/AddAvatarModal/AddAvatarModal';

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
  nameInChatInput?: SettingsInput;
  linkButton?: Button;
  addAvatarButton: Button;
  addAvatarModal: AddAvatarModal;
}

export {
  SettingsUserProps,
};
