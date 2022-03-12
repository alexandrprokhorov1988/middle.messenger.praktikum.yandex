import { chatApi } from '../api';
import { store } from '../utils/Store';

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
      store.set('chats', JSON.parse(result.response));
      return result;
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

  public async addUserToChat(data: { users: number[], chatId: string | number }) {
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
}

export default new ChatController();
