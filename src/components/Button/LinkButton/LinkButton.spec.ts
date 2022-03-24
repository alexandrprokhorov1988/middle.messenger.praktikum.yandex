import { expect } from 'chai';
import Button from './LinkButton';
import { ButtonProps } from './LinkButton.types';

describe('LinkButton', () => {
  it('Рендер компонента LinkButton', () => {
    const props: ButtonProps = {
      buttonText: 'текст кнопки',
      customClass: 'класс кнопки',
    };
    const button = new Button(props);

    expect(button.props.buttonText).to.be.equal(props.buttonText);
    expect(button.props.customClass).to.be.equal(props.customClass);
  });
});
