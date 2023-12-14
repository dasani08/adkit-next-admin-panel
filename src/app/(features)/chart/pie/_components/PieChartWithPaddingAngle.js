'use client';
import React from 'react';
import { Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card } from 'antd';

export default function PieChartWithPaddingAngle() {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Card
      title="PieChartWithPaddingAngle"
      bodyStyle={{ height: 300 }}
      style={{ marginBottom: 16 }}
    >
      <ResponsiveContainer width="50%" height="100%">
        <PieChart width={500} height={250}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={70}
            fill="#8884d8"
            innerRadius={50}
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            height={100}
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}
