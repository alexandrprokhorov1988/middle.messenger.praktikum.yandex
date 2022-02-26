import Chat from './Chat';
import { renderDOM } from '../../../utils/RenderDOM';

document.addEventListener('DOMContentLoaded', () => {
  const chat = new Chat();
  renderDOM('.page', chat);
});

export {
  Chat,
};
