import { RegisterParameters, settingsApi } from '../api';
import { store } from '../utils/Store';

class SettingsController {
  public async editProfile(data: RegisterParameters) {
    try {
      const result = await settingsApi.editProfile(data);
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
      }
      store.set('userInfo', JSON.parse(result.response));
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
      store.set('userInfo', JSON.parse(result.response));
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
      store.set('userInfo', JSON.parse(result.response));
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }

}

export default new SettingsController();
