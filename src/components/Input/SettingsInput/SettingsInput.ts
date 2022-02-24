import { compile } from 'pug';
import { Block } from '../../../utils/Block';
import { settingInputTemplate } from './SettingInput.template';

export default class SettingsInput extends Block {
  constructor(props: any) {
    super(
      'div',
      {
        ...props,
        value: props.value,
        events: {
          focusout: (e: Event) => this.handleBlur(e),
        },
      },
    );
  }

  handleBlur(e: any) {
    this.setProps({
      inputErrorText: e.target.validationMessage,
      value: e.target.value,
    });
  }

  render() {
    return this.compile(compile(settingInputTemplate), { ...this.props });
  }
}
