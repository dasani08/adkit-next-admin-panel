'use client';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function RevenueChart() {
  const data = [
    {
      name: 'Sat',
      prev: 590,
      current: 600,
    },
    {
      name: 'Sun',
      prev: 480,
      current: 502,
    },
    {
      name: 'Mon',
      prev: 500,
      current: 520,
    },
    {
      name: 'Tue',
      prev: 510,
      current: 520,
    },
    {
      name: 'Wed',
      prev: 520,
      current: 525,
    },
    {
      name: 'Thu',
      prev: 550,
      current: 560,
    },
    {
      name: 'Fri',
      prev: 550,
      current: 570,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={150}
        height={40}
        data={data}
        margin={{
          top: 20,
          left: 0,
          bottom: 50,
        }}
        barCategoryGap={15}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="prev" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
