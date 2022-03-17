import { compile } from 'pug';
import { Block } from '../../../utils/Block';
import { chatChatTemplate } from './ChatChat.template';
import { ChatChatProps } from './ChatChat.types';
import { store } from '../../../utils/Store';

export default class ChatChat extends Block<ChatChatProps> {
  public constructor(props: ChatChatProps) {
    super(
      'div',
      {
        ...props,
        events: {
          click: (e: Event) => this.handleClick(e),
        },
      },
    );
  }

  public async handleClick(e: Event) {
    const chatId = e.target!.dataset.id;
    const li = [...document.querySelectorAll('.chat__chat-container')];
    li.forEach((elem: HTMLElement) => {
      elem.classList.remove('chat__chat-container_selected')
    });

    store.set('currentChatId', chatId);
    this.setProps({
      "isSelected": "true"
    })
  }

  public render() {
    return this.compile(compile(chatChatTemplate), { ...this.props });
  }
}
