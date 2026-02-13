import { ICreateUser, ILogin, IUser } from "../domain/auth";
import { IAuthRepository } from "../ports/auth.repository";

export class AuthService {
  constructor(private readonly authRepository: IAuthRepository) {}

  async signup(data: ICreateUser): Promise<IUser> {
    const response = await this.authRepository.signup(data);
    return response.data;
  }

  async login(data: ILogin): Promise<IUser> {
    const response = await this.authRepository.login(data);
    return response.data;
  }
}
