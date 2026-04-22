import { api } from "../../../../api/client";
import type { Post, PostsResponse } from "../../types";

export const getPosts = async (): Promise<PostsResponse> => {
  const { data } = await api.get("/posts");
  return data;
};

export const getPostById = async (id: number): Promise<Post> => {
  const { data } = await api.get(`/posts/${id}`);
  return data;
};
