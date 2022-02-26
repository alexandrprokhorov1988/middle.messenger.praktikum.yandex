import Registration from './Registration';
import { renderDOM } from '../../utils/renderDOM';

document.addEventListener('DOMContentLoaded', () => {
  const registration = new Registration();
  renderDOM('.page', registration);
});

export {
  Registration,
};
