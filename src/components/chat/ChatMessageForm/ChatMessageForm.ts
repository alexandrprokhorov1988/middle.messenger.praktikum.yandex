import { Block } from '../../../utils/Block';
import { chatMessageFormTemplate } from './ChatMessageForm.template';
import { compile } from 'pug';

export default class ChatMessageForm extends Block {
  constructor(props: any) {
    super(
      "div",
      {
        ...props,
        events: {
          submit: (e: Event) => this.handleSubmit(e)
        },
      }
    );
  }

  handleSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      message: formData.get('message'),
    };
    this.setProps({
      value: ''
    });
    console.log(data);
  }

  render() {
    return this.compile(compile(chatMessageFormTemplate), { ...this.props });
  }
}
