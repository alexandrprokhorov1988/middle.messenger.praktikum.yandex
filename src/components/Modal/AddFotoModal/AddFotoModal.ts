import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { addFotoModalTemplate } from './AddFotoModal.template';
import Input from '../../Input/Input/Input';
import Modal from '../Modal/Modal';
import { AddFotoModalProps } from './AddFotoModal.types';

export default class AddFotoModal extends Block<AddFotoModalProps> {
  public constructor(props: AddFotoModalProps) {
    super(
      'div',
      {
        ...props,
        modalFormContent: new Modal({
          modalFormContent: new Input({
            labelName: 'Фото или видео',
            inputType: 'file',
            inputName: 'add_foto',
            required: 'true',
          }),
          modalFormSubmitText: "Добавить",
          modalFormTitle: "Добавить фото или видео",
          events: {
            click: (e: Event) => this.removeModal(e),
            submit: (e: Event) => this.handleSubmit(e),
          },
          modalName: "add-foto",
          formName: "add-foto"
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
      add_foto: formData.get('add_foto'),
    };
    console.log(data);
  }

  public render() {
    return this.compile(compile(addFotoModalTemplate), { ...this.props });
  }
}
