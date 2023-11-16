import React from 'react';
import Link from 'next/link';
import { Card, Flex, Space, Button, Tooltip } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import PageContent from '@/components/page-content';
import NewInvoiceForm from '@/components/shared/NewInvoiceForm';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/dashboard'}>DASHBOARD</Link>,
        },
        {
          title: <Link href={'/order'}>INVOICES</Link>,
        },
        {
          title: 'NEW INVOICE',
        },
      ]}
    >
      <Card
        style={{ margin: '16px 0' }}
        title={
          <Tooltip title="Back">
            <Button type="text" icon={<ArrowLeftOutlined />} />
          </Tooltip>
        }
      >
        <NewInvoiceForm />
        <Flex align="center" justify="end">
          <Space style={{ margin: '16px 0' }}>
            <Button>CANCEL</Button>
            <Button type="primary">SAVE & CLOSE</Button>
          </Space>
        </Flex>
      </Card>
    </PageContent>
  );
}
