import HTTP from '../utils/HTTPTransport';
import BaseAPI from './BaseApi';
import { EditProfileParameters } from './types';

const settingsAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/user');

class SettingsApi extends BaseAPI {
  public editProfile(data: EditProfileParameters): Promise<XMLHttpRequest> {
    return settingsAPIInstance.put('/profile', {
      withCredentials: true,
      data: JSON.stringify(data)
    });
  }

  public async editAvatar(data: FormData): Promise<XMLHttpRequest> {
    return await settingsAPIInstance.put('/profile/avatar', {
      headers: {},
      withCredentials: true,
      data: data
    });
  }

  public async editPassword(data: { oldPassword: string, newPassword: string }): Promise<XMLHttpRequest> {
    return await settingsAPIInstance.put('/password', {
      withCredentials: true,
      data: JSON.stringify(data)
    });
  }

  public async getUserByLogin(data: { login: string }): Promise<XMLHttpRequest> {
    return await settingsAPIInstance.post('/search', {
      withCredentials: true,
      data: JSON.stringify(data)
    });
  }

  public async getUserById(id: string | number): Promise<XMLHttpRequest> {
    return await settingsAPIInstance.get(`/${id}`, {
      withCredentials: true,
    });
  }
}

export default new SettingsApi();