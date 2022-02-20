import Authorization from './Authorization';

const page = document.querySelector('.page');

if (page) {
  page.prepend(new Authorization().getContent());
}
