'use client';
import React from 'react';
import { Card, Button, Space, Typography } from 'antd';
import { PlusOutlined, FileTextOutlined } from '@ant-design/icons';
import Link from 'next/link';

import ListPage from '@/components/list-page';
import { getInvoices } from '@/services/invoice';

export default function InvoicePage() {
  const [filter] = React.useState({});
  const [sortedInfo] = React.useState({});

  return (
    <Card
      title="INVOICES"
      style={{ margin: '16px 0' }}
      extra={[
        <Link key={'new-invoice'} href="/invoice/new">
          <Button icon={<PlusOutlined />} type="primary">
            NEW
          </Button>
        </Link>,
      ]}
    >
      <ListPage
        size="small"
        filter={filter}
        sortedInfo={sortedInfo}
        fetchApi={getInvoices}
        showHeader={false}
        columns={[
          {
            title: 'Icon',
            key: 'Icon',
            width: 24,
            render: () => <FileTextOutlined />,
            default: true,
          },
          {
            title: 'Invoice No',
            key: 'Invoice No',
            render: (_, { invoiceNo, invoicedDate }) => (
              <Space direction="vertical" size={'small'} style={{ rowGap: 0 }}>
                <Link href={`/invoice/${invoiceNo}`}>{invoiceNo}</Link>
                <Typography.Text type="secondary">
                  {invoicedDate}
                </Typography.Text>
              </Space>
            ),
            width: 200,
            default: true,
          },
          {
            title: 'Status',
            key: 'Status',
            width: 200,
            render: () => 'APPROVED',
            default: true,
          },
          {
            title: 'Balance Due',
            key: 'Balance Due',
            width: 300,
            render: () => (
              <Space direction="vertical" style={{ rowGap: 0 }}>
                <Typography.Text type="secondary">Balance Due</Typography.Text>
                <Typography.Text type="secondary">
                  $30.00 (Due On 20 Jul 2023)
                </Typography.Text>
              </Space>
            ),
            default: true,
          },
          {
            title: 'Amount',
            key: 'Amount',
            render: () => (
              <Space direction="vertical" style={{ rowGap: 0 }}>
                <Typography.Text type="secondary">Amount</Typography.Text>
                <Typography.Text strong>$30.00</Typography.Text>
              </Space>
            ),
            align: 'right',
            default: true,
          },
        ]}
      />
    </Card>
  );
}
