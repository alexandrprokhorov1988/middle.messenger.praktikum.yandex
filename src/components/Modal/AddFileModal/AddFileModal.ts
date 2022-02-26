import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { addFileModalTemplate } from './AddFileModal.template';
import Input from '../../Input/Input/Input';
import Modal from '../Modal/Modal';

export default class AddFileModal extends Block {
  constructor(props: any) {
    super(
      'div',
      {
        ...props,
        modalFormContent: new Modal({
          modalFormContent: new Input({
            labelName: 'Файл',
            inputType: 'file',
            inputName: 'add_file',
            required: 'true',
          }),
          modalFormSubmitText: "Добавить",
          modalFormTitle: "Добавить файл",
          events: {
            click: (e: Event) => this.removeModal(e),
            submit: (e: Event) => this.handleSubmit(e),
          },
          modalName: "add-file"
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
      add_user: formData.get('add_file'),
    };
    console.log(data);
  }

  render() {
    return this.compile(compile(addFileModalTemplate), { ...this.props });
  }
}
