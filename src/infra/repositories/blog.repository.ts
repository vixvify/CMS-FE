import http from "@/lib/http";
import { ApiResponse } from "../interface/response";
import { IBlogRepository } from "@/core/ports/blog.repository";
import { IBlog, ICreateBlog } from "@/core/domain/blog";

export class BlogRepository implements IBlogRepository {
  async getBlog(): Promise<ApiResponse<IBlog[]>> {
    const response = await http.get<ApiResponse<IBlog[]>>(`/blog`);
    return response.data;
  }

  async createBlog(data: ICreateBlog): Promise<ApiResponse<IBlog>> {
    const response = await http.post<ApiResponse<IBlog>>(`/blog`, data);
    return response.data;
  }

  async deleteBlog(id: string): Promise<ApiResponse<void>> {
    const response = await http.delete<ApiResponse<void>>(`/blog/${id}`);
    return response.data;
  }

  async updateBlog(id: string): Promise<ApiResponse<IBlog>> {
    const response = await http.put<ApiResponse<IBlog>>(`/blog/${id}`);
    return response.data;
  }
}
