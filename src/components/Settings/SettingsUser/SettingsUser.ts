import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { settingsUserTemplate } from './SettingsUser.template';
import SettingsInput from '../../Input/SettingsInput/SettingsInput';
import { SettingsUserProps } from './SettingsUser.types';

export default class SettingsUser extends Block<SettingsUserProps> {
  public constructor(props: SettingsUserProps) {
    super(
      'div',
      {
        ...props,
        events: {
          submit: (e: Event) => this.handleSubmit(e),
        },
        linkTo: './settings.html',
        emailInput: new SettingsInput({
          labelName: 'Почта',
          inputType: 'email',
          inputName: 'email',
          inputPlaceholder: 'Почта',
          required: 'true',
          minlength: '3',
          pattern: '\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,6}',
          value: props.userInfo!.email,
        }),
        loginInput: new SettingsInput({
          labelName: 'Логин',
          inputType: 'text',
          inputName: 'login',
          inputPlaceholder: 'Логин',
          required: 'true',
          minlength: '3',
          maxlength: '20',
          pattern: '[a-zA-Z0-9-_]*[a-zA-Z]{1}[a-zA-Z0-9-_]*',
          value: props.userInfo!.login,
        }),
        nameInput: new SettingsInput({
          labelName: 'Имя',
          inputType: 'text',
          inputName: 'first_name',
          inputPlaceholder: 'Имя',
          required: 'true',
          minlength: '3',
          pattern: '^[A-ZА-ЯЁ]{1}[a-zа-яё-]+$',
          value: props.userInfo!.first_name,

        }),
        secondNameInput: new SettingsInput({
          labelName: 'Фамилия',
          inputType: 'text',
          inputName: 'second_name',
          inputPlaceholder: 'Фамилия',
          required: 'true',
          minlength: '3',
          pattern: '^[A-ZА-ЯЁ]{1}[a-zа-яё-]+$',
          value: props.userInfo!.second_name,
        }),
        nameInChatInput: new SettingsInput({
          labelName: 'Имя в чате',
          inputType: 'text',
          inputName: 'display_name',
          inputPlaceholder: 'Имя в чате',
          required: 'true',
          minlength: '3',
          maxlength: '20',
          pattern: '[a-zA-Z0-9-_А-ЯЁа-яё]+',
          value: props.userInfo!.display_name,
        }),
        phoneInput: new SettingsInput({
          labelName: 'Телефон',
          inputType: 'tel',
          inputName: 'phone',
          inputPlaceholder: 'Телефон',
          required: 'true',
          minlength: '3',
          pattern: '^\\+?[0-9]{10,15}$',
          value: props.userInfo!.phone,
        }),
      },
    );
  }

  public handleSubmit(e: Event) {
    e.preventDefault();
    const formData = new FormData((e.target as HTMLFormElement));
    const data = {
      email: formData.get('email'),
      login: formData.get('login'),
      first_name: formData.get('first_name'),
      second_name: formData.get('second_name'),
      display_name: formData.get('display_name'),
      phone: formData.get('phone'),
    };
    if(e.target){
    const formIsValid = (e.target as HTMLFormElement).closest('form')!.checkValidity();
    if (formIsValid) {
      console.log(data);
    }
    }
  }

  public render() {
    return this.compile(compile(settingsUserTemplate), { ...this.props });
  }
}
