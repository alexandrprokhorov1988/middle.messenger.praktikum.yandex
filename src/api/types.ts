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

type EditProfileParameters = {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  phone: string;
  display_name: string;
}

export {
  LoginParameters,
  RegisterParameters,
  EditProfileParameters,
};
