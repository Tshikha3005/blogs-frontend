import { Button, Flex, Form } from "antd";
import { postFormConfig } from "../config/post-config";
import { DynamicField } from "./field-renderer";
import type { PostFormValues } from "../types";

export const PostCreateForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: PostFormValues) => {
    console.log(values, "Form submit");
  };

  return (
    <Flex
      vertical
      align="center"
      justify="center"
      style={{ width: "600px", minWidth: "600px", margin: "0 auto" }}
    >
      <h1>Create your post</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onValuesChange={(changed, all) => console.log(all)}
      >
        {postFormConfig.map((field) => (
          <Form.Item
            key={field.name}
            name={field.name}
            label={field.label}
            rules={field.rules}
          >
            <DynamicField field={field} />
          </Form.Item>
        ))}
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </Flex>
  );
};
