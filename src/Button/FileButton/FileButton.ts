import { compile } from 'pug';
import { Block } from '../../utils/Block/index';
import { fileButtonTemplate } from './FileButton.template';

export default class FileButton extends Block {
  constructor(props: any) {
    super(
      'div',
      {
        ...props,
      },
    );
  }

  render() {
    return this.compile(compile(fileButtonTemplate), { ...this.props });
  }
}
