import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { addUserModalTemplate } from './AddUserModal.template';
import Input from '../../Input/Input/Input';
import Modal from '../Modal/Modal';
import { AddUserModalProps } from './AddUserModal.types';
import { chatController } from '../../../controllers';
import { store } from '../../../utils/Store';

export default class AddUserModal extends Block<AddUserModalProps> {
  public constructor(props: AddUserModalProps) {
    super(
      'div',
      {
        ...props,
        modalFormContent: new Modal({
          modalFormContent: new Input({
            labelName: 'id пользователя',
            inputType: 'text',
            inputName: 'add_user',
            inputPlaceholder: 'Добавить пользователя',
            required: 'true',
          }),
          modalFormSubmitText: "Добавить",
          modalFormTitle: "Добавить пользователя",
          events: {
            click: (e: Event) => this.removeModal(e),
            submit: (e: Event) => this.handleSubmit(e),
          },
          modalName: "add-user",
          formName: "add-user"
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
      add_user: Number(formData.get('add_user')),
    };
    await chatController.addUserToChat({
      users: [data.add_user],
      chatId: Number(store.getState().currentChatId),
    });
    this.hide();
    console.log('Пользователь добавлен');
    return;
  }

  public render() {
    return this.compile(compile(addUserModalTemplate), { ...this.props });
  }
}
