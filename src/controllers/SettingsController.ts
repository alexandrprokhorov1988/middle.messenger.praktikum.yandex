import { settingsApi } from '../api';
import { store } from '../utils/Store';
import { EditProfileParameters } from '../api/types';
import { SERVER_RESOURCES_BASE_URL } from '../config/config';

class SettingsController {
  public async editProfile(data: EditProfileParameters) {
    try {
      const result = await settingsApi.editProfile(data);
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
      }
      const newUserInfo = JSON.parse(result.response);
      store.set('userInfo', {
        ...newUserInfo,
        avatar: SERVER_RESOURCES_BASE_URL + newUserInfo.avatar,
        aaaa: 'aaaa'
      });
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }

  public async editAvatar(data: FormData) {
    try {
      const result = await settingsApi.editAvatar(data);
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
      }
      const newUserInfo = JSON.parse(result.response);
      store.set('userInfo', {
        ...newUserInfo,
        avatar: SERVER_RESOURCES_BASE_URL + newUserInfo.avatar,
      });
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }

  public async editPassword(data: { oldPassword: string, newPassword: string }) {
    try {
      const result = await settingsApi.editPassword(data);
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
      }
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }

}

export default new SettingsController();
