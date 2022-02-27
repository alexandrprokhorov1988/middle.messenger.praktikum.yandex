enum Methods {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

type RequestOptions = {
  method?: Methods;
  headers?: Record<string, string>;
  timeout?: number;
  data?: any;
};

export {
  Methods,
  RequestOptions,
};
