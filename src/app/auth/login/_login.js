'use client';
import React from 'react';
import {
  Form,
  Input,
  Button,
  Typography,
  Space,
  Checkbox,
  Divider,
  Card,
  Row,
  Col,
  Flex,
} from 'antd';
import {
  GithubOutlined,
  SlackOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
import { redirect } from 'next/navigation';

import { useAuth } from '@/state/auth/auth-context';
import LogoFull from '@/components/logo';

export default function LoginForm() {
  const { user, login } = useAuth();
  const [form] = Form.useForm();

  const handleLogin = ({ email, password }) => {
    login(email, password);
  };

  React.useEffect(() => {
    if (user && user.email) redirect('/dashboard');
  }, [user]);

  return (
    <Card
      style={{
        width: 800,
        padding: 16,
        border: '1px solid #efefef',
        borderRadius: 8,
        boxShadow: '0px 0px 12px -3px rgba(0,0,0,0.1)',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'saturate(180%) blur(5px)',
      }}
    >
      <LogoFull fill={'#00B96B'} style={{ width: '100%', height: 44 }} />
      <Row gutter={16}>
        <Col lg={12} md={24}>
          <Form
            labelCol={{
              span: 8,
            }}
            autoComplete="off"
            layout="vertical"
            form={form}
            onFinish={handleLogin}
            initialValues={{ email: 'demo@adkit.com', password: '123456' }}
          >
            <Form.Item style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: 30, color: '#00804a' }}>Sign in</h3>
              <Typography.Text type="secondary">
                Don&apos;t have an account?{' '}
                <Typography.Link>Sign up</Typography.Link>
              </Typography.Text>
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please enter your email' }]}
            >
              <Input type="email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please enter your password' },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                <Checkbox>Remember me</Checkbox>
                <Typography.Link>Forgot password?</Typography.Link>
              </Space>
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Sign in
              </Button>
            </Form.Item>
            <Divider orientation="center">
              <Typography.Text type="secondary">
                Or continue with
              </Typography.Text>
            </Divider>
            <Space
              align="center"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Button shape="round" size="large" icon={<GithubOutlined />} />
              <Button shape="round" size="large" icon={<SlackOutlined />} />
              <Button shape="round" size="large" icon={<FacebookOutlined />} />
            </Space>
          </Form>
        </Col>
        <Col lg={12} md={24}>
          <Flex
            vertical
            align="center"
            justify="center"
            style={{ height: '100%' }}
          >
            <Typography.Title style={{ color: '#00804a' }}>
              New Here?
            </Typography.Title>
            <Typography.Text style={{ marginTop: 16 }}>
              Sign up and discover a great amount of new features
            </Typography.Text>
            <Button type="primary" shape="round" style={{ marginTop: 32 }}>
              Sign up
            </Button>
          </Flex>
        </Col>
      </Row>
    </Card>
  );
}
