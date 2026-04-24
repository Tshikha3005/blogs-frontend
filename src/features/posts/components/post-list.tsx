import { usePosts } from "../hooks/use-posts";
import { Flex, Spin } from "antd";
import type { Post } from "../types";
import { PostCard } from "./post-card";
import { PostSearch } from "./post-search";
import { Link } from "react-router-dom";
import "./post-list.css";

export const PostList = () => {
  const { data, isLoading } = usePosts();
  if (isLoading) return <Spin />;
  return (
    <>
      <Flex
        justify="center"
        align="center"
        style={{
          minWidth: "50rem",
          width: "50rem",
          margin: "1rem auto",
        }}
      >
        <Flex
          align="center"
          justify="center"
          gap="0.5rem"
          style={{ width: "100%" }}
        >
          <PostSearch />
          <Link to="/create/post" className="post-create-button">
            Add Post
          </Link>
        </Flex>
      </Flex>
      <Flex
        justify="center"
        align="center"
        gap="1rem"
        style={{
          minWidth: "50rem",
          width: "5 0rem",
          margin: "1rem auto",
        }}
        vertical
      >
        {data?.data.map((post: Post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </Flex>
    </>
  );
};
