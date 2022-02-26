import { compile } from 'pug';
import { Block } from '../../../utils/Block';
import { error404Template } from './Error404.template';

export default class Error404 extends Block {
  constructor() {
    super(
      'div',
      {
        errorTitleMessage: '404',
        errorSubtitleMessage: 'Не туда попали',
        errorLinkText: 'Назад к чатам',
        linkTo: './index.html',
      },
    );
  }

  render() {
    return this.compile(compile(error404Template), { ...this.props });
  }
}
