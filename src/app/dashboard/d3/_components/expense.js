'use client';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function ExpenseReport() {
  const data = [
    {
      name: 'Mon',
      uv: 40,
      pv: 60,
    },
    {
      name: 'Tue',
      uv: 45,
      pv: 55,
    },
    {
      name: 'Wed',
      uv: 30,
      pv: 70,
    },
    {
      name: 'Thu',
      uv: 65,
      pv: 35,
    },
    {
      name: 'Fri',
      uv: 70,
      pv: 30,
    },
    {
      name: 'Sat',
      uv: 95,
      pv: 5,
    },
    {
      name: 'Sun',
      uv: 80,
      pv: 20,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        height={100}
        data={data}
        margin={{
          top: 0,
          bottom: 50,
        }}
      >
        <XAxis dataKey="name" />
        <Legend verticalAlign="top" />
        <Bar dataKey="uv" name="Spent" stackId="a" fill="#82ca9d" />
        <Bar dataKey="pv" name="Income" stackId="a" fill="#addcbf" />
      </BarChart>
    </ResponsiveContainer>
  );
}
