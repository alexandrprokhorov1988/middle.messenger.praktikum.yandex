import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { buttonTemplate } from './Button.template';

export default class Button extends Block {
  constructor(props: any) {
    super(
      'div',
      {
        ...props,
      },
    );
  }

  render() {
    return this.compile(compile(buttonTemplate), { ...this.props });
  }
}
