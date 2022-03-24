import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { settingsPasswordTemplate } from './SettingsPassword.template';
import SettingsInput from '../../Input/SettingsInput/SettingsInput';
import { SettingsPasswordProps } from './SettingsPassword.types';
import Button from '../../Button/Button/Button';
import { router } from '../../../pages';
import { settingsController } from '../../../controllers';
import { PASSWORD_REGEXP } from '../../../config/constants';

export default class SettingsPassword extends Block<SettingsPasswordProps> {
  public constructor(props: SettingsPasswordProps) {
    super(
      'div',
      {
        ...props,
        events: {
          submit: (e: Event) => this.handleSubmit(e),
        },
        inputErrorText: '',
        oldPasswordInput: new SettingsInput({
          labelName: 'Старый пароль',
          inputType: 'password',
          inputName: 'oldPassword',
          inputPlaceholder: 'Старый пароль',
          required: 'true',
          minlength: '8',
          maxlength: '40',
          pattern: PASSWORD_REGEXP,
        }),
        newPasswordInput: new SettingsInput({
          labelName: 'Новый пароль',
          inputType: 'password',
          inputName: 'newPassword',
          inputPlaceholder: 'Новый пароль',
          required: 'true',
          minlength: '8',
          maxlength: '40',
          pattern: PASSWORD_REGEXP,
        }),
        confirmPasswordInput: new SettingsInput({
          labelName: 'Повторите новый пароль',
          inputType: 'password',
          inputName: 'submitPassword',
          inputPlaceholder: 'Повторите новый пароль',
          required: 'true',
          minlength: '8',
          maxlength: '40',
          pattern: PASSWORD_REGEXP,
          inputErrorText: props.inputErrorText || '',
        }),
        linkButton: new Button({
          buttonText: '',
          customClass: 'button__settings',
          events: {
            click: () => {
              router.go("/settings");
            }
          },
        }),
      },
    );
  }

  public async handleSubmit(e: Event) {
    e.preventDefault();
    const formData = new FormData((e.target as HTMLFormElement));
    const data = {
      oldPassword: String(formData.get('oldPassword')),
      newPassword: String(formData.get('newPassword')),
    };
    if (e.target) {
      const formIsValid = (e.target as HTMLFormElement).closest('form')!.checkValidity();
      if (formData.get('oldPassword') === formData.get('newPassword') && formIsValid) {
        await settingsController.editPassword(data);
        console.log('Пароль изменен');
        return;
      } else {
        this.setProps({ inputErrorText: 'Пароли не совпадают' });
        return;
      }
    }
  }

  public render() {
    return this.compile(compile(settingsPasswordTemplate), { ...this.props });
  }
}
