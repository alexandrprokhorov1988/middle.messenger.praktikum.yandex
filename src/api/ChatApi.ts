import HTTP from '../utils/HTTPTransport';
import BaseAPI from './BaseApi';

const chatAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/chats');

class ChatAPI extends BaseAPI {
  public createChat(data: { title: string }): Promise<XMLHttpRequest> {
    return chatAPIInstance.post('/', {
      withCredentials: true,
      data: JSON.stringify(data)
    });
  }

  public deleteChatById(data: { chatId: string | number }): Promise<XMLHttpRequest> {
    return chatAPIInstance.delete('/', {
      withCredentials: true,
      data: JSON.stringify(data)
    });
  }

  public getChats(): Promise<XMLHttpRequest> {
    return chatAPIInstance.get('/', {
      withCredentials: true,
    });
  }

  public getNewMessageCountFromChat(id: string | number): Promise<XMLHttpRequest> {
    return chatAPIInstance.get(`/${id}`, {
      withCredentials: true,
    });
  }

  public addUserToChat(data: { users: number[], chatId: string | number }): Promise<XMLHttpRequest> {
    return chatAPIInstance.put('/users', {
      withCredentials: true,
      data: JSON.stringify(data)
    });
  }

  public removeUserFromChat(data: { users: number[], chatId: string | number }): Promise<XMLHttpRequest> {
    return chatAPIInstance.delete('/users', {
      withCredentials: true,
      data: JSON.stringify(data)
    });
  }
}

export default new ChatAPI();
