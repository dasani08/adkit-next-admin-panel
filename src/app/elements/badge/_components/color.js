'use client';
import { Avatar, Card, Flex, Badge } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

export default function BadgeColor() {
  return (
    <Card title="Basic Usage" style={{ marginBottom: 16 }}>
      <Flex gap="middle" wrap="wrap" style={{ marginTop: 16 }}>
        <Badge count={5} color="#faad14">
          <Avatar shape="square" size="large" />
        </Badge>
        <Badge count={0} showZero color="#52c41a">
          <Avatar shape="square" size="large" />
        </Badge>
      </Flex>
    </Card>
  );
}
