import Chat from './Chat';
import { withStore } from '../../../utils/Store'

export default withStore((state: any) => {
  return ({
    userInfo: state.userInfo,
    chats: state.chats,
    currentChatId: state.currentChatId,
    token: state.token,
    messages: state.messages
  });
})(Chat);
