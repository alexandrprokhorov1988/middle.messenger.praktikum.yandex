import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { removeUserModalTemplate } from './RemoveUserModal.template';
import Input from '../../Input/Input/Input';
import Modal from '../Modal/Modal';
import { RemoveUserModalProps } from './RemoveUserModal.types';
import { chatController } from '../../../controllers';
import { store } from '../../../utils/Store';

export default class RemoveUserModal extends Block<RemoveUserModalProps> {
  public constructor(props: RemoveUserModalProps) {
    super(
      'div',
      {
        ...props,
        modalFormContent: new Modal({
          modalFormContent: new Input({
            labelName: 'Удалить пользователя по id',
            inputType: 'text',
            inputName: 'remove_user',
            inputPlaceholder: 'Удалить пользователя',
            required: 'true',
          }),
          modalFormSubmitText: "Удалить",
          modalFormTitle: "Удалить пользователя",
          events: {
            click: (e: Event) => this.removeModal(e),
            submit: (e: Event) => this.handleSubmit(e),
          },
          modalName: "remove-user",
          formName: "remove-user"
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
      remove_user: Number(formData.get('remove_user')),
    };
    await chatController.removeUserFromChat({
      users: [data.remove_user],
      chatId: Number(store.getState().currentChatId),
    });
    this.hide();
    console.log('Пользователь удалён');
    return;
  }

  public render() {
    return this.compile(compile(removeUserModalTemplate), { ...this.props });
  }
}
