import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { addUserModalTemplate } from './AddUserModal.template';
import Input from '../../Input/Input/Input';
import Modal from '../Modal/Modal';

export default class AddUserModal extends Block {
  constructor(props: any) {
    super(
      'div',
      {
        ...props,
        modalFormContent: new Modal({
          modalFormContent: new Input({
            labelName: 'Логин',
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
          modalName: "add-user"
        })
      },
    );
  }

  removeModal(e: Event) {
    if (!e.target) return;
    if ((e.target as HTMLElement).classList.contains('modal')) this.hide();
  }

  handleSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      add_user: formData.get('add_user'),
    };
    console.log(data);
  }

  render() {
    return this.compile(compile(addUserModalTemplate), { ...this.props });
  }
}
