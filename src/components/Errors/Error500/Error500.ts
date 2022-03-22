import { compile } from 'pug';
import { Block } from '../../../utils/Block';
import { error500Template } from './Error500.template';
import { Error500Props } from './Error500.types';
import Button from '../../Button/Button/Button';
import { router } from '../../../pages';

export default class Error500 extends Block<Error500Props> {
  public constructor() {
    super(
      'div',
      {
        errorTitleMessage: '500',
        errorSubtitleMessage: 'Мы уже фиксим',
        linkButton: new Button({
          buttonText: 'Назад к чатам',
          customClass: 'button__link',
          events: {
            click: () => {
              router.go("/messenger");
            }
          },
        }),
      },
    );
  }

  public render() {
    return this.compile(compile(error500Template), { ...this.props });
  }
}
