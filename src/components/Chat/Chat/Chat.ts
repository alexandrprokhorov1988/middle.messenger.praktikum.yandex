import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { chatTemplate } from './Chat.template';
import { ChatMessageForm } from '../ChatMessageForm/index';
import Button from '../../Button/Button/Button';
import AddUserModal from '../../Modal/AddUserModal/AddUserModal';
import RemoveUserModal from '../../Modal/RemoveUserModal/RemoveUserModal';
import AddGeoModal from '../../Modal/AddGeoModal/AddGeoModal';
import AddFileModal from '../../Modal/AddFileModal/AddFileModal';
import AddFotoModal from '../../Modal/AddFotoModal/AddFotoModal';
import { ChatProps } from './Chat.types';
import { router } from '../../../pages';
import { store } from '../../../utils/Store';
import AddNewChatModal from '../../Modal/AddNewChatModal/AddNewChatModal';
import { chatController } from '../../../controllers';

class Chat extends Block<ChatProps> {
  constructor(props: Record<string, unknown>) {
    super(
      'div',
      {
        userInfo: {
          first_name: '',
          email: '',
          login: '',
          second_name: '',
          display_name: '',
          phone: '',
          avatar: '',
        },
        chats: [],
        messages: [],
        chatMessageForm: new ChatMessageForm({}),
        fileButton: new Button({
          customClass: 'chat__settings-button chat__settings-button_type-modal chat__settings-button_type-select',
          events: {
            click: () => this.handleClickFileButton(),
          },
        }),
        userButton: new Button({
          customClass: 'chat__settings-button',
          events: {
            click: () => this.handleClickUserButton(),
          },
        }),
        addUserModal: new AddUserModal({}),
        removeUserModal: new RemoveUserModal({}),
        addGeoModal: new AddGeoModal({}),
        addFileModal: new AddFileModal({}),
        addFotoModal: new AddFotoModal({}),
        addUserButton: new Button({
          customClass: "chat__settings-button chat__settings-button_type-modal chat__settings-button_type-add",
          events: {
            click: () => this.handleClickAddUserButton(),
          },
        }),
        removeUserButton: new Button({
          customClass: "chat__settings-button chat__settings-button_type-modal chat__settings-button_type-remove",
          events: {
            click: () => this.handleClickRemoveUserButton(),
          },
        }),
        addFotoButton: new Button({
          customClass: "chat__settings-button chat__settings-button_type-modal chat__settings-button_type-foto",
          events: {
            click: () => this.handleClickAddFotoButton(),
          },
        }),
        addFileButton: new Button({
          customClass: "chat__settings-button chat__settings-button_type-modal chat__settings-button_type-file",
          events: {
            click: () => this.handleClickAddFileButton(),
          },
        }),
        addGeoButton: new Button({
          customClass: "chat__settings-button chat__settings-button_type-modal chat__settings-button_type-geo",
          events: {
            click: () => this.handleClickAddGeoButton(),
          },
        }),
        linkButton: new Button({
          buttonText: 'Профиль',
          customClass: 'button__profile',
          events: {
            click: () => {
              router.go("/settings");
            }
          },
        }),
        addChat: new Button({
          customClass: 'chat__settings-button chat__settings-button_type-add-new-chat',
          events: {
            click: () => this.handleAddNewChat(),
          },
        }),
        addNewChatModal: new AddNewChatModal({}),
      },
    );
    // console.log(store.getState())
  }

  async componentDidMount() {
    await chatController.getChats()
  }

  handleAddNewChat() {
    const modal = document.querySelector('[data-modal-name=add-chat]');
    if (modal) {
      (modal! as HTMLElement).style.display = "flex";
    }
    return;
  }

  handleClickAddGeoButton() {
    const modal = document.querySelector('[data-modal-name=add-geo]');
    if (modal) {
      (modal! as HTMLElement).style.display = "flex";
    }
    return;
  }

  handleClickAddFileButton() {
    const modal = document.querySelector('[data-modal-name=add-file]');
    if (modal) {
      (modal! as HTMLElement).style.display = "flex";
    }
    return;
  }

  handleClickAddFotoButton() {
    const modal = document.querySelector('[data-modal-name=add-foto]');
    if (modal) {
      (modal! as HTMLElement).style.display = "flex";
    }
    return;
  }

  handleClickAddUserButton() {
    const modal = document.querySelector('[data-modal-name=add-user]');
    if (modal) {
      (modal! as HTMLElement).style.display = "flex";
    }
    return;
  }

  handleClickRemoveUserButton() {
    const modal = document.querySelector('[data-modal-name=remove-user]');
    if (modal) {
      (modal! as HTMLElement).style.display = "flex";
    }
    return;
  }

  handleClickFileButton() {
    if (!this.props.isOpenFileModal) {
      this.setProps({
        isOpenFileModal: 'true',
      });
    } else {
      this.setProps({
        isOpenFileModal: '',
      });
    }
  }

  handleClickUserButton() {
    if (!this.props.isOpenUserModal) {
      this.setProps({
        isOpenUserModal: 'true',
      });
    } else {
      this.setProps({
        isOpenUserModal: '',
      });
    }
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    const formData = new FormData((e.target as HTMLFormElement));
    const data = {
      login: formData.get('login'),
      password: formData.get('password'),
    };
    if (e.target) {
      const formIsValid = (e.target as HTMLFormElement).closest('form')!.checkValidity();
      if (formIsValid) {
        console.log(store.getState());
        console.log(data);
      }
    }
  }

  render() {
    return this.compile(compile(chatTemplate), { ...this.props });
  }
}

export default Chat;
