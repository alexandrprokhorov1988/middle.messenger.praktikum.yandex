import { Block } from '../../utils/Block';
import { settingsTemplate } from './Settings.template';
import { compile } from 'pug';
import Button from '../../Button/Button';

export default class Settings extends Block {
  constructor() {
    super(
      "div",
      {
        "formLinkText": "Войти",
        "linkTo": "./index.html",
        "avatarImage": "https://i.gifer.com/Q2RE.gif",
        "disabledUserInfoForm": "true",
        "userInfo": {
          first_name: "Иван",
          email: "pochta@yandex.ru",
          login: "ivanovivan",
          second_name: "Иванов",
          display_name: "Иван",
          phone: "+7 (909) 967 30 30"
        },
        "state": "",
        events: {
          submit: (e: Event) => this.handleSubmit(e)
        },
        "buttonChangeInfo": new Button({
          "buttonName": "Изменить данные",
          events: {
            click: (e: Event) => this.handleClickInfo(e)
          }
        }),
        "buttonChangePassword": new Button({
          "buttonName": "Изменить пароль",
          events: {
            click: (e: Event) => this.handleClickPassword(e)
          }
        }),
        "settingsUser": new SettiongsUser({

        }),//todo
        "settingsPassword": new SettingsPassword({

        }),//todo
      }
    );
  }

  handleClickInfo(e: any) {
    console.log(e);
    this.setProps({
      "state": "user"
    })
  }

  handleClickPassword(e: any) {
    console.log(e);
    this.setProps({
      "state": "password"
    })
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
    return this.compile(compile(settingsTemplate), { ...this.props });
  }
}
