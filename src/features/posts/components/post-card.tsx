import { Avatar, Card, Flex, Typography } from "antd";
import profileImg from "../../../assets/profile.jpeg";
import type { Post } from "../types";
import { Link } from "react-router-dom";

const { Text, Title, Paragraph } = Typography;
type PostCard = {
  post?: Post;
};

export const PostCard = ({ post }: PostCard) => {
  return (
    <Card
      style={{
        width: "100%",
        background: "#2d2d2d",
        border: "1px solid #404040",
        borderRadius: "0.875rem",
      }}
      bodyStyle={{ padding: "20px" }}
    >
      <Flex gap={20} justify="flex-start">
        <Avatar size={80} src={profileImg} />
        <Flex vertical style={{ width: "100%" }}>
          <Flex
            align="center"
            style={{
              borderBottom: "1px solid #404040",
              paddingBottom: "8px",
              width: "100%",
            }}
          >
            <Link
              style={{
                color: "#3c89e8",
                marginRight: "0.5rem",
              }}
              to="#"
            >
              {post?.author}
            </Link>
            <Text style={{ color: "#aaa" }}>{post?.date_posted}</Text>
          </Flex>
          <Flex vertical align="start" style={{ marginTop: "12px" }}>
            <Title level={4} style={{ color: "#fff", margin: 0 }}>
              {post?.title}
            </Title>

            <Paragraph style={{ color: "#ccc", marginTop: "8px" }}>
              {post?.content}
            </Paragraph>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};
