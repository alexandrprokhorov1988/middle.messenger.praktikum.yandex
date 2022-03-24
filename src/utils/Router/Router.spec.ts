import { expect } from 'chai';
import sinon from 'sinon';
import Router from './Router';
import Error404 from '../../components/Errors/Error404';
import Authorization from '../../components/Authorization';

describe('Проверяем переходы у Роута', () => {
  const router = new Router('.page');
  router
    .use('/', Authorization)
    .use('/404', Error404)
    .start();

  it('Переход на новую страницу должен менять состояние сущности history', () => {
    router.go('/');
    router.go('/404');
    expect(router.history.length).to.eq(3);
  });

  it('Переход на несуществующую страницу должен осуществлять редирект и менять состояние сущности history', () => {
    router.go('/500');
    expect(router.history.length).to.eq(5);
  });

  it('Количество роутов', () => {
    router.go('/');
    router.go('/404');
    expect(router.routes.length).to.eq(2);
  });

  it('Переход назад должен менять состояние сущности history', () => {
    const backSpy = sinon.spy(global.window.history, "back");
    router.back();
    expect(backSpy.callCount).to.eq(1);
  });

  it('Переход вперед должен менять состояние сущности history', () => {
    const backSpy = sinon.spy(global.window.history, "forward");
    router.forward();
    expect(backSpy.callCount).to.eq(1);
  });

  it('Роут должен быть в массиве роутов', () => {
    const route = router.getRoute('/404');
    expect(route).to.not.be.undefined;
  });
});
