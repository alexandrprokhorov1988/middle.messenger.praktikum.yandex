import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { addGeoModalTemplate } from './AddGeoModal.template';
import Input from '../../Input/Input/Input';
import Modal from '../Modal/Modal';

export default class AddGeoModal extends Block {
  constructor(props: any) {
    super(
      'div',
      {
        ...props,
        modalFormContent: new Modal({
          modalFormContent: new Input({
            labelName: 'Добавить геоданные',
            inputType: 'text',
            inputName: 'add_geo',
            inputPlaceholder: 'Добавить геоданные',
            required: 'true',
          }),
          modalFormSubmitText: "Добавить",
          modalFormTitle: "Добавить геоданные",
          events: {
            click: (e: Event) => this.removeModal(e),
            submit: (e: Event) => this.handleSubmit(e),
          },
          modalName: "add-geo",
          formName: "add-geo"
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
      add_geo: formData.get('add_geo'),
    };
    console.log(data);
  }

  render() {
    return this.compile(compile(addGeoModalTemplate), { ...this.props });
  }
}
