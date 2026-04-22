export type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  date_posted: string;
};

export type PostsResponse = {
  data: Post[];
};
