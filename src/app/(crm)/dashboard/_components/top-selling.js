'use client';
import { Card, Table, Image, Space, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function TopSelling() {
  const items = [
    {
      label: 'This month',
      key: 'This month',
    },
    {
      label: 'Previous month',
      key: 'Previous month',
    },
    {
      label: 'Last 6 months',
      key: 'Last 6 months',
    },
  ];
  return (
    <Card
      style={{
        margin: '16px 0',
      }}
      title="TOP SELLING ITEMS"
      extra={[
        <Dropdown
          key={'1'}
          trigger={'click'}
          menu={{
            items,
          }}
        >
          <Space>
            This month
            <DownOutlined />
          </Space>
        </Dropdown>,
      ]}
    >
      <Table
        rowKey={'id'}
        size="small"
        pagination={false}
        columns={[
          {
            title: '',
            key: 'img',
            render: () => {
              return <Image alt="" width={32} src="/tshirt.png" />;
            },
            width: 40,
          },
          {
            title: 'Name',
            key: 'Name',
            dataIndex: 'name',
            render: (name) => <Link href={'/'}>{name}</Link>,
          },
          {
            title: 'Sales',
            key: 'Sales',
            dataIndex: 'sales',
          },
        ]}
        dataSource={[
          {
            id: '1',
            name: 'Onyx Vase',
            sales: 99,
          },
          {
            id: '2',
            name: 'White Shoes',
            sales: 99,
          },
        ]}
      />
    </Card>
  );
}
