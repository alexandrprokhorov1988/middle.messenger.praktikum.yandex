import sinon from 'sinon';
import { expect } from 'chai';
import { settingsApi } from './index';
import { EditProfileParameters } from './types';

describe('SettingsApi', () => {
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

  it('Проверяем редактирование профиля', () => {
    const api = settingsApi;
    const data: EditProfileParameters = {
      first_name: "demo3",
      second_name: "demo3",
      login: "demo3",
      email: "demo3@mail.demo3",
      phone: "3213213123123",
      display_name: 'demo3',
    };

    api.editProfile(data);

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/user/profile`);
    expect(requests[0].method).to.eq("PUT");
    expect(requests[0].requestBody).to.eq(JSON.stringify(data));
  });

  it('Проверяем редактирование пароля', () => {
    const api = settingsApi;
    const data: { oldPassword: string, newPassword: string } = {
      oldPassword: '12345',
      newPassword: '1234567',
    };

    api.editPassword(data);

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/user/password`);
    expect(requests[0].method).to.eq("PUT");
    expect(requests[0].requestBody).to.eq(JSON.stringify(data));
  });

  it('Проверяем получение пользователя по логину', () => {
    const api = settingsApi;
    const data: { login: string } = {
      login: 'demo3'
    };

    api.getUserByLogin(data);

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/user/search`);
    expect(requests[0].method).to.eq("POST");
    expect(requests[0].requestBody).to.eq(JSON.stringify(data));
  });


  it('Проверяем получение пользователя по id', () => {
    const api = settingsApi;

    api.getUserById(24545);

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/user/24545`);
    expect(requests[0].method).to.eq("GET");
  });
});
