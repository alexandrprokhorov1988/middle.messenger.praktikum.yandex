import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { buttonTemplate } from './Button.template';
import { ButtonProps } from './Button.types';

export default class Button extends Block<ButtonProps> {
  public constructor(props: ButtonProps) {
    super('div', props);
  }

  public render() {
    return this.compile(compile(buttonTemplate), { ...this.props });
  }
}
