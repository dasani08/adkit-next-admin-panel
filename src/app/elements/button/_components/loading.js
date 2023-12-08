'use client';
import { Card, Button, Flex } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

export default function LoadingButtonPage() {
  return (
    <Card title="DEFAULT" style={{ marginBottom: 16 }}>
      <Flex gap="small" wrap="wrap">
        <Flex gap="small" align="center" wrap="wrap">
          <Button type="primary" loading>
            Loading
          </Button>
          <Button type="primary" size="small" loading>
            Loading
          </Button>
          <Button type="primary" icon={<PoweroffOutlined />} loading />
        </Flex>
      </Flex>
    </Card>
  );
}
