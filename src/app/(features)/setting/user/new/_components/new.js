'use client';
import {
  Card,
  Tooltip,
  Button,
  Form,
  Row,
  Col,
  Input,
  Switch,
  Select,
  Typography,
  Space,
} from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

export default function NewUser() {
  const [form] = Form.useForm();

  const onSubmit = () => {
    form.submit();
  };

  return (
    <Card
      title={
        <Tooltip title="Back">
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Tooltip>
      }
      extra={
        <Space>
          <Button type="primary" onClick={onSubmit}>
            CREATE
          </Button>
          <Button>CANCEL</Button>
        </Space>
      }
    >
      <Form layout="vertical" form={form}>
        <Typography.Title level={4}>User Details</Typography.Title>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="firstName"
              label="First name"
              rules={[
                {
                  required: true,
                  message: 'Please enter first name',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="lastName"
              label="Last name"
              rules={[
                {
                  required: true,
                  message: 'Please enter last name',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: 'Please enter email',
                },
              ]}
            >
              <Input type="email" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="username" label="Username">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="password" label="Password">
              <Input.Password />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="confirmPassword" label="Confirm Password">
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item label="Active">
              <Switch
                checkedChildren="TRUE"
                unCheckedChildren="FALSE"
                defaultChecked
              />
            </Form.Item>
          </Col>
        </Row>
        <Typography.Title level={4}>Roles</Typography.Title>
        <Form.Item
          label="User Roles"
          wrapperCol={{ span: 12 }}
          extra={'A user can have one or several roles'}
        >
          <Select
            mode="multiple"
            options={['Super Admin', 'User', 'Staff'].map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </Form.Item>
      </Form>
    </Card>
  );
}
