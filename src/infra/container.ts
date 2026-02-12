import { BlogRepository } from "./repositories/blog.repository";
import { BlogService } from "@/core/service/blog.service";

const blogRepository = new BlogRepository();
export const blogService = new BlogService(blogRepository);
