'use client';
import React from 'react';
import { ComposedChart, Area, ResponsiveContainer } from 'recharts';
import { Card } from 'antd';

export default function SimpleAreaChart() {
  const data = [
    {
      name: 'Jan',
      prev: 200,
      current: 200,
    },
    {
      name: 'Feb',
      prev: 450,
      current: 450,
    },
    {
      name: 'Mar',
      prev: 300,
      current: 300,
    },
    {
      name: 'Apr',
      prev: 510,
      current: 270,
    },
    {
      name: 'May',
      prev: 600,
      current: 390,
    },
    {
      name: 'Jun',
      prev: 280,
      current: 560,
    },
    {
      name: 'Jul',
      prev: 550,
      current: 570,
    },
    {
      name: 'Aug',
      prev: 650,
      current: 550,
    },
    {
      name: 'Sept',
      prev: 700,
      current: 650,
    },
    {
      name: 'Oct',
      prev: 710,
    },
    {
      name: 'Nov',
      prev: 720,
    },
    {
      name: 'Dec',
      prev: 730,
    },
  ];

  return (
    <Card
      title="SimpleAreaChart"
      bodyStyle={{ height: 300 }}
      style={{ marginBottom: 16 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart height={200} data={data}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="35%" stopColor="#82ca9d" stopOpacity={0.5} />
              <stop offset="75%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="prev"
            fillOpacity={1}
            fill="url(#colorPv)"
            stroke="#82ca9d"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
  );
}
