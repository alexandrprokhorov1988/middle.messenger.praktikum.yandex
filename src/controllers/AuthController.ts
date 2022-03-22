import { authApi, LoginParameters, RegisterParameters } from '../api';
import { router } from '../pages';
import { store } from '../utils/Store';
import { SERVER_RESOURCES_BASE_URL } from '../config/config';

class AuthController {
  public async register(data: RegisterParameters) {
    try {
      const result = await authApi.register(data);
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
      }
      router.go('/');
    } catch (error) {
      console.log(error.message);
    }
  }

  public async login(data: LoginParameters) {
    try {
      const result = await authApi.login(data);
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
      }
      await this.getUserInfo();
      router.go('/messenger');
    } catch (error) {
      console.log(error.message);
    }
  }

  public async getUserInfo() {
    try {
      const result = await authApi.getUserInfo();
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
      }
      const userData = JSON.parse(result.response);
      store.set('userInfo', { ...userData, avatar: userData.avatar && SERVER_RESOURCES_BASE_URL + userData.avatar });
    } catch (error) {
      console.log(error.message);
    }
  }

  public async logout() {
    try {
      const result = await authApi.logout();
      store.set('userInfo', null);
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
      }
      router.go('/');
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default new AuthController();
