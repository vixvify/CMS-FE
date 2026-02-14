import { ApiResponse } from "@/infra/interface/response";
import { IBlog, ICreateBlog, IUpdateBlog } from "../domain/blog";

export interface IBlogRepository {
  getBlog(): Promise<ApiResponse<IBlog[]>>;
  getBlogByID(id: string): Promise<ApiResponse<IBlog>>;
  createBlog(data: ICreateBlog): Promise<ApiResponse<IBlog>>;
  deleteBlog(id: string): Promise<ApiResponse<void>>;
  updateBlog(id: string, data: IUpdateBlog): Promise<ApiResponse<IBlog>>;
}
