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
          "required": "true",
          "minlength": "3",
          "maxlength": "20",
          "pattern": "[a-zA-Z0-9-_]*[a-zA-Z]{1}[a-zA-Z0-9-_]*"
        }),
        "passwordInput": new Input({
          "labelName": "Пароль",
          "inputType": "password",
          "inputName": "password",
          "inputPlaceholder": "Пароль",
          "required": "true",
          "minlength": "8",
          "maxlength": "40",
          "pattern": "((?=.*\\d)(?=.*[0-9])(?=.*[A-Z]).{8,40})"
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
    console.log(data);
  }

  render() {
    return this.compile(compile(authorizationTemplate), { ...this.props });
  }
}
