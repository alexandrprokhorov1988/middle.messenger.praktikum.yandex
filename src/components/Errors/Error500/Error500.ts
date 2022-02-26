import { compile } from 'pug';
import { Block } from '../../../utils/Block';
import { error500Template } from './Error500.template';

export default class Error500 extends Block {
  constructor() {
    super(
      'div',
      {
        errorTitleMessage: '500',
        errorSubtitleMessage: 'Мы уже фиксим',
        errorLinkText: 'Назад к чатам',
        linkTo: './index.html',
      },
    );
  }

  render() {
    return this.compile(compile(error500Template), { ...this.props });
  }
}
