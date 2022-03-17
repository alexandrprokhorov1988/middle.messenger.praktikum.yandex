import { compile } from 'pug';
import { Block } from '../../../utils/Block';
import { chatChatTemplate } from './ChatChat.template';
import { ChatChatProps } from './ChatChat.types';
import { chatController } from '../../../controllers';

export default class ChatChat extends Block<ChatChatProps> {
  public constructor(props: ChatChatProps) {
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

  public async handleClick() {
    const li = [...document.querySelectorAll('.chat__chat-container')];
    li.forEach((elem: HTMLElement) => {
      elem.classList.remove('chat__chat-container_selected')
    });

    this.setProps({
      "isSelected": "true"
    })
  }

  public render() {
    return this.compile(compile(chatChatTemplate), { ...this.props });
  }
}
