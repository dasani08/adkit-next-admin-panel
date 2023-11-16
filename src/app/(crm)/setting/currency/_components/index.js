'use client';
import { Card, Tooltip, Button, Table, Space } from 'antd';
import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons';

export default function CurrencySetting() {
  return (
    <Card
      title={
        <Tooltip title="Back">
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Tooltip>
      }
      extra={
        <Space>
          <Button key={'new-currency'} icon={<PlusOutlined />} type="primary">
            New Currency
          </Button>
        </Space>
      }
    >
      <Table
        dataSource={[
          {
            name: 'CAD - Canadian Dollar',
            symbol: '$',
          },
          {
            name: 'USD - US Dollar',
            symbol: '$',
          },
          {
            name: 'EUR - Euro',
            symbol: '€',
          },
        ]}
        columns={[
          {
            key: 'NAME',
            title: 'NAME',
            dataIndex: 'name',
          },
          {
            key: 'SYMBOL',
            title: 'SYMBOL',
            dataIndex: 'symbol',
          },
        ]}
      />
    </Card>
  );
}
