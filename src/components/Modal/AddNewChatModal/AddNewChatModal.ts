import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { addNewChatModalTemplate } from './AddNewChatModal.template';
import Input from '../../Input/Input/Input';
import Modal from '../Modal/Modal';
import { AddUserModalProps } from './AddNewChatModal.types';
import { chatController } from '../../../controllers';

export default class AddNewChatModal extends Block<AddUserModalProps> {
  public constructor(props: AddUserModalProps) {
    super(
      'div',
      {
        ...props,
        modalFormContent: new Modal({
          modalFormContent: new Input({
            labelName: 'Добавить чат',
            inputType: 'text',
            inputName: 'title',
            inputPlaceholder: 'Название чата',
            required: 'true',
          }),
          modalFormSubmitText: "Добавить",
          modalFormTitle: "Добавить чат",
          events: {
            click: (e: Event) => this.removeModal(e),
            submit: (e: Event) => this.handleSubmit(e),
          },
          modalName: "add-chat",
          formName: "add-chat"
        })
      },
    );
  }

  public removeModal(e: Event) {
    if (!e.target) {
      return;
    }
    if ((e.target as HTMLElement).classList.contains('modal')) {
      this.hide();
    }
  }

  public async handleSubmit(e: Event) {
    e.preventDefault();
    const formData = new FormData((e.target as HTMLFormElement));
    const data = {
      title: String(formData.get('title')),
    };
    await chatController.createChat(data);
    this.hide();
    return;
  }

  public render() {
    return this.compile(compile(addNewChatModalTemplate), { ...this.props });
  }
}
