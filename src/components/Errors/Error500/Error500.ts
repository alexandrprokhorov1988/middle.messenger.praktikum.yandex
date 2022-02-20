import { Block } from '../../../components/Block';
import { error500Template } from './Error500.template';
import { compile } from 'pug';

export default class Error500 extends Block {
  constructor() {
    super("div", {
      "errorTitleMessage": "500",
      "errorSubtitleMessage": "Мы уже фиксим",
      "errorLinkText": "Назад к чатам",
      "linkTo": "./index.html",
    })
  }

  render() {
    return compile(error500Template)(this.props)
  }
}
