import { compile } from 'pug';
import { Block } from '../../../utils/Block';
import { chatMessageTemplate } from './ChatMessage.template';
import { ChatMessageProps } from './ChatMessage.types';

export default class ChatMessage extends Block<ChatMessageProps> {
  public constructor(props: ChatMessageProps) {
    super('div', props);
  }

  public render() {
    return this.compile(compile(chatMessageTemplate), { ...this.props });
  }
}
