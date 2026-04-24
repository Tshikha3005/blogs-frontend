import { Link, useParams } from "react-router-dom";
import { PostCard } from "../components/post-card";
import { usePostDetails } from "../hooks/use-post-details";
import { Flex, Spin } from "antd";
import { RollbackOutlined } from "@ant-design/icons";

export const PostDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading } = usePostDetails(Number(id));
  if (isLoading) return <Spin />;
  return (
    <Flex
      vertical
      justify="center"
      align="center"
      style={{
        minWidth: "50rem",
        width: "50rem",
        margin: "2rem auto",
      }}
    >
      <Link
        style={{
          position: "absolute",
          top: "6rem",
          left: "6rem",
          background: "#2d2d2d",
          padding: "8px 10px",
          borderRadius: "50%",
          color: "#fff",
        }}
        to="/"
      >
        <RollbackOutlined style={{ fill: "#fff" }} />
      </Link>
      <PostCard post={data} />
    </Flex>
  );
};
