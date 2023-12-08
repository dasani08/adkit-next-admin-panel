'use client';
import React from 'react';
import { Card } from 'antd';

import ListPage from '@/components/list-page';
import { getSaleStats } from '@/services/sale';

export default function SaleOrders() {
  const [filter] = React.useState({});
  const [sortedInfo] = React.useState({});

  return (
    <Card title="SALE ORDERS" style={{ margin: '16px 0' }}>
      <ListPage
        size="small"
        filter={filter}
        fetchApi={getSaleStats}
        sortedInfo={sortedInfo}
        columns={[
          {
            title: 'Channel',
            key: 'Channel',
            dataIndex: 'channel',
            default: true,
          },
          {
            title: 'Draft',
            key: 'Draft',
            dataIndex: 'draft',
            default: true,
          },
          {
            title: 'Confirmed',
            key: 'Confirmed',
            dataIndex: 'confirmed',
            default: true,
          },
          {
            title: 'Packed',
            key: 'Packed',
            dataIndex: 'packed',
            default: true,
          },
          {
            title: 'Shipped',
            key: 'Shipped',
            dataIndex: 'shipped',
            default: true,
          },
          {
            title: 'Invoiced',
            key: 'Invoiced',
            dataIndex: 'invoiced',
            default: true,
          },
          {
            title: 'Order Date',
            key: 'orderDate',
            dataIndex: 'orderDate',
            default: true,
            sorter: true,
            defaultSorter: true,
          },
        ]}
      />
    </Card>
  );
}
