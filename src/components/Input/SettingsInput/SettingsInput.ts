import { compile } from 'pug';
import { Block } from '../../../utils/Block';
import { settingInputTemplate } from './SettingInput.template';
import { SettingsInputProps } from './SettingsInput.types';

export default class SettingsInput extends Block<SettingsInputProps> {
  public constructor(props: SettingsInputProps) {
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
    if (e.target) {
      this.setProps({
        inputErrorText: (e.target as HTMLInputElement).validationMessage,
        value: (e.target as HTMLInputElement).value,
      });
    }
  }

  public render() {
    return this.compile(compile(settingInputTemplate), { ...this.props });
  }
}
