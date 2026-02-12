import Home from "./pages/home/Home";
import { blogService } from "@/infra/container";

export default async function page() {
  const blogs = await blogService.getBlog();
  return <Home blogs={blogs} />;
}
