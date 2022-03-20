import { store } from '../utils/Store';
import ChatMessage from '../components/Chat/ChatMessage/ChatMessage';

class MessageController {
  private readonly baseUrl: string;
  private socket: any;
  private userId: number;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async addEvents() {
    await this.socket.addEventListener('open', () => this.handleOpen);
    await this.socket.addEventListener('close', this.handleClose);
    await this.socket.addEventListener('message', this.handleMessage);
    await this.socket.addEventListener('error', this.handleError);
  }

  public async init(userId: number, chatId: number, token: string) {
    this.userId = userId;
    this.socket = await new WebSocket(`${this.baseUrl}/${userId}/${chatId}/${token}`);
    await this.addEvents();
    console.log('соединение установлено');
    return;
  }

  public sleep(ms: number) {
    return new Promise((resolve: any) => setTimeout(resolve, ms))
  }

  public async handleOpen(message: string) {
    console.log('отправка данных');
    if (message && this.socket.readyState === 1) {
      await this.socket.send(JSON.stringify({
        content: message,
        type: 'message',
      }));
      await this.getMessages();
    } else {
      await this.sleep(1000);
      await this.handleOpen(message);
    }
  }

  public async handleClose(event: any) {
    if (event.wasClean) {
      console.log('Соединение закрыто чисто');
    } else {
      console.log('Обрыв соединения');
    }

    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
  }

  public async handleMessage(event: any) {
    console.log('получено сообщение');
    const messages = store.getState().messages || [];
    const data = Array.isArray(JSON.parse(event.data)) ? JSON.parse(event.data) : [JSON.parse(event.data)];
    const arrOfMessages = (data as any).map((item: any) => {
      return new ChatMessage({
        time: item.time,
        content: item.content,
        is_read: item.is_read,
        id: item.id,
        isUserMessage: this.userId === item.user_id,
      });
    });

    store.set('messages', [...messages, arrOfMessages]);
  }

  public async handleError(event: any) {
    console.log('Ошибка', event.message);
  }

  public async getMessages(offset: string = '0') {
    if (this.socket.readyState === 1) {
      await this.socket.send(JSON.stringify({
        content: `0`,
        type: 'get old',
      }));
      console.log('сообщения загружены');
    } else {
      await this.sleep(1000);
      await this.getMessages(offset);
    }
  }
}

export default new MessageController('wss://ya-praktikum.tech/ws/chats');
