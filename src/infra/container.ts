import { BlogRepository } from "./repositories/blog.repository";
import { BlogService } from "@/core/service/blog.service";
import { AuthRepository } from "./repositories/auth.repository";
import { AuthService } from "@/core/service/auth.service";

const blogRepository = new BlogRepository();
export const blogService = new BlogService(blogRepository);

const authrepository = new AuthRepository();
export const authservice = new AuthService(authrepository);
