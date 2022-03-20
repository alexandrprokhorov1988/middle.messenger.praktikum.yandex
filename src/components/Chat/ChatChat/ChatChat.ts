import { compile } from 'pug';
import { Block } from '../../../utils/Block';
import { chatChatTemplate } from './ChatChat.template';
import { ChatChatProps } from './ChatChat.types';
import { store } from '../../../utils/Store';
import { chatController, messageController } from '../../../controllers';

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
    const currentChatId = store.getState().currentChatId;
    const chatId = e.target!.dataset.id;
    if (currentChatId !== chatId) {
      const li = [...document.querySelectorAll('.chat__chat-container')];
      li.forEach((elem: HTMLElement) => {
        elem.classList.remove('chat__chat-container_selected')
      });
      store.set('currentChatId', chatId);
      this.setProps({
        "isSelected": "true"
      });
      const { userInfo, currentChatId } = await store.getState();
      const token = await chatController.getToken(currentChatId);
      await messageController.init(userInfo.id, currentChatId, token.token);
      await messageController.getMessages();
      console.log(store.getState());
    } else {
      console.log('чат тот же, не нажимайте больше');
    }
    return;
  }

  public render() {
    return this.compile(compile(chatChatTemplate), { ...this.props });
  }
}
