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
} from 'antd';
import {
  GithubOutlined,
  SlackOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
import LogoFull from '@/components/logo';

export default function LoginForm() {
  return (
    <Form
      labelCol={{
        span: 8,
      }}
      style={{
        width: 450,
        padding: 16,
        border: '1px solid #efefef',
        borderRadius: 8,
        boxShadow: '0px 0px 12px -3px rgba(0,0,0,0.1)',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'saturate(180%) blur(5px)',
      }}
      autoComplete="off"
      layout="vertical"
    >
      <LogoFull fill={'#00B96B'} style={{ width: '100%', height: 44 }} />
      <Form.Item style={{ textAlign: 'left' }}>
        <h3 style={{ fontSize: 30, color: '#00804a' }}>Sign in</h3>
        <Typography.Text type="secondary">
          Don&apos;t have an account? <Typography.Link>Sign up</Typography.Link>
        </Typography.Text>
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[{ required: true }]}>
        <Input type="email" />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <Checkbox>Remember me</Checkbox>
          <Typography.Link>Forgot password?</Typography.Link>
        </Space>
      </Form.Item>
      <Form.Item>
        <Button block size="large" type="primary" htmlType="submit">
          Sign in
        </Button>
      </Form.Item>
      <Divider orientation="center">
        <Typography.Text type="secondary">Or continue with</Typography.Text>
      </Divider>
      <Space align="center" style={{ width: '100%', justifyContent: 'center' }}>
        <Button shape="round" size="large" icon={<GithubOutlined />} />
        <Button shape="round" size="large" icon={<SlackOutlined />} />
        <Button shape="round" size="large" icon={<FacebookOutlined />} />
      </Space>
    </Form>
  );
}
