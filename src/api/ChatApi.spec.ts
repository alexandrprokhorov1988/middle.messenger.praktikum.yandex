import sinon from 'sinon';
import { expect } from 'chai';
import { chatApi } from './index';

describe('ChatApi', () => {
  let xhr: sinon.SinonFakeXMLHttpRequestStatic, requests: sinon.SinonFakeXMLHttpRequest[];
  (global.XMLHttpRequest as any) = sinon.useFakeXMLHttpRequest();

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];

    xhr.onCreate = (req) => {
      requests.push(req);
    };
  });

  afterEach(() => {
    xhr.restore()
  });

  it('Проверяем создание чата', () => {
    const api = chatApi;
    const data: { title: string } = {
      title: "чат"
    };

    api.createChat(data);

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/chats/`);
    expect(requests[0].method).to.eq("POST");
    expect(requests[0].requestBody).to.eq(JSON.stringify(data));
  });

  it('Проверяем удаление чата по id', () => {
    const api = chatApi;
    const data: { chatId: string | number } = {
      chatId: 2450
    };

    api.deleteChatById(data);

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/chats/`);
    expect(requests[0].method).to.eq("DELETE");
    expect(requests[0].requestBody).to.eq(JSON.stringify(data));
  });

  it('Проверяем получение списка чатов', () => {
    const api = chatApi;

    api.getChats();

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/chats/`);
    expect(requests[0].method).to.eq("GET");
  });

  it('Проверяем получение токена', () => {
    const api = chatApi;

    api.getToken(24514);

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/chats/token/24514`);
    expect(requests[0].method).to.eq("POST");
  });

  it('Проверяем получение количества новых сообщений', () => {
    const api = chatApi;

    api.getNewMessageCountFromChat(24514);

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/chats/new/24514`);
    expect(requests[0].method).to.eq("GET");
  });

  it('Проверяем добавление пользователя в чат', () => {
    const api = chatApi;
    const data: { users: number[], chatId: string | number } = {
      users: [24514574],
      chatId: 2451,
    };

    api.addUserToChat(data);

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/chats/users`);
    expect(requests[0].method).to.eq("PUT");
    expect(requests[0].requestBody).to.eq(JSON.stringify(data));
  });

  it('Проверяем добавление пользователя в чат', () => {
    const api = chatApi;
    const data: { users: number[], chatId: string | number } = {
      users: [24514574],
      chatId: 2451,
    };

    api.removeUserFromChat(data);

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/chats/users`);
    expect(requests[0].method).to.eq("DELETE");
    expect(requests[0].requestBody).to.eq(JSON.stringify(data));
  });

  it('Проверяем получение пользователей из чата', () => {
    const api = chatApi;

    api.getUsersFromChat(2454);

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/chats/2454/users`);
    expect(requests[0].method).to.eq("GET");
  });
});
