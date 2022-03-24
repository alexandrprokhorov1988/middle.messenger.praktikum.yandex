import Input from '../../Input/Input/Input';
import FileInput from '../../Input/FileInput/FileInput';

type ModalProps = {
  modalFormContent?: Input | FileInput;
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
