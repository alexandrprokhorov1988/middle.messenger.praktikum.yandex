import Error404 from './Error404';

const page = document.querySelector('.page');

if (page) {
  page.prepend(new Error404().getContent());
}
