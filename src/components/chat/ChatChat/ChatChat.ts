import { compile } from 'pug';
import { Block } from '../../../utils/Block';
import { chatChatTemplate } from './ChatChat.template';

export default class ChatChat extends Block {
  constructor(props: any) {
    super(
      'div',
      {
        ...props,
      },
    );
  }

  render() {
    return this.compile(compile(chatChatTemplate), { ...this.props });
  }
}
