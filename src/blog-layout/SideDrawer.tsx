import { MenuFoldOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

export const SideDrawer = ({
  isOpen,
  onClose,
  isMobile,
}: {
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
}) => {
  return (
    <>
      {isMobile && (
        <Drawer
          title={<MenuFoldOutlined onClick={onClose} />}
          placement={"left"}
          closable={false}
          onClose={onClose}
          open={isOpen}
          key={"left"}
        >
          eqwe
        </Drawer>
      )}
    </>
  );
};
