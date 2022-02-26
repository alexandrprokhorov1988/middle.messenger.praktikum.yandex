import Settings from './Settings';
import { renderDOM } from '../../../utils/renderDOM';

document.addEventListener('DOMContentLoaded', () => {
  const settings = new Settings();
  renderDOM('.page', settings);
});

export {
  Settings,
};
