import HTTP from '../utils/HTTPTransport';
import BaseAPI from './BaseApi';
import { LoginParameters, RegisterParameters } from './types';

const authAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/auth');

class AuthAPI extends BaseAPI {
  public register(data: RegisterParameters): Promise<XMLHttpRequest> {
    return authAPIInstance.post('/signup', {
      data: data
    });
  }

  public async login(data: LoginParameters): Promise<XMLHttpRequest> {
    return await authAPIInstance.post('/signin', {
      withCredentials: true,
      data: data
    });
  }

  public getUserInfo(): Promise<XMLHttpRequest> {
    return authAPIInstance.get('/user', {
      withCredentials: true
    });
  }

  public logout(): Promise<XMLHttpRequest> {
    return authAPIInstance.post('/logout', {
        withCredentials: true
      }
    );
  }
}

export default new AuthAPI();
