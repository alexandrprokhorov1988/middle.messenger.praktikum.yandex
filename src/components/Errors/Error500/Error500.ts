import { compile } from 'pug';
import { Block } from '../../../utils/Block';
import { error500Template } from './Error500.template';
import { Error500Props } from './Error500.types';

export default class Error500 extends Block<Error500Props> {
  public constructor() {
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

  public render() {
    return this.compile(compile(error500Template), { ...this.props });
  }
}
