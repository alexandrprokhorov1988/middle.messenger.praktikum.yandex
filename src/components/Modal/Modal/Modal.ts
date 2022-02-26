import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { modalTemplate } from './Modal.template';

export default class Modal extends Block {
  constructor(props: any) {
    super(
      'div',
      {
        ...props,
      },
    );
  }

  render() {
    return this.compile(compile(modalTemplate), { ...this.props });
  }
}
