import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { linkButtonTemplate } from './LinkButton.template';
import { ButtonProps } from './LinkButton.types';

export default class LinkButton extends Block<ButtonProps> {
  public constructor(props: ButtonProps) {
    super('div', props);
  }

  public render() {
    return this.compile(compile(linkButtonTemplate), { ...this.props });
  }
}
