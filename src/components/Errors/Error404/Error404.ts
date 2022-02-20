import { Block } from '../../../components/Block';
import { error404Template } from './Error404.template';
import { compile } from 'pug';

export default class Error404 extends Block {
  constructor() {
    super("div", {
      "errorTitleMessage": "404",
      "errorSubtitleMessage": "Не туда попали",
      "errorLinkText": "Назад к чатам",
      "linkTo": "./index.html",
    });
  }

  render() {
    return compile(error404Template)(this.props)
  }
}
