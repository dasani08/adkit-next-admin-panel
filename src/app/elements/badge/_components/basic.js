'use client';
import { Avatar, Card, Flex, Badge } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

export default function BadgeBasic() {
  return (
    <Card title="Basic Usage" style={{ marginBottom: 16 }}>
      <Flex gap="middle" wrap="wrap" style={{ marginTop: 16 }}>
        <Badge count={5}>
          <Avatar shape="square" size="large" />
        </Badge>
        <Badge count={0} showZero>
          <Avatar shape="square" size="large" />
        </Badge>
        <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
          <Avatar size="large" />
        </Badge>
        <Badge count={99} showZero>
          <Avatar shape="square" size="large" />
        </Badge>
        <Badge count={100} showZero>
          <Avatar shape="square" size="large" />
        </Badge>
      </Flex>
    </Card>
  );
}
