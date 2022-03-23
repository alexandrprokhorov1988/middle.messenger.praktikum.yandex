import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { addAvatarModalTemplate } from './AddAvatarModal.template';
import Modal from '../Modal/Modal';
import { AddAvatarModalProps } from './AddAvatarModal.types';
import FileInput from '../../Input/FileInput/FileInput';
import { settingsController } from '../../../controllers';

export default class AddAvatarModal extends Block<AddAvatarModalProps> {
  public constructor(props: AddAvatarModalProps) {
    super(
      'div',
      {
        ...props,
        modalFormContent: new Modal({
          modalFormContent: new FileInput({
            labelName: 'Файл',
            inputType: 'file',
            inputName: 'avatar',
            required: 'true',
            accept: "image/*",
          }),
          modalFormSubmitText: "Загрузить",
          modalFormTitle: "Загрузить аватар",
          events: {
            click: (e: Event) => this.removeModal(e),
            submit: (e: Event) => this.handleSubmit(e),
          },
          modalName: "add-avatar",
          formName: "add-avatar"
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
    const target = e.target! as HTMLFormElement;
    if (target.closest('form[name="add-avatar"]')) {
      const file = (target.elements as any).avatar.files[0];
      const formData = new FormData();
      formData.append('avatar', file);
      await settingsController.editAvatar(formData);
      this.hide();
    }
    return;
  }

  public render() {
    return this.compile(compile(addAvatarModalTemplate), { ...this.props });
  }
}
