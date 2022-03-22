import { compile } from 'pug';
import { Block } from '../../../utils/Block';
import { error404Template } from './Error404.template';
import { Error404Props } from './Error404.types';
import Button from '../../Button/Button/Button';
import { router } from '../../../pages';

export default class Error404 extends Block<Error404Props> {
  public constructor() {
    super(
      'div',
      {
        errorTitleMessage: '404',
        errorSubtitleMessage: 'Не туда попали',
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
    return this.compile(compile(error404Template), { ...this.props });
  }
}
