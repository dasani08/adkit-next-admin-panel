'use client';
import { Card, Tooltip, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

export default function OrganizationProfile() {
  return (
    <Card
      title={
        <Tooltip title="Back">
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Tooltip>
      }
    ></Card>
  );
}
