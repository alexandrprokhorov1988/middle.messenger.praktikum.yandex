import Router from './../utils/Router/Router';
import Chat from './../components/Chat/Chat';
import Authorization from '../components/Authorization';
import Registration from '../components/Registration';
import Settings from '../components/Settings/Settings';
import Error404 from '../components/Errors/Error404';
import Error500 from '../components/Errors/Error500';

const router = new Router('.page');

router
  .use('/', Authorization)
  .use('/sign-up', Registration)
  .use('/settings', Settings)
  .use('/messenger', Chat)
  .use('/500', Error500)
  .use('/404', Error404)
  .start();


export {
  router,
};

