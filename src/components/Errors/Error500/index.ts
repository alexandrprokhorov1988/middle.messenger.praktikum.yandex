import Error500 from './Error500';
import { renderDOM } from '../../../utils/renderDOM';

document.addEventListener('DOMContentLoaded', () => {
  const error500 = new Error500();
  renderDOM('.page', error500);
});
