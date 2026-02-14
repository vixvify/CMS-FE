import http from "@/lib/http";
import { ApiResponse } from "../interface/response";
import { IAuthRepository } from "@/core/ports/auth.repository";
import { ICreateUser, ILogin, IUser, ILoginResponse } from "@/core/domain/auth";

export class AuthRepository implements IAuthRepository {
  async signup(data: ICreateUser): Promise<ApiResponse<IUser>> {
    const response = await http.post<ApiResponse<IUser>>(`/auth/signup`, data);
    return response.data;
  }

  async login(data: ILogin): Promise<ApiResponse<ILoginResponse>> {
    const response = await http.post<ApiResponse<ILoginResponse>>(
      `/auth/login`,
      data,
    );
    return response.data;
  }

  async logout(): Promise<ApiResponse<void>> {
    const response = await http.post<ApiResponse<void>>(`/auth/logout`);
    return response.data;
  }
}
