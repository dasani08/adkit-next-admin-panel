'use client';
import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function Chart3() {
  const data = [
    {
      name: 'No value',
      max: 4,
      curr: 60,
    },
    {
      name: '1.0',
      max: 10,
      curr: 60,
    },
    {
      name: '2.0',
      max: 7,
      curr: 58,
    },
    {
      name: '3.0',
      max: 7,
      curr: 62,
    },
    {
      name: '4.0',
      max: 0,
      curr: 70,
    },
    {
      name: '5.0',
      max: 0,
      curr: 80,
    },
    {
      name: '6.0',
      max: 3,
      curr: 69,
    },
    {
      name: '7.0',
      max: 4,
      curr: 57,
    },
    {
      name: '8.0',
      max: 0,
      curr: 70,
    },
    {
      name: '9.0',
      max: 0,
      curr: 70,
    },
    {
      name: '10.0',
      max: 0,
      curr: 70,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 0,
          bottom: 80,
        }}
        barCategoryGap={10}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" angle={-22.5} tickSize={5} />
        <Tooltip />
        <Bar dataKey="curr" stackId="a" fill="#8884d8" />
        <Bar dataKey="max" stackId="a" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
