export interface IBlog {
  id: string;
  title: string;
  content: string;
  author: string;
  created_at: string;
  user_id: string;
}

export interface ICreateBlog {
  title: string;
  content: string;
  author: string;
  user_id: string;
}
