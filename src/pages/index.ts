import Router from './../utils/Router/Router';
import Chat from './../components/Chat/Chat';
import Authorization from '../components/Authorization';
import Registration from '../components/Registration';
import Settings from '../components/Settings/Settings';
import Error404 from '../components/Errors/Error404';
import Error500 from '../components/Errors/Error500';
import SettingsUser from '../components/Settings/SettingsUser/SettingsUser';
import SettingsPassword from '../components/Settings/SettingsPassword/SettingsPassword';

const router = new Router('.page');

router
  .use('/', Authorization)
  .use('/sign-up', Registration)
  .use('/settings', Settings)
  .use('/settings/user', SettingsUser)
  .use('/settings/password', SettingsPassword)
  .use('/messenger', Chat)
  .use('/500', Error500)
  .use('/404', Error404)
  .start();


export {
  router,
};

