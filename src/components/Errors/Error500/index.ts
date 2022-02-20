import Error500 from './Error500';

const page = document.querySelector('.page');

if (page) {
  page.prepend(new Error500().getContent());
}
