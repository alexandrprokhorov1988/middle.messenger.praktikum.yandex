import Settings from './Settings';
import { renderDOM } from '../../../utils/RenderDOM';

document.addEventListener('DOMContentLoaded', () => {
  const settings = new Settings();
  renderDOM('.page', settings);
});

export {
  Settings,
};
