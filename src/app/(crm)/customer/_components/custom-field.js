import { Form, Input, Typography } from 'antd';

export default function CustomFieldTab() {
  return (
    <Form labelCol={{ span: 6 }} wrapperCol={{ span: 8 }} labelAlign="left">
      <Form.Item
        label="Membership ID"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Typography.Text type="danger">Note:</Typography.Text> You can add
      additional fields for your customers and have these show up on your PDF by
      going to Settings
    </Form>
  );
}
