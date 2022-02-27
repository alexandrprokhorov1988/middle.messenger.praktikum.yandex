import { compile } from 'pug';
import { Block } from '../../../utils/Block';
import { error404Template } from './Error404.template';
import { Error404Props } from './Error404.types';

export default class Error404 extends Block<Error404Props> {
  public constructor() {
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

  public render() {
    return this.compile(compile(error404Template), { ...this.props });
  }
}
