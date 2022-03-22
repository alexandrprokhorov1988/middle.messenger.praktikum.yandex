import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { modalTemplate } from './Modal.template';
import { ModalProps } from './Modal.types';

export default class Modal extends Block<ModalProps> {
  public constructor(props: ModalProps) {
    super('div', props);
  }

  public render() {
    return this.compile(compile(modalTemplate), { ...this.props });
  }
}
