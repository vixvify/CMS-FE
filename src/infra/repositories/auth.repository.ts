import http from "@/lib/http";
import { ApiResponse } from "../interface/response";
import { IAuthRepository } from "@/core/ports/auth.repository";
import { ICreateUser, ILogin, IUser } from "@/core/domain/auth";

export class AuthRepository implements IAuthRepository {
  async signup(data: ICreateUser): Promise<ApiResponse<IUser>> {
    const response = await http.post<ApiResponse<IUser>>(`/auth/signup`, data);
    return response.data;
  }

  async login(data: ILogin): Promise<ApiResponse<IUser>> {
    const response = await http.post<ApiResponse<IUser>>(`/auth/login`, data);
    return response.data;
  }
}
