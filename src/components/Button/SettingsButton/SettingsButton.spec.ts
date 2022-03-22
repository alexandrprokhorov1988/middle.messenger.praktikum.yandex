import { expect } from 'chai';
import Button from './SettingsButton';
import { SettingsButtonProps } from './SettingsButton.types';

describe('SettingsButton', () => {
  it('Рендер компонента SettingsButton', () => {
    const props: SettingsButtonProps = {
      buttonText: 'текст кнопки',
      customClass: 'класс кнопки',
    };
    const button = new Button(props);

    expect(button.props.buttonText).to.be.equal(props.buttonText);
    expect(button.props.customClass).to.be.equal(props.customClass);
  });
});
