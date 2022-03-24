import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { settingsUserTemplate } from './SettingsUser.template';
import SettingsInput from '../../Input/SettingsInput/SettingsInput';
import { SettingsUserProps } from './SettingsUser.types';
import Button from '../../Button/Button/Button';
import { router } from '../../../pages';
import { settingsController } from '../../../controllers';
import AddAvatarModal from '../../Modal/AddAvatarModal/AddAvatarModal';

class SettingsUser extends Block<SettingsUserProps> {
  public constructor(props: SettingsUserProps) {
    super(
      'div',
      {
        events: {
          submit: (e: Event) => this.handleSubmit(e),
        },
        userInfo: {
          first_name: '',
          email: '',
          login: '',
          second_name: '',
          display_name: '',
          phone: '',
          avatar: ''
        },
        emailInput: new SettingsInput({
          labelName: 'Почта',
          inputType: 'email',
          inputName: 'email',
          inputPlaceholder: 'Почта',
          required: 'true',
          minlength: '3',
          pattern: '\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,6}',
          value: props?.userInfo?.email || '',
        }),
        loginInput: new SettingsInput({
          labelName: 'Логин',
          inputType: 'text',
          inputName: 'login',
          inputPlaceholder: 'Логин',
          required: 'true',
          minlength: '3',
          maxlength: '20',
          pattern: '[a-zA-Z0-9-_]*[a-zA-Z]{1}[a-zA-Z0-9-_]*',
          value: props?.userInfo?.login || '',
        }),
        nameInput: new SettingsInput({
          labelName: 'Имя',
          inputType: 'text',
          inputName: 'first_name',
          inputPlaceholder: 'Имя',
          required: 'true',
          minlength: '3',
          pattern: '^[A-ZА-ЯЁ]{1}[a-zа-яё-]+$',
          value: props?.userInfo?.first_name || '',
        }),
        secondNameInput: new SettingsInput({
          labelName: 'Фамилия',
          inputType: 'text',
          inputName: 'second_name',
          inputPlaceholder: 'Фамилия',
          required: 'true',
          minlength: '3',
          pattern: '^[A-ZА-ЯЁ]{1}[a-zа-яё-]+$',
          value: props?.userInfo?.second_name || '',
        }),
        nameInChatInput: new SettingsInput({
          labelName: 'Имя в чате',
          inputType: 'text',
          inputName: 'display_name',
          inputPlaceholder: 'Имя в чате',
          required: 'true',
          minlength: '3',
          maxlength: '20',
          pattern: '[a-zA-Z0-9-_А-ЯЁа-яё]+',
          value: props?.userInfo?.display_name || '',
        }),
        phoneInput: new SettingsInput({
          labelName: 'Телефон',
          inputType: 'tel',
          inputName: 'phone',
          inputPlaceholder: 'Телефон',
          required: 'true',
          minlength: '3',
          pattern: '^\\+?[0-9]{10,15}$',
          value: props?.userInfo?.phone || '',
        }),
        linkButton: new Button({
          buttonText: '',
          customClass: 'button__settings',
          events: {
            click: () => {
              router.go("/settings");
            }
          },
        }),
        ...props,
        addAvatarButton: new Button({
          customClass: "settings__avatar-button",
          buttonText: 'Поменять аватар',
          events: {
            click: () => this.handleClickEditAvatarButton(),
          },
        }),
        addAvatarModal: new AddAvatarModal({}),
      },
    );
  }

  public handleClickEditAvatarButton() {
    const modal = document.querySelector('[data-modal-name=add-avatar]');
    if (modal) {
      (modal! as HTMLElement).style.display = "flex";
    }
    return;
  }

  public async handleSubmit(e: Event) {
    e.preventDefault();
    const target = e.target! as HTMLElement;
    if (target.closest('form[name="user-edit"]')) {
      const formData = new FormData((e.target as HTMLFormElement));
      const data = {
        email: String(formData.get('email')),
        login: String(formData.get('login')),
        first_name: String(formData.get('first_name')),
        second_name: String(formData.get('second_name')),
        display_name: String(formData.get('display_name')),
        phone: String(formData.get('phone')),
      };
      if (e.target) {
        const formIsValid = target.closest('form')!.checkValidity();
        if (formIsValid) {
          await settingsController.editProfile(data);
        }
      }
    }
    return;
  }

  public render() {
    return this.compile(compile(settingsUserTemplate), { ...this.props });
  }
}

export default SettingsUser;
