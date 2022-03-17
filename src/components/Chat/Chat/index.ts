import Chat from './Chat';
import { withStore } from '../../../utils/Store'

// const withUser = withStore((state: any) => ({...state.userInfo}));
export default withStore((state: any) => {
  return ({
    userInfo: state.userInfo,
    chats: state.chats,
    currentChatId: state.currentChatId
  });
})(Chat);
