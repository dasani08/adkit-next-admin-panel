import { Form, Input, Select, Row, Col, Typography } from 'antd';

export default function AddressTab() {
  return (
    <Form labelCol={{ span: 8 }} labelAlign="left">
      <Row gutter={16}>
        <Col span={12}>
          <Typography.Text type="secondary">Billing Address</Typography.Text>
          <Form.Item label="Attention" style={{ marginTop: 8 }}>
            <Input />
          </Form.Item>
          <Form.Item label="Street">
            <Input />
          </Form.Item>
          <Form.Item label="City">
            <Input />
          </Form.Item>
          <Form.Item label="State">
            <Input />
          </Form.Item>
          <Form.Item label="Zip Code">
            <Input />
          </Form.Item>
          <Form.Item label="Country">
            <Select />
          </Form.Item>
          <Form.Item label="Fax">
            <Input />
          </Form.Item>
          <Form.Item label="Phone">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Typography.Text style={{ marginBottom: 8 }} type="secondary">
            Shipping Address
          </Typography.Text>
          <Form.Item label="Attention" style={{ marginTop: 8 }}>
            <Input />
          </Form.Item>
          <Form.Item label="Street">
            <Input />
          </Form.Item>
          <Form.Item label="City">
            <Input />
          </Form.Item>
          <Form.Item label="State">
            <Input />
          </Form.Item>
          <Form.Item label="Zip Code">
            <Input />
          </Form.Item>
          <Form.Item label="Country">
            <Select />
          </Form.Item>
          <Form.Item label="Fax">
            <Input />
          </Form.Item>
          <Form.Item label="Phone">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
