import { Input } from "antd";

export const DynamicField = ({ field }: any) => {
  if (field.type === "textarea") {
    return <Input.TextArea rows={4} placeholder={`Enter ${field.label}`} />;
  }

  return <Input placeholder={`Enter ${field.label}`} />;
};
