import Registration from './Registration';

const page = document.querySelector('.page');

if (page) {
  page.prepend(new Registration().getContent());
}
