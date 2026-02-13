import { ApiResponse } from "@/infra/interface/response";
import { IUser, ICreateUser, ILogin } from "../domain/auth";

export interface IAuthRepository {
  signup(data: ICreateUser): Promise<ApiResponse<IUser>>;
  login(data: ILogin): Promise<ApiResponse<IUser>>;
}
