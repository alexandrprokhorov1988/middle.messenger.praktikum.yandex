import { compile } from 'pug';
import { Block } from '../../utils/Block';
import { registrationTemplate } from './Registration.template';
import { Input } from '../Input/Input/index';
import { RegistrationProps } from './Registration.types';
import Button from '../Button/Button/Button';
import { router } from '../../pages';
import { authController } from '../../controllers';
import {
  EMAIL_REGEXP,
  LOGIN_REGEXP,
  NAME_REGEXP,
  PASSWORD_REGEXP,
  PHONE_REGEXP,
  SECOND_NAME_REGEXP
} from '../../config/constants';

export default class Registration extends Block<RegistrationProps> {
  public constructor() {
    super(
      'div',
      {
        events: {
          submit: (e: Event) => this.handleSubmit(e),
        },
        emailInput: new Input({
          labelName: 'Почта',
          inputType: 'email',
          inputName: 'email',
          inputPlaceholder: 'Почта',
          required: 'true',
          pattern: EMAIL_REGEXP,
        }),
        loginInput: new Input({
          labelName: 'Логин',
          inputType: 'text',
          inputName: 'login',
          inputPlaceholder: 'Логин',
          required: 'true',
          minlength: '3',
          maxlength: '20',
          pattern: LOGIN_REGEXP,
        }),
        nameInput: new Input({
          labelName: 'Имя',
          inputType: 'text',
          inputName: 'first_name',
          inputPlaceholder: 'Имя',
          required: 'true',
          minlength: '3',
          pattern: NAME_REGEXP,
        }),
        secondNameInput: new Input({
          labelName: 'Фамилия',
          inputType: 'text',
          inputName: 'second_name',
          inputPlaceholder: 'Фамилия',
          required: 'true',
          minlength: '3',
          pattern: SECOND_NAME_REGEXP,
        }),
        phoneInput: new Input({
          labelName: 'Телефон',
          inputType: 'tel',
          inputName: 'phone',
          inputPlaceholder: 'Телефон',
          required: 'true',
          minlength: '3',
          pattern: PHONE_REGEXP,
        }),
        passwordInput: new Input({
          labelName: 'Пароль',
          inputType: 'password',
          inputName: 'password',
          inputPlaceholder: 'Пароль',
          required: 'true',
          minlength: '8',
          maxlength: '40',
          pattern: PASSWORD_REGEXP,
        }),
        passwordSubmitInput: new Input({
          labelName: 'Пароль (ещё раз)',
          inputType: 'password',
          inputName: 'password_submit',
          inputPlaceholder: 'Пароль (ещё раз)',
          required: 'true',
        }),
        linkButton: new Button({
          buttonText: 'Войти?',
          customClass: 'button__link',
          events: {
            click: () => {
              router.go("/");
            }
          },
        }),
      },
    );
  }

  public async handleSubmit(e: Event) {
    e.preventDefault();
    const formData = new FormData((e.target as HTMLFormElement));
    if (formData.get('password_submit') === formData.get('password')) {
      const data = {
        email: String(formData.get('email')),
        login: String(formData.get('login')),
        first_name: String(formData.get('first_name')),
        second_name: String(formData.get('second_name')),
        phone: String(formData.get('phone')),
        password: String(formData.get('password')),
      };
      const formIsValid = (e.target as HTMLFormElement).closest('form')!.checkValidity();
      if (formIsValid) {
        await authController.register(data);
      }
    }
  }

  public render() {
    return this.compile(compile(registrationTemplate), { ...this.props });
  }
}
