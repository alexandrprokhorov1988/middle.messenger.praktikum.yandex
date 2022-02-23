import { METHODS, RequestOptions } from './types';

function queryStringify(data: Record<string, unknown>) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}

export default class HTTPTransport {
  public get = (url: string, options: RequestOptions = {}) => {

    return this.request(url, { ...options, method: METHODS.Get }, options.timeout);
  };

  public post = (url: string, options: RequestOptions = {}) => {
    return this.request(url, { ...options, method: METHODS.Post }, options.timeout);
  };

  public put = (url: string, options: RequestOptions = {}) => {
    return this.request(url, { ...options, method: METHODS.Put }, options.timeout);
  };
  public patch = (url: string, options: RequestOptions = {}) => {
    return this.request(url, { ...options, method: METHODS.Patch }, options.timeout);
  };
  public delete = (url: string, options: RequestOptions = {}) => {
    return this.request(url, { ...options, method: METHODS.Delete }, options.timeout);
  };

  request = (url: string, options: RequestOptions = {}, timeout = 5000) => {
    const { headers = {}, method, data } = options;

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method,
        isGet && !!data
          ? `${url}${queryStringify(data)}`
          : url,
      );

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
