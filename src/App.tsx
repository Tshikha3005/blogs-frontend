import { Route, Routes } from "react-router-dom";
import { ConfigProvider, theme as antdTheme } from "antd";
import { useState } from "react";
import BlogLayout from "./blog-layout/BlogLayout";
import PostPage from "./features/posts/pages/posts-page";
import { PostDetailsPage } from "./features/posts/pages/post-details-page";

export type ThemeType = "light" | "dark" | "auto";

function getAutoTheme(): "light" | "dark" {
  const hour = new Date().getHours();
  return hour >= 18 || hour < 6 ? "dark" : "light";
}

export default function App() {
  const [theme, setTheme] = useState<ThemeType>("dark");
  const resolvedTheme = theme === "auto" ? getAutoTheme() : theme;

  const isDark = resolvedTheme === "dark";

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark
          ? antdTheme.darkAlgorithm
          : antdTheme.defaultAlgorithm,
      }}
    >
      <Routes>
        <Route
          path="/"
          element={<BlogLayout theme={theme} setTheme={setTheme} />}
        >
          <Route index element={<PostPage />} />
          <Route path={"/:id"} element={<PostDetailsPage />} />
          <Route path="about" element={<div>About Page</div>} />
          <Route path="login" element={<div>Login Page</div>} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}
