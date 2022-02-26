enum METHODS {
  Get = 'GET',
  Post= 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

type RequestOptions = {
  method?: METHODS;
  headers?: Record<string, string>;
  timeout?: number;
  data?: any;
};

export {
  METHODS,
  RequestOptions,
};
