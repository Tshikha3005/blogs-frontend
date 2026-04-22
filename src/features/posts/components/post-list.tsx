import { usePosts } from "../hooks/use-posts";
import { Flex, Spin } from "antd";
import type { Post } from "../types";
import { PostCard } from "./post-card";

export const PostList = () => {
  const { data, isLoading } = usePosts();
  if (isLoading) return <Spin />;
  return (
    <Flex
      justify="center"
      align="center"
      gap="2rem"
      vertical
      style={{
        minWidth: "30rem",
        width: "30rem",
        margin: "2rem auto",
      }}
    >
      {data?.data.map((post: Post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </Flex>
  );
};
