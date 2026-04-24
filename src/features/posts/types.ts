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

export type PostFormValues = {
  title: string;
  author: string;
  content: string;
};
