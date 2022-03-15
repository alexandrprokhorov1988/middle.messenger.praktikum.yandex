import { withStore } from '../../../utils/Store'
import Chat from './Chat';

const withUser = withStore((state: any) => state.userInfo);
export default withUser(Chat);
