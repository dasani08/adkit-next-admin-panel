'use client';
import { Card, Alert, Space } from 'antd';

export default function OrganizationProfile() {
  return (
    <Card title={'ALERT'} style={{ marginBottom: 16 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Alert message="Success Text" type="success" />
        <Alert message="Info Text" type="info" />
        <Alert message="Warning Text" type="warning" />
        <Alert message="Error Text" type="error" />
      </Space>
    </Card>
  );
}
