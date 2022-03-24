import Modal from '../Modal/Modal';

type AddAvatarModalProps = {
  modalFormContent?: Modal;
  events?: {
    submit?: (e: Event) => void,
    click?: (e: Event) => void,
  },
}

export {
  AddAvatarModalProps,
};
