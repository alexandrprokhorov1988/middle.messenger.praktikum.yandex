import { Block } from '../Block';

function renderDOM(rootSelector: string, component: Block) {
  const root = document.querySelector(rootSelector);
  if (!root) {
    throw new Error('Root element not found');
  }

  // component.dispatchComponentDidMount() //todo
  root.innerHTML = '';
  root.append(component.getContent()!);
}

export {
  renderDOM,
};
