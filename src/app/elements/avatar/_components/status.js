'use client';
import { Alert, Card, Avatar, Flex, Badge } from 'antd';

export default function AvatarStatus() {
  return (
    <Card title="AVATAR STATUS" style={{ marginBottom: 16 }}>
      <Alert message="Icon, Image, and Letters are supported" />
      <Flex gap="small" wrap="wrap" style={{ marginTop: 16 }}>
        <Badge
          dot
          offset={[-3, 25]}
          styles={{
            indicator: {
              width: '8px',
              height: '8px',
            },
          }}
          text=""
          status="success"
        >
          <Avatar src="/photos/avatar.jpg" />
        </Badge>
        <Badge
          dot
          offset={[-3, 32]}
          styles={{
            indicator: {
              width: '12px',
              height: '12px',
            },
          }}
          text=""
          status="success"
        >
          <Avatar size={'large'} style={{ backgroundColor: '#f56a00' }}>
            KD
          </Avatar>
        </Badge>
        <Badge
          dot
          offset={[-3, 32]}
          styles={{
            indicator: {
              width: '12px',
              height: '12px',
            },
          }}
          text=""
          status="success"
        >
          <Avatar size={'large'} src="/photos/avatar.jpg" />
        </Badge>
      </Flex>
    </Card>
  );
}
