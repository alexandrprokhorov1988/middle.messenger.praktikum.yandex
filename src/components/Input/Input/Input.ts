import { Block } from '../../../utils/Block/index';
import { inputTemplate } from './Input.template';
import { compile } from 'pug';

export default class Input extends Block {
  constructor(props: any) {
    super(
      "div",
      {
        ...props,
        events: {
          focusout: (e: Event) => this.handleBlur(e),
        }
      },
    )
  }

  handleBlur(e: any) {
    this.setProps({
      "inputErrorText": e.target.validationMessage,
      "inputValue": e.target.value,
    });
  }

  render() {
    return this.compile(compile(inputTemplate), { ...this.props });
  }
}
