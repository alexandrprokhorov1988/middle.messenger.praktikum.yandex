import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { addFileModalTemplate } from './AddFileModal.template';
import Input from '../../Input/Input/Input';
import Modal from '../Modal/Modal';
import { AddFileModalProps } from './AddFileModal.types';

export default class AddFileModal extends Block<AddFileModalProps> {
  public constructor(props: AddFileModalProps) {
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
          modalName: "add-file",
          formName: "add-file"
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

  public handleSubmit(e: Event) {
    e.preventDefault();
    const formData = new FormData((e.target as HTMLFormElement));
    const data = {
      add_file: formData.get('add_file'),
    };
    console.log(data);
  }

  public render() {
    return this.compile(compile(addFileModalTemplate), { ...this.props });
  }
}
