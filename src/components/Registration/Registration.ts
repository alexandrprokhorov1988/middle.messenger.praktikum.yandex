import { Block } from '../../utils/Block';
import { registrationTemplate } from './Registration.template';
import { compile } from 'pug';

export default class Registration extends Block {
  constructor() {
    super(
      "div",
      {
        "formLinkText": "Войти",
        "linkTo": "./authorization.html",
        events: {
          submit: (e: Event) => this.handleSubmit(e)
        }
      },
      '')
  }

  handleSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);
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

  render() {
    return this.compile(compile(registrationTemplate),{...this.props});
  }
}
