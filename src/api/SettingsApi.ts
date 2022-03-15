import HTTP from '../utils/HTTPTransport';
import BaseAPI from './BaseApi';
import { RegisterParameters } from './types';

const settingsAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/user');

class SettingsApi extends BaseAPI {
  public editProfile(data: RegisterParameters): Promise<XMLHttpRequest> {
    return settingsAPIInstance.put('/profile', {
      withCredentials: true,
      data: data
    });
  }

  public async editAvatar(data: FormData): Promise<XMLHttpRequest> {
    return await settingsAPIInstance.put('/profile/avatar', {
      withCredentials: true,
      data: data
    });
  }

  public async editPassword(data: { oldPassword: string, newPassword: string }): Promise<XMLHttpRequest> {
    return await settingsAPIInstance.put('/password', {
      withCredentials: true,
      data: data
    });
  }

  public async getUserByLogin(data: { login: string }): Promise<XMLHttpRequest> {
    return await settingsAPIInstance.post('/search', {
      withCredentials: true,
      data: data
    });
  }

  public async getUserById(id: string): Promise<XMLHttpRequest> {
    return await settingsAPIInstance.get(`/${id}`, {
      withCredentials: true,
    });
  }
}

export default new SettingsApi();
