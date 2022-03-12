import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { settingsTemplate } from './Settings.template';
import SettingsButton from '../../Button/SettingsButton/SettingsButton';
import { SettingsProps } from './Settings.types';
import { router } from '../../../pages';
import Button from '../../Button/Button/Button';
import connect from '../../../utils/helpers.connect';
import { authController } from '../../../controllers';

class Settings extends Block<SettingsProps> {
  public constructor() {
    super(
      'div',
      {
        disabledUserInfoForm: 'true',
        userInfo: {
          first_name: '',
          email: '',
          login: '',
          second_name: '',
          display_name: '',
          phone: '',
          avatar: 'https://i.gifer.com/Q2RE.gif'
        },
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
        buttonLogout: new Button({
          buttonText: 'Выйти',
          customClass: 'settings__button settings__button_warning',
          events: {
            click: () => this.handleLogout()
          }
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

  componentDidMount() {
    authController.getUserInfo();
  }

  public async handleLogout() {
    try {
      await authController.logout();
      router.go("/");
    } catch (err) {
      console.log(err);
    }
  }

  public render() {
    return this.compile(compile(settingsTemplate), { ...this.props });
  }
}

export default connect<SettingsProps>(Settings);
