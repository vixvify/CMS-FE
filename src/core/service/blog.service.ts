import { IBlog, ICreateBlog } from "../domain/blog";
import { IBlogRepository } from "../ports/blog.repository";

export class BlogService {
  constructor(private readonly blogRepository: IBlogRepository) {}

  async getBlog(): Promise<IBlog> {
    const response = await this.blogRepository.getBlog();
    return response.data;
  }

  async createBlog(data: ICreateBlog): Promise<IBlog> {
    const response = await this.blogRepository.createBlog(data);
    return response.data;
  }

  async deleteBlog(id: string): Promise<void> {
    const response = await this.blogRepository.deleteBlog(id);
    return response.data;
  }

  async updateBlog(id: string): Promise<IBlog> {
    const response = await this.blogRepository.updateBlog(id);
    return response.data;
  }
}
