import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { getLabel } from "../utils";
import type { ThemeType } from "../App";

export const ThemeDropdown = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: (t: ThemeType) => void;
}) => {
  const items = [
    { key: "light", label: "🌞 Light" },
    { key: "dark", label: "🌙 Dark" },
    { key: "auto", label: "🌓 Auto" },
  ];

  const handleChange = ({ key }: { key: string }) => {
    setTheme(key as ThemeType);
  };

  return (
    <Dropdown menu={{ items, onClick: handleChange, selectedKeys: [theme] }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {getLabel(theme)}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};
