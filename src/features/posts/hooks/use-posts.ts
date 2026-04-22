import { useQuery } from "@tanstack/react-query";
import { postKeys } from "../../../api/query-keys";
import { getPosts } from "../api/posts/api";

export const usePosts = () => {
  return useQuery({
    queryKey: postKeys.lists(),
    queryFn: getPosts,
  });
};
