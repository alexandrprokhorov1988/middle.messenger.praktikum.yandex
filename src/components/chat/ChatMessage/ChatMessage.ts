import { Block } from '../../../utils/Block';
import { chatMessageTemplate } from './ChatMessage.template';
import { compile } from 'pug';

export default class ChatMessage extends Block {
  constructor(props: any) {
    super(
      "div",
      {
        ...props,
      }
    );
  }

  render() {
    return this.compile(compile(chatMessageTemplate), { ...this.props });
  }
}
