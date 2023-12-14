'use client';
import React from 'react';
import { theme, Card } from 'antd';
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
} from 'recharts';

export default function TinyLineChart() {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const data = [
    {
      name: 'Jan',
      uv: 40,
      pv: 90000,
    },
    {
      name: 'Feb',
      uv: 45,
      pv: 120000,
    },
    {
      name: 'Mar',
      uv: 30,
      pv: 110009,
    },
    {
      name: 'Apr',
      uv: 65,
      pv: 250000,
    },
    {
      name: 'May',
      uv: 70,
      pv: 300000,
    },
    {
      name: 'Jun',
      uv: 95,
      pv: 355000,
    },
    {
      name: 'Jul',
      uv: 80,
      pv: 290000,
    },
    {
      name: 'Aug',
      uv: 80,
      pv: 450000,
    },
    {
      name: 'Sep',
      uv: 80,
      pv: 500000,
    },
    {
      name: 'Oct',
      uv: 80,
      pv: 520000,
    },
    {
      name: 'Nov',
      uv: 80,
      pv: 525000,
    },
    {
      name: 'Dec',
      uv: 80,
      pv: 580000,
    },
  ];

  const toGroup = (val) => {
    const _val = parseInt(val / 1000);
    return `${_val}k`;
  };

  return (
    <Card
      title="TinyLineChart"
      bodyStyle={{ height: 300 }}
      style={{ marginBottom: 16 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={300}
          height={100}
          data={data}
          margin={{
            bottom: 20,
          }}
        >
          <Line
            type="monotone"
            dataKey="pv"
            stroke={colorPrimary}
            strokeWidth={2}
            dot={false}
          />
          <XAxis dataKey={'name'} />
          <YAxis tickFormatter={toGroup} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
