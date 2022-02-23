import { Block } from '../../../utils/Block';
import { chatChatTemplate } from './ChatChat.template';
import { compile } from 'pug';

export default class ChatChat extends Block {
  constructor(props: any) {
    super(
      "div",
      {
        ...props,
      }
    );
  }

  render() {
    return this.compile(compile(chatChatTemplate), { ...this.props });
  }
}
