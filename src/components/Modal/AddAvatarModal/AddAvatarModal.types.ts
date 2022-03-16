import Modal from '../Modal/Modal';

type AddFileModalProps = {
  modalFormContent?: Modal;
  events?: {
    submit?: (e: Event) => void,
    click?: (e: Event) => void,
  },
}

export {
  AddFileModalProps,
};
