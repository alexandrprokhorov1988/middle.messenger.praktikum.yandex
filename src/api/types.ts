type LoginParameters = {
  login: string;
  password: string;
}

type RegisterParameters = {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  phone: string;
  password: string;
}

export {
  LoginParameters,
  RegisterParameters,
};
