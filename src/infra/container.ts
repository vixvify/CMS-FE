import { BlogRepository } from "./repositories/blog.repository";
import { BlogService } from "@/core/service/blog.service";

export const API_URL = process.env.API_URL || "https://localhost:8080";

export const baseUrl = `${API_URL}/api`;

const blogRepository = new BlogRepository(baseUrl);
export const blogService = new BlogService(blogRepository);
