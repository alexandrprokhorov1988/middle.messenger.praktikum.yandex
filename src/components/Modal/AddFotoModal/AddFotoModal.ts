import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { addFotoModalTemplate } from './AddFotoModal.template';
import Input from '../../Input/Input/Input';
import Modal from '../Modal/Modal';

export default class AddFotoModal extends Block {
  constructor(props: any) {
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
          modalName: "add-foto"
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
      add_user: formData.get('add_foto'),
    };
    console.log(data);
  }

  render() {
    return this.compile(compile(addFotoModalTemplate), { ...this.props });
  }
}
