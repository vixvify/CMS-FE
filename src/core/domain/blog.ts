export interface IBlog {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  userId: string;
}

export interface ICreateBlog {
  title: string;
  content: string;
  author: string;
  userId: string;
}
