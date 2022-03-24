import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { addGeoModalTemplate } from './AddGeoModal.template';
import Input from '../../Input/Input/Input';
import Modal from '../Modal/Modal';
import { AddGeoModalProps } from './AddGeoModal.types';

export default class AddGeoModal extends Block<AddGeoModalProps> {
  public constructor(props: AddGeoModalProps) {
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
      add_geo: formData.get('add_geo'),
    };
    console.log(data);
  }

  public render() {
    return this.compile(compile(addGeoModalTemplate), { ...this.props });
  }
}
