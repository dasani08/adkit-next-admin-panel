'use client';
import { Card, Button, Flex } from 'antd';

export default function ButtonPage() {
  return (
    <Card title="DEFAULT" style={{ marginBottom: 16 }}>
      <Flex gap="small" wrap="wrap">
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>
    </Card>
  );
}
