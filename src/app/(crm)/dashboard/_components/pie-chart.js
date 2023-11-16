'use client';
import React from 'react';
import { Card } from 'antd';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

export default function MyPieChart() {
  const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
  ];

  return (
    <Card title="Active orders" bodyStyle={{ height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data02}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}
