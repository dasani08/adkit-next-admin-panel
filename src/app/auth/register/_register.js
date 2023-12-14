'use client';
import React from 'react';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import LogoFull from '@/components/logo';

export default function SignupForm() {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      style={{
        width: 550,
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
      <Form.Item style={{ textAlign: 'center', fontSize: 30 }}>
        <h3 style={{ fontSize: 30, color: '#00804a' }}>Sign up</h3>
        <Typography.Text type="secondary">
          Already have an account? <Typography.Link>Sign in</Typography.Link>
        </Typography.Text>
      </Form.Item>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button size="large" block type="primary" htmlType="submit">
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
}
