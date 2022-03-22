import Block from './Block';
import { compile } from "pug";
import { expect } from "chai";
import { ButtonProps, buttonTemplate } from '../../components/Button/Button';

describe('Block', () => {
  class Button extends Block<ButtonProps> {
    public constructor(props: ButtonProps) {
      super('div',
        {
          ...props,
        }
      );
    }

    public render() {
      return this.compile(compile(buttonTemplate), { ...this.props });
    }
  }

  const component = new Button({});
  component.setProps({
    buttonText: 'текст кнопки',
    customClass: 'класс кнопки',
  });

  it('Проверяем установку пропсов компонента Block', () => {
    expect(component.props.buttonText).to.be.equal('текст кнопки');
    expect(component.props.customClass).to.be.equal('класс кнопки');
  });

  it('Проверяем рендер компонента Block', () => {
    expect(component.getContent()!.textContent).to.be.equal('текст кнопки');
  });
});
