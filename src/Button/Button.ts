import { Block } from '../../src/utils/Block';
import { buttonTemplate } from './Button.template';
import { compile } from 'pug';

export default class Button extends Block {
  constructor(props: any) {
    super(
      "div",
      {
        ...props,
      },
    )
  }

  render() {
    return this.compile(compile(buttonTemplate), { ...this.props });
  }
}
