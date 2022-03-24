import HTTP from '../utils/HTTPTransport';
import { EditProfileParameters } from './types';

class SettingsApi {
  private settingsAPIInstance;

  constructor() {
    this.settingsAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/user');
  }

  public editProfile(data: EditProfileParameters): Promise<XMLHttpRequest> {
    return this.settingsAPIInstance.put('/profile', {
      withCredentials: true,
      data: JSON.stringify(data)
    });
  }

  public async editAvatar(data: FormData): Promise<XMLHttpRequest> {
    return await this.settingsAPIInstance.put('/profile/avatar', {
      headers: {},
      withCredentials: true,
      data: data
    });
  }

  public async editPassword(data: { oldPassword: string, newPassword: string }): Promise<XMLHttpRequest> {
    return await this.settingsAPIInstance.put('/password', {
      withCredentials: true,
      data: JSON.stringify(data)
    });
  }

  public async getUserByLogin(data: { login: string }): Promise<XMLHttpRequest> {
    return await this.settingsAPIInstance.post('/search', {
      withCredentials: true,
      data: JSON.stringify(data)
    });
  }

  public async getUserById(id: string | number): Promise<XMLHttpRequest> {
    return await this.settingsAPIInstance.get(`/${id}`, {
      withCredentials: true,
    });
  }
}

export default new SettingsApi();
