import HTTP from '../utils/HTTPTransport';
import { LoginParameters, RegisterParameters } from './types';


class AuthAPI {
  private authAPIInstance;

  constructor() {
    this.authAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/auth');
  }

  public register(data: RegisterParameters): Promise<XMLHttpRequest> {
    return this.authAPIInstance.post('/signup', {
      data: JSON.stringify(data)
    });
  }

  public async login(data: LoginParameters): Promise<XMLHttpRequest> {
    return await this.authAPIInstance.post('/signin', {
      withCredentials: true,
      data: JSON.stringify(data)
    });
  }

  public getUserInfo(): Promise<XMLHttpRequest> {
    return this.authAPIInstance.get('/user', {
      withCredentials: true
    });
  }

  public logout(): Promise<XMLHttpRequest> {
    return this.authAPIInstance.post('/logout', {
        withCredentials: true
      }
    );
  }
}

export default new AuthAPI();
