import { Block } from '../../components/Block';
import { registrationTemplate } from './Registration.template';
import { compile } from 'pug';

export default class Registration extends Block {
  constructor() {
    super(
      "section",
      {
        "formLinkText": "Войти",
        "linkTo": "./authorization.html",
      },
      'form')
  }

  render() {
    return compile(registrationTemplate)(this.props)
  }
}
