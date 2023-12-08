'use client';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

export default function SaleDynamicReport() {
  const data = [
    {
      name: 'Jan',
      uv: 40,
      pv: 60,
    },
    {
      name: 'Feb',
      uv: 45,
      pv: 55,
    },
    {
      name: 'Mar',
      uv: 30,
      pv: 70,
    },
    {
      name: 'Apr',
      uv: 65,
      pv: 35,
    },
    {
      name: 'May',
      uv: 70,
      pv: 30,
    },
    {
      name: 'Jun',
      uv: 95,
      pv: 5,
    },
    {
      name: 'Jul',
      uv: 80,
      pv: 20,
    },
    {
      name: 'Aug',
      uv: 80,
      pv: 20,
    },
    {
      name: 'Sep',
      uv: 80,
      pv: 20,
    },
    {
      name: 'Oct',
      uv: 80,
      pv: 20,
    },
    {
      name: 'Nov',
      uv: 80,
      pv: 20,
    },
    {
      name: 'Dec',
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
        <YAxis />
        <Bar
          dataKey="uv"
          name="Spent"
          stackId="a"
          fill="#82ca9d"
          barSize={15}
        />
        <Bar
          dataKey="pv"
          name="Income"
          stackId="a"
          fill="#ddf1e5"
          barSize={15}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
