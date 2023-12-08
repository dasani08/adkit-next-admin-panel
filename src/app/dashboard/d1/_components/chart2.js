'use client';
import React from 'react';
import {
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

export default function Chart2() {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart
        width={500}
        height={250}
        margin={{
          top: 0,
          left: 0,
          bottom: 60,
        }}
      >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={35}
          fill="#8884d8"
          innerRadius={25}
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="top"
          height={36}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
