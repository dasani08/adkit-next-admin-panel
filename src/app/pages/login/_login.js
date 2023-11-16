'use client';
import React from 'react';
import { Form, Input, Button } from 'antd';

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
      <Form.Item style={{ textAlign: 'center', fontSize: 30 }}>
        <h3>Login</h3>
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input type="email" />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}
