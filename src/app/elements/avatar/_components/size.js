'use client';
import { Alert, Card, Space, Avatar, Flex } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function AvatarSize() {
  return (
    <Card title="SIZE & SHAPE" style={{ marginBottom: 16 }}>
      <Alert message="An avatar comes with different sizes and shapes" />
      <Flex gap="small" wrap="wrap" style={{ marginTop: 16 }}>
        <Space wrap size={16}>
          <Space direction="vertical" style={{ textAlign: 'center' }}>
            <Avatar size="small" icon={<UserOutlined />} />
            Small
          </Space>
          <Space direction="vertical" style={{ textAlign: 'center' }}>
            <Avatar icon={<UserOutlined />} />
            Middle
          </Space>
          <Space direction="vertical" style={{ textAlign: 'center' }}>
            <Avatar size="large" icon={<UserOutlined />} />
            Large
          </Space>
          <Space direction="vertical" style={{ textAlign: 'center' }}>
            <Avatar size={64} icon={<UserOutlined />} />
            64px
          </Space>
        </Space>
      </Flex>
      <Flex gap="small" wrap="wrap" style={{ marginTop: 16 }}>
        <Space wrap size={16}>
          <Space direction="vertical" style={{ textAlign: 'center' }}>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
            Small
          </Space>
          <Space direction="vertical" style={{ textAlign: 'center' }}>
            <Avatar shape="square" icon={<UserOutlined />} />
            Middle
          </Space>
          <Space direction="vertical" style={{ textAlign: 'center' }}>
            <Avatar shape="square" size="large" icon={<UserOutlined />} />
            Large
          </Space>
          <Space direction="vertical" style={{ textAlign: 'center' }}>
            <Avatar shape="square" size={64} icon={<UserOutlined />} />
            64px
          </Space>
        </Space>
      </Flex>
    </Card>
  );
}
