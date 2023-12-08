'use client';
import { Alert, Card, Space, Avatar, Flex } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function AvatarType() {
  return (
    <Card title="SIZE & SHAPE" style={{ marginBottom: 16 }}>
      <Alert message="Icon, Image, and Letters are supported" />
      <Flex gap="small" wrap="wrap" style={{ marginTop: 16 }}>
        <Space wrap size={16}>
          <Space direction="vertical" style={{ textAlign: 'center' }}>
            <Avatar size={40} icon={<UserOutlined />} />
            Icon
          </Space>
          <Space direction="vertical" style={{ textAlign: 'center' }}>
            <Avatar size={40} style={{ backgroundColor: '#87d068' }}>
              TD
            </Avatar>
            Letters
          </Space>
          <Space direction="vertical" style={{ textAlign: 'center' }}>
            <Avatar size={40} src={'/photos/avatar.jpg'} />
            Image
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
            <Avatar
              shape="square"
              size="large"
              style={{ backgroundColor: '#87d068' }}
              icon={<UserOutlined />}
            />
            Large
          </Space>
          <Space direction="vertical" style={{ textAlign: 'center' }}>
            <Avatar shape="square" size={64} src={'/photos/avatar.jpg'} />
            64px
          </Space>
        </Space>
      </Flex>
    </Card>
  );
}
