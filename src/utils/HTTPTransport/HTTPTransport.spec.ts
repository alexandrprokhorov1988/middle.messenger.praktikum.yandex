import sinon from 'sinon';
import { expect } from 'chai';
import HTTPTransport from './HTTPTransport';
import { LoginParameters } from '../../api';

describe('HTTPTransport', () => {
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

  it('Проверяем метод post', () => {
    const api = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth');
    const data: LoginParameters = {
      login: "demo3",
      password: "demo3DEMO",
    };
    api.post('/post',{
      data: JSON.stringify(data)
    });

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/auth/post`);
    expect(requests[0].method).to.eq("POST");
    expect(requests[0].requestBody).to.eq(JSON.stringify(data));
  });

  it('Проверяем метод get', () => {
    const api = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth');
    api.get('/get');

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/auth/get`);
    expect(requests[0].method).to.eq("GET");
  });

  it('Проверяем метод put', () => {
    const api = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth');
    const data: LoginParameters = {
      login: "demo3",
      password: "demo3DEMO",
    };
    api.put('/put',{
      data: JSON.stringify(data)
    });

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/auth/put`);
    expect(requests[0].method).to.eq("PUT");
    expect(requests[0].requestBody).to.eq(JSON.stringify(data));
  });

  it('Проверяем метод patch', () => {
    const api = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth');
    const data: LoginParameters = {
      login: "demo3",
      password: "demo3DEMO",
    };
    api.patch('/patch',{
      data: JSON.stringify(data)
    });

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/auth/patch`);
    expect(requests[0].method).to.eq("PATCH");
    expect(requests[0].requestBody).to.eq(JSON.stringify(data));
  });

  it('Проверяем метод delete', () => {
    const api = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth');

    api.delete('/delete');

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/auth/delete`);
    expect(requests[0].method).to.eq("DELETE");
  });
});
