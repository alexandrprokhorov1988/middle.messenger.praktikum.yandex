import { Block } from '../../utils/Block';
import { authorizationTemplate } from './Authorization.template';
import { compile } from 'pug';
import { Input } from '../Input';

export default class Authorization extends Block {
  constructor() {
    super(
      "div",
      {
        "formLinkText": "Нет аккаунта?",
        "linkTo": "./registration.html",
        events: {
          submit: (e: Event) => this.handleSubmit(e)
        },
        "loginInput": new Input({
          "labelName": "Логин",
          "inputType": "text",
          "inputName": "login",
          "inputPlaceholder": "Логин",
          "required": "true"
        }),
        "passwordInput": new Input({
          "labelName": "Пароль",
          "inputType": "password",
          "inputName": "password",
          "inputPlaceholder": "Пароль",
          "required": "true",
        })
      }
    );
  }

  handleSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      login: formData.get('login'),
      password: formData.get('password'),
    };
    const formIsValid = e.target.closest("form").checkValidity();
    if (formIsValid) {
      console.log(data);
    }
    return;
  }

  render() {
    return this.compile(compile(authorizationTemplate), { ...this.props });
  }
}
