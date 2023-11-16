'use client';
import React from 'react';
import { Card, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function SaleReport() {
  const [data, setData] = React.useState([]);
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
  React.useEffect(() => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Mov',
      'Dec',
    ];
    const weight = [200.0, 60.2, 30.1, 90.4, 120.9, 60.2, 70, 350, 250, 400];
    const currentMonth = new Date().getMonth();
    const labels =
      currentMonth - 10 >= 0
        ? months.slice(currentMonth - 10, currentMonth)
        : [
            ...months.slice((10 - currentMonth) * -1),
            ...months.slice(0, currentMonth),
          ];
    const _data = labels.map((label, i) => ({
      name: label,
      value: weight[i],
    }));
    setData(_data);
  }, []);

  return (
    <Card
      title="SALE REPORTS"
      bodyStyle={{ height: 400 }}
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
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#47c20b"
            fill="#52c41a"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}
