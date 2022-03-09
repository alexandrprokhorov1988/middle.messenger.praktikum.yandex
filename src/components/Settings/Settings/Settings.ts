import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { settingsTemplate } from './Settings.template';
import SettingsButton from '../../Button/SettingsButton/SettingsButton';
import { SettingsProps } from './Settings.types';
import { router } from '../../../pages';
import Button from '../../Button/Button/Button';

export default class Settings extends Block<SettingsProps> {
  public constructor() {
    super(
      'div',
      {
        avatarImage: 'https://i.gifer.com/Q2RE.gif',
        disabledUserInfoForm: 'true',
        userInfo: {
          first_name: 'Иван',
          email: 'pochta@yandex.ru',
          login: 'ivanovivan',
          second_name: 'Иванов',
          display_name: 'Иван',
          phone: '+7 (909) 967 30 30',
        },
        state: '',
        buttonChangeInfo: new SettingsButton({
          buttonName: 'Изменить данные',
          events: {
            click: () => {
              router.go("/settings/user");
            },
          }
        }),
        buttonChangePassword: new SettingsButton({
          buttonName: 'Изменить пароль',
          events: {
            click: () => {
              router.go("/settings/password");
            }
          },
        }),

        linkButton: new Button({
          buttonText: '',
          customClass: 'button__settings',
          events: {
            click: () => {
              router.go("/messenger");
            }
          },
        }),
      },
    );
  }

  public render() {
    return this.compile(compile(settingsTemplate), { ...this.props });
  }
}
