import HTTP from '../utils/HTTPTransport';

class ChatAPI {
  private chatAPIInstance;

  constructor(){
    this.chatAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/chats');

  }
  public createChat(data: { title: string }): Promise<XMLHttpRequest> {
    return this.chatAPIInstance.post('/', {
      withCredentials: true,
      data: JSON.stringify(data)
    });
  }

  public deleteChatById(data: { chatId: string | number }): Promise<XMLHttpRequest> {
    return this.chatAPIInstance.delete('/', {
      withCredentials: true,
      data: JSON.stringify(data)
    });
  }

  public getChats(): Promise<XMLHttpRequest> {
    return this.chatAPIInstance.get('/', {
      withCredentials: true,
    });
  }

  public getToken(id: number): Promise<XMLHttpRequest> {
    return this.chatAPIInstance.post(`/token/${id}`, {
      withCredentials: true,
    });
  }

  public getNewMessageCountFromChat(id: string | number): Promise<XMLHttpRequest> {
    return this.chatAPIInstance.get(`/new/${id}`, {
      withCredentials: true,
    });
  }

  public addUserToChat(data: { users: number[], chatId: string | number }): Promise<XMLHttpRequest> {
    return this.chatAPIInstance.put('/users', {
      withCredentials: true,
      data: JSON.stringify(data)
    });
  }

  public removeUserFromChat(data: { users: number[], chatId: string | number }): Promise<XMLHttpRequest> {
    return this.chatAPIInstance.delete('/users', {
      withCredentials: true,
      data: JSON.stringify(data)
    });
  }

  public getUsersFromChat(id: string | number): Promise<XMLHttpRequest> {
    return this.chatAPIInstance.get(`/${id}/users`, {
      withCredentials: true,
    });
  }

  public editChatAvatar(chatId: number, avatar: FormData): Promise<XMLHttpRequest> {
    return this.chatAPIInstance.put(`/avatar`, {
      headers: {},
      withCredentials: true,
      data: {
        chatId,
        avatar,
      }
    });
  }
}

export default new ChatAPI();
