export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
}

export interface ICreateUser {
  username: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  id: string;
  email: string;
  username: string;
}
