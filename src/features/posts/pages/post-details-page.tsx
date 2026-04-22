import { useParams } from "react-router-dom";
import { PostCard } from "../components/post-card";
import { usePostDetails } from "../hooks/use-post-details";
import { Flex, Spin } from "antd";

export const PostDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading } = usePostDetails(Number(id));
  if (isLoading) return <Spin />;
  return (
    <Flex
      justify="center"
      align="center"
      style={{
        minWidth: "30rem",
        width: "30rem",
        margin: "2rem auto",
      }}
    >
      <PostCard post={data} />
    </Flex>
  );
};
