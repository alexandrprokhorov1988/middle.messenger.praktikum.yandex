import Input from '../../Input/Input/Input';

type ModalProps = {
  modalFormContent?: Input
  modalFormSubmitText?: string;
  modalFormTitle?: string;
  events?: {
    click: (e: Event) => void,
    submit: (e: Event) => void
  };
  modalName: string;
  formName: string;
}

export {
  ModalProps,
};
