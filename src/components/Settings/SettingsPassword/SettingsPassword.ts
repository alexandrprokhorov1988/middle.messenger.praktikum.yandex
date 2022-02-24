import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { settingsPasswordTemplate } from './SettingsPassword.template';
import SettingsInput from '../../Input/SettingsInput/SettingsInput';

export default class SettingsPassword extends Block {
  constructor(props: any) {
    super(
      'div',
      {
        ...props,
        events: {
          submit: (e: Event) => this.handleSubmit(e),
        },
        linkTo: './settings.html',
        oldPasswordInput: new SettingsInput({
          labelName: 'Старый пароль',
          inputType: 'password',
          inputName: 'oldPassword',
          placeholderName: 'Старый пароль',
          required: 'true',
          minlength: '8',
          maxlength: '40',
          pattern: '((?=.*\\d)(?=.*[0-9])(?=.*[A-Z]).{8,40})',
        }),
        newPasswordInput: new SettingsInput({
          labelName: 'Новый пароль',
          inputType: 'password',
          inputName: 'newPassword',
          placeholderName: 'Новый пароль',
          required: 'true',
          minlength: '8',
          maxlength: '40',
          pattern: '((?=.*\\d)(?=.*[0-9])(?=.*[A-Z]).{8,40})',
        }),
        confirmPasswordInput: new SettingsInput({
          labelName: 'Повторите новый пароль',
          inputType: 'password',
          inputName: 'submitPassword',
          placeholderName: 'Повторите новый пароль',
          required: 'true',
          minlength: '8',
          maxlength: '40',
          pattern: '((?=.*\\d)(?=.*[0-9])(?=.*[A-Z]).{8,40})',
        }),
      },
    );
  }

  handleSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      old_password: formData.get('oldPassword'),
      new_password: formData.get('newPassword'),
      confirm_password: formData.get('newPassword'),
    };
    const formIsValid = e.target.closest('form').checkValidity();
    if (formIsValid) {
      console.log(data);
    }
  }

  render() {
    return this.compile(compile(settingsPasswordTemplate), { ...this.props });
  }
}
