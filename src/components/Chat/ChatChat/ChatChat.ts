import { compile } from 'pug';
import { Block } from '../../../utils/Block';
import { chatChatTemplate } from './ChatChat.template';

export default class ChatChat extends Block {
  constructor(props: any) {
    super(
      'div',
      {
        ...props,
        events: {
          click: () => this.handleClick(),
        },
      },
    );
  }

  handleClick() {
    const li = [...document.querySelectorAll('.chat__chat-container')];
    li.forEach((elem: any) => {
      elem.classList.remove('chat__chat-container_selected')
    });

    this.setProps({
      "isSelected": "true"
    })
  }

  render() {
    return this.compile(compile(chatChatTemplate), { ...this.props });
  }
}
