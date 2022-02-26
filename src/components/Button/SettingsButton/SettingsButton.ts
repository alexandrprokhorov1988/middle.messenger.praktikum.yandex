import { compile } from 'pug';
import { Block } from '../../../utils/Block/index';
import { settingsButtonTemplate } from './SettingsButton.template';

export default class SettingsButton extends Block {
  constructor(props: any) {
    super(
      'div',
      {
        ...props,
      },
    );
  }

  render() {
    return this.compile(compile(settingsButtonTemplate), { ...this.props });
  }
}
