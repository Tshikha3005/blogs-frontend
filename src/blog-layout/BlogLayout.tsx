import { Layout, Button, Flex } from "antd";
import { Link, Outlet } from "react-router-dom";
import { ThemeDropdown } from "./ThemeDropdown";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { useIsMobile } from "../hooks/useIsMobile";
import { useState } from "react";
import { SideDrawer } from "./SideDrawer";

const { Header, Footer } = Layout;
type ThemeType = "light" | "dark" | "auto";

type BlogLayoutProps = {
  theme: ThemeType;
  setTheme: (t: ThemeType) => void;
};
export default function BlogLayout({ theme, setTheme }: BlogLayoutProps) {
  const isMobile = useIsMobile();
  console.log("BlogLayout rendered");
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        {/* HEADER */}
        {isMobile ? (
          <MenuUnfoldOutlined
            onClick={() => setIsOpen(true)}
            style={{
              background: "#001529",
              width: "56px",
              height: "56px",
              color: "#fff",
              fontSize: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        ) : (
          <Header style={{ display: "flex", justifyContent: "space-between" }}>
            <Flex style={{ color: "white", fontSize: "18px" }}>
              <Link to="/" style={{ color: "white", marginRight: "1.25rem" }}>
                FastAPI Blog
              </Link>
              <Link to="/" style={{ color: "#fff" }}>
                Home
              </Link>
            </Flex>

            <Flex gap="0.5rem" align="center">
              <Button type="default" style={{ marginRight: 10 }}>
                Login
              </Button>
              <Button type="primary">Register</Button>
              <ThemeDropdown theme={theme} setTheme={setTheme} />
            </Flex>
          </Header>
        )}

        {/* BODY */}
        <Layout>
          {/* MAIN CONTENT */}
          <Outlet />
        </Layout>

        {/* FOOTER */}
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#001529",
            color: "#fff",
          }}
        >
          © 2026 Your Name
        </Footer>
      </Layout>
      <SideDrawer isOpen={isOpen} onClose={onClose} isMobile={isMobile} />
    </>
  );
}
