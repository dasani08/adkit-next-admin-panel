import { Form, Input } from 'antd';

export default function NoteTab() {
  return (
    <Form layout="vertical" labelCol={{ span: 6 }} labelAlign="left">
      <Form.Item label="Notes (For Internal Use)">
        <Input.TextArea />
      </Form.Item>
    </Form>
  );
}
