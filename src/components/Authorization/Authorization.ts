import { Block } from '../../components/Block';
import { authorizationTemplate } from './Authorization.template';
import { compile } from 'pug';

export default class Authorization extends Block {
  constructor() {
    super(
      "section",
      {
        "formLinkText": "Нет аккаунта?",
        "linkTo": "./registration.html",
        events: {
          submit: (e: Event) => this.handleSubmit(e)
        }
      },
      'form')
  }

  handleSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      login: formData.get('login'),
      password: formData.get('password')
    };
    console.log(data);
  }

  render() {
    return compile(authorizationTemplate)(this.props)
  }
}
