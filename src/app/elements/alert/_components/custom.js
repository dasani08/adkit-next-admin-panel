'use client';
import { Card, Alert, Space, Button } from 'antd';
import {
  CheckCircleOutlined,
  InfoCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';

export default function CustomAlertAction() {
  return (
    <Card title={'ALERT WITH CUSTOM ACTION'} style={{ marginBottom: 16 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Alert
          message="Success Tips"
          type="success"
          showIcon
          action={
            <Button size="small" type="text">
              UNDO
            </Button>
          }
          closable
        />
        <Alert
          message="Error Text"
          showIcon
          icon={<CloseCircleOutlined style={{ color: '#fff' }} />}
          description="Error Description Error Description Error Description Error Description"
          type="error"
          action={
            <Button size="small" danger>
              Detail
            </Button>
          }
        />
        <Alert
          message="Warning Text"
          type="warning"
          action={
            <Space>
              <Button type="text" size="small" ghost>
                Done
              </Button>
            </Space>
          }
          closable
        />
        <Alert
          message="Info Text"
          description="Info Description Info Description Info Description Info Description"
          type="info"
          action={
            <Space direction="vertical">
              <Button size="small" type="primary">
                Accept
              </Button>
              <Button size="small" danger ghost>
                Decline
              </Button>
            </Space>
          }
          closable
        />
      </Space>
    </Card>
  );
}
