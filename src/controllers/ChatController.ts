import { chatApi } from '../api';
import { store } from '../utils/Store';
import ChatChat from '../components/Chat/ChatChat/ChatChat';
import { SERVER_RESOURCES_BASE_URL } from '../config/config';

class ChatController {
  public async createChat(data: { title: string }) {
    try {
      const result = await chatApi.createChat(data);
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
      }
      await this.getChats();
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }

  public async deleteChat(data: { chatId: string | number }) {
    try {
      const result = await chatApi.deleteChatById(data);
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
      }
      await this.getChats();
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }

  public async getChats() {
    try {
      const result = await chatApi.getChats();
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
      }

      const arrOfChats = (JSON.parse(result.response) as any).map((item: any) => {
        let date = null;
        if(item?.last_message?.time){
          date = new Date(item.last_message.time);
        }
        return new ChatChat({
          avatar: item.avatar && (SERVER_RESOURCES_BASE_URL + item.avatar),
          title: item.title,
          last_message: item.last_message && item.last_message.content,
          chatDate: date ? `${date.getHours()}:${date.getMinutes()}` : '',
          unread_count: item.unread_count,
          id: item.id,
        });
      });
      store.set('chats', arrOfChats);
    } catch (error) {
      console.log(error.message);
    }
  }

  public async getNewMessageCountFromChat(id: string | number) {
    try {
      const result = await chatApi.getNewMessageCountFromChat(id);
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
      }
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }

  public async addUserToChat(data: { users: number[] | string[], chatId: string | number }) {
    try {
      const result = await chatApi.addUserToChat(data);
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
      }
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }

  public async removeUserFromChat(data: { users: number[], chatId: string | number }) {
    try {
      const result = await chatApi.removeUserFromChat(data);
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
      }
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }

  public async getToken(chatId: number) {
    try {
      const result = await chatApi.getToken(chatId);
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
      }
      return JSON.parse(result.response);
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default new ChatController();
