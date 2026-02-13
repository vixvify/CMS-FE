export interface IBlog {
  id: string;
  title: string;
  content: string;
  author: string;
  created_at: string;
  userId: string;
}

export interface ICreateBlog {
  title: string;
  content: string;
  author: string;
  userId: string;
}
