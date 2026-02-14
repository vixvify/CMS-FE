import { ApiResponse } from "@/infra/interface/response";
import { ILoginResponse, ICreateUser, ILogin, IUser } from "../domain/auth";

export interface IAuthRepository {
  signup(data: ICreateUser): Promise<ApiResponse<IUser>>;
  login(data: ILogin): Promise<ApiResponse<ILoginResponse>>;
  logout(): Promise<ApiResponse<void>>;
}
