'use client';
import { Card, Tooltip, Button, Table, Space } from 'antd';
import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons';

export default function TaxSetting() {
  return (
    <Card
      title={
        <Tooltip title="Back">
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Tooltip>
      }
      extra={
        <Space>
          <Button key={'new-tax'} icon={<PlusOutlined />} type="primary">
            New Tax
          </Button>
          <Button key={'new-tax'} icon={<PlusOutlined />} type="primary">
            New Tax Grouop
          </Button>
        </Space>
      }
    >
      <Table
        dataSource={[
          {
            name: 'Sales Tax',
            rate: 4,
          },
          {
            name: 'Service Tax',
            rate: 3.5,
          },
          {
            name: 'Shopify Sales Tax',
            rate: 0,
          },
          {
            name: 'Vat',
            rate: 5,
          },
        ]}
        columns={[
          {
            key: 'TAX NAME',
            title: 'TAX NAME',
            dataIndex: 'name',
          },
          {
            key: 'RATE (%)',
            title: 'RATE (%)',
            dataIndex: 'rate',
          },
        ]}
      />
    </Card>
  );
}
