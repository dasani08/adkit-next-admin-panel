'use client';
import { Alert, Card, Tooltip, Avatar, Flex } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';

export default function AvatarGroup() {
  return (
    <Card title="AVATAR GROUP" style={{ marginBottom: 16 }}>
      <Alert message="Icon, Image, and Letters are supported" />
      <Flex gap="small" wrap="wrap" style={{ marginTop: 16 }}>
        <Avatar.Group>
          <Avatar src="/photos/avatar.jpg" />
          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{ backgroundColor: '#87d068' }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{ backgroundColor: '#1677ff' }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </Flex>
    </Card>
  );
}
