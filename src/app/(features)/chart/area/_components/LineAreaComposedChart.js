'use client';
import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card } from 'antd';

export default function LineAreaComposedChart() {
  const data = [
    {
      name: 'Jan',
      prev: 590,
      current: 600,
    },
    {
      name: 'Feb',
      prev: 480,
      current: 502,
    },
    {
      name: 'Mar',
      prev: 500,
      current: 520,
    },
    {
      name: 'Apr',
      prev: 510,
      current: 520,
    },
    {
      name: 'May',
      prev: 520,
      current: 525,
    },
    {
      name: 'Jun',
      prev: 550,
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
      title="LineAreaComposedChart"
      bodyStyle={{ height: 300 }}
      style={{ marginBottom: 16 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 0,
            bottom: 45,
          }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Area
            type="monotone"
            dataKey="current"
            fillOpacity={1}
            fill="url(#colorPv)"
            stroke="#82ca9d"
            name="Current period"
          />
          <Line
            name="Prev period"
            type="monotone"
            dataKey="prev"
            stroke="#ff7300"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
  );
}
