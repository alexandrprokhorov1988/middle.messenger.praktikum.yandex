import Authorization from './Authorization';
import { renderDOM } from '../../utils/RenderDOM';

document.addEventListener('DOMContentLoaded', () => {
  const authorization = new Authorization();
  renderDOM('.page', authorization);
});

export {
  Authorization,
};
