import { api } from "../../../../api/client";
import type { PostsResponse } from "../../types";

export const getPosts = async (): Promise<PostsResponse> => {
  const { data } = await api.get("/posts");
  console.log(data, "DATA");
  return data;
};
