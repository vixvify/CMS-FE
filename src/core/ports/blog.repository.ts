import { ApiResponse } from "@/infra/interface/response";
import { IBlog, ICreateBlog } from "../domain/blog";

export interface IBlogRepository {
  getBlog(): Promise<ApiResponse<IBlog>>;
  createBlog(data: ICreateBlog): Promise<ApiResponse<IBlog>>;
  deleteBlog(id: string): Promise<ApiResponse<void>>;
  updateBlog(id: string): Promise<ApiResponse<IBlog>>;
}
