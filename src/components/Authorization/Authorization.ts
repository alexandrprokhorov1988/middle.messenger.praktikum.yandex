import { compile } from 'pug';
import { Block } from '../../utils/Block';
import { authorizationTemplate } from './Authorization.template';
import { Input } from '../Input/Input/index';
import { AuthorizationProps } from './Authorization.types';
import Button from '../Button/Button/Button';
import { router } from '../../pages';

export default class Authorization extends Block<AuthorizationProps> {
  public constructor() {
    super(
      'div',
      {
        // formLinkText: 'Нет аккаунта?',
        // linkTo: './sign-up',
        events: {
          submit: (e: Event) => this.handleSubmit(e),
        },
        loginInput: new Input({
          labelName: 'Логин',
          inputType: 'text',
          inputName: 'login',
          inputPlaceholder: 'Логин',
          required: 'true',
        }),
        passwordInput: new Input({
          labelName: 'Пароль',
          inputType: 'password',
          inputName: 'password',
          inputPlaceholder: 'Пароль',
          required: 'true',
        }),
        linkButton: new Button({
          buttonText: 'Нет аккаунта?',
          customClass: 'button__link',
          events: {
            click: () => {
              router.go("/sign-up");
            }
          },
        }),
      },
    );
  }

  public handleSubmit(e: Event) {
    e.preventDefault();
    const formData = new FormData((e.target as HTMLFormElement));
    const data = {
      login: formData.get('login'),
      password: formData.get('password'),
    };
    if(e.target) {
      const formIsValid = (e.target as HTMLFormElement).closest('form')!.checkValidity();
      if (formIsValid) {
        console.log(data);
      }
    }
  }

  public render() {
    return this.compile(compile(authorizationTemplate), { ...this.props });
  }
}
