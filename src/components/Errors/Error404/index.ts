import Error404 from './Error404';
import { renderDOM } from '../../../utils/renderDOM';

document.addEventListener('DOMContentLoaded', () => {
  const error404 = new Error404();
  renderDOM('.page', error404);
});
