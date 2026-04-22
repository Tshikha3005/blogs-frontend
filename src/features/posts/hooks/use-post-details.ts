import { useQuery } from "@tanstack/react-query";
import { postKeys } from "../../../api/query-keys";
import { getPostById } from "../api/posts/api";

export const usePostDetails = (id: number) => {
  return useQuery({
    queryKey: postKeys.detail(id),
    queryFn: () => getPostById(id),
    enabled: !!id,
  });
};
