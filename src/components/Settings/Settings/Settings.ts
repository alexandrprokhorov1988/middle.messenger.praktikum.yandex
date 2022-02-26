import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { settingsTemplate } from './Settings.template';
import SettingsButton from '../../../Button/SettingsButton/SettingsButton';
import SettingsPassword from '../SettingsPassword/SettingsPassword';
import SettingsUser from '../SettingsUser/SettingsUser';

export default class Settings extends Block {
  constructor() {
    super(
      'div',
      {
        formLinkText: 'Войти',
        linkTo: './index.html',
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
            click: () => this.handleClickInfo(),
          },
        }),
        buttonChangePassword: new SettingsButton({
          buttonName: 'Изменить пароль',
          events: {
            click: () => this.handleClickPassword(),
          },
        }),
        settingsUser: new SettingsUser({
          userInfo: {
            first_name: 'Иван',
            email: 'pochta@yandex.ru',
            login: 'ivanovivan',
            second_name: 'Иванов',
            display_name: 'Иван',
            phone: '+7 (909) 967 30 30',
          },
        }),
        settingsPassword: new SettingsPassword({}),
      },
    );
  }

  handleClickInfo() {
    this.setProps({
      state: 'user',
    });
  }

  handleClickPassword() {
    this.setProps({
      state: 'password',
    });
  }

  render() {
    return this.compile(compile(settingsTemplate), { ...this.props });
  }
}
