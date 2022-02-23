import { Block } from '../../utils/Block';
import { registrationTemplate } from './Registration.template';
import { compile } from 'pug';
import {Input} from '../Input';

export default class Registration extends Block {
  constructor() {
    super(
      "div",
      {
        "formLinkText": "Войти",
        "linkTo": "./authorization.html",
        events: {
          submit: (e: Event) => this.handleSubmit(e)
        },
        "emailInput": new Input({
          "labelName": "Почта",
          "inputType": "email",
          "inputName": "email",
          "inputPlaceholder": "Почта",
          "required": "true",
          "pattern": "\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,6}"
        }),
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
        "nameInput": new Input({
          "labelName": "Имя",
          "inputType": "text",
          "inputName": "first_name",
          "inputPlaceholder": "Имя",
          "required": "true",
          "minlength": "3",
          "pattern": "^[A-Z]{1}[a-z-]+$"
        }),
        "secondNameInput": new Input({
          "labelName": "Фамилия",
          "inputType": "text",
          "inputName": "second_name",
          "inputPlaceholder": "Фамилия",
          "required": "true",
          "minlength": "3",
          "pattern": "^[A-Z]{1}[a-z-]+$"
        }),
        "phoneInput": new Input({
          "labelName": "Телефон",
          "inputType": "tel",
          "inputName": "phone",
          "inputPlaceholder": "Телефон",
          "required": "true",
          "minlength": "3",
          "pattern": "^\\+?[0-9]{10,15}$"
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
        }),
        "passwordSubmitInput": new Input({
          "labelName": "Пароль (ещё раз)",
          "inputType": "password",
          "inputName": "password_submit",
          "inputPlaceholder": "Пароль (ещё раз)",
          "required": "true",
        }),
      }
    )
  }

  handleSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (formData.get('password_submit') === formData.get('password')) {
      const data = {
        email: formData.get('email'),
        login: formData.get('login'),
        first_name: formData.get('first_name'),
        second_name: formData.get('second_name'),
        phone: formData.get('phone'),
        password: formData.get('password'),
      };
      console.log(data);
    }
  }

  render() {
    return this.compile(compile(registrationTemplate), { ...this.props });
  }
}