import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { inputTemplate } from './Input.template';
import { InputProps } from './Input.types';

export default class Input extends Block<InputProps> {
  public constructor(props: InputProps) {
    super(
      'div',
      {
        ...props,
        events: {
          focusout: (e: Event) => this.handleBlur(e),
        },
      },
    );
  }

  public handleBlur(e: Event) {
    this.setProps({
      inputErrorText: (e.target as HTMLInputElement).validationMessage,
      inputValue: (e.target as HTMLInputElement).value,
    });
  }

  public render() {
    return this.compile(compile(inputTemplate), { ...this.props });
  }
}
