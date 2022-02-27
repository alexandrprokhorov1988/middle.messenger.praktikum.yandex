import { compile } from 'pug';
import { Block } from '../../../utils/Block';
import { chatMessageFormTemplate } from './ChatMessageForm.template';
import { ChatMessageFormProps } from './ChatMessageForm.types';

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

  public handleSubmit(e: Event) {
    e.preventDefault();
    const formData = new FormData((e.target as HTMLFormElement));
    const data = {
      message: formData.get('message'),
    };
    this.setProps({
      value: '',
    });
    console.log(data);
  }

  public render() {
    return this.compile(compile(chatMessageFormTemplate), { ...this.props });
  }
}
