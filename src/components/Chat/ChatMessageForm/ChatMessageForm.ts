import { compile } from 'pug';
import { Block } from '../../../utils/Block';
import { chatMessageFormTemplate } from './ChatMessageForm.template';
import { ChatMessageFormProps } from './ChatMessageForm.types';
import { messageController } from '../../../controllers';
import { store } from '../../../utils/Store';

export default class ChatMessageForm extends Block<ChatMessageFormProps> {
  public constructor(props: ChatMessageFormProps) {
    super(
      'div',
      {
        ...props,
        events: {
          submit: (e: Event) => this.handleSubmit(e),
        },
      },
    );
  }

  public async handleSubmit(e: Event) {
    e.preventDefault();
    const currentChatId = await store.getState().currentChatId;
    if (currentChatId) {
      const formData = new FormData((e.target as HTMLFormElement));
      const data = {
        message: String(formData.get('message')),
      };
      this.setProps({
        value: '',
      });
      await messageController.handleOpen(data.message);
    } else {
      console.log('Чат не выбран');
    }
  }

  public render() {
    return this.compile(compile(chatMessageFormTemplate), { ...this.props });
  }
}
