'use client';
import React from 'react';
import { Card, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Link from 'next/link';

import ListPage from '@/components/list-page';
import { getSaleOrders } from '@/services/order';
import { formatNumber } from '@/lib/utils/formatter';

export default function ListOrder() {
  const [filter] = React.useState({});
  const [sortedInfo] = React.useState({});

  return (
    <Card
      title="SALE ORDERS"
      style={{ margin: '16px 0' }}
      extra={[
        <Button
          key={'new-customer'}
          icon={<PlusOutlined />}
          type="primary"
          href="/order/new"
        >
          NEW
        </Button>,
      ]}
    >
      <ListPage
        size="small"
        filter={filter}
        sortedInfo={sortedInfo}
        fetchApi={getSaleOrders}
        columns={[
          {
            title: 'Sale Order#',
            key: 'Sale Order#',
            dataIndex: 'saleOrderNo',
            default: true,
            sorter: true,
            render: (saleOrderNo) => (
              <Link href={`/order/${saleOrderNo}`}>{saleOrderNo}</Link>
            ),
          },
          {
            title: 'Ref#',
            key: 'Ref#',
            dataIndex: 'referenceNo',
            default: true,
          },
          {
            title: 'Customer Name',
            key: 'Name',
            dataIndex: 'customerName',
            default: true,
            render: (customerName, { id }) => (
              <Link href={`/customer/${id}`}>{customerName}</Link>
            ),
          },
          {
            title: 'Saleperson',
            key: 'Saleperson',
            dataIndex: 'salePerson',
            default: true,
          },
          {
            title: 'Ordered Date',
            key: 'Ordered Date',
            dataIndex: 'orderedDate',
            default: true,
            sorter: true,
          },
          {
            title: 'Total',
            key: 'Total',
            dataIndex: 'total',
            default: true,
            render: (n) => formatNumber(n, '$'),
          },
        ]}
      />
    </Card>
  );
}
