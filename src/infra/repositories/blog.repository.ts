import { HttpHelper } from "@/lib/http";
import { ApiResponse } from "../interface/response";
import { IBlogRepository } from "@/core/ports/blog.repository";
import { IBlog, ICreateBlog } from "@/core/domain/blog";

export class BlogRepository implements IBlogRepository {
  private readonly http: HttpHelper;
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.http = new HttpHelper(this.baseUrl);
  }

  async getBlog(): Promise<ApiResponse<IBlog>> {
    const response = await this.http.get<ApiResponse<IBlog>>(`/blog`);
    return response;
  }

  async createBlog(data: ICreateBlog): Promise<ApiResponse<IBlog>> {
    const response = await this.http.post<ApiResponse<IBlog>>(`/blog`, data);
    return response;
  }

  async deleteBlog(id: string): Promise<ApiResponse<void>> {
    const response = await this.http.delete<ApiResponse<void>>(`/blog/${id}`);
    return response;
  }

  async updateBlog(id: string): Promise<ApiResponse<IBlog>> {
    const response = await this.http.put<ApiResponse<IBlog>>(`/blog/${id}`);
    return response;
  }
}
