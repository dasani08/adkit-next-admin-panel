'use client';
import { Card } from 'antd';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { randColor } from '@/lib/utils/color';

const data = [
  {
    name: 'Page A',
    lastYear: 4000,
    thisYear: 2400,
  },
  {
    name: 'Page B',
    lastYear: 3000,
    thisYear: 1398,
  },
  {
    name: 'Page C',
    lastYear: 2000,
    thisYear: 9800,
  },
  {
    name: 'Page D',
    lastYear: 2780,
    thisYear: 3908,
  },
  {
    name: 'Page E',
    lastYear: 1890,
    thisYear: 4800,
  },
  {
    name: 'Page F',
    lastYear: 2390,
    thisYear: 3800,
  },
  {
    name: 'Page G',
    lastYear: 3490,
    thisYear: 4300,
  },
];

export default function SaleChart() {
  return (
    <Card title="Bar Chart" bodyStyle={{ height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="lastYear"
            fill={`#${randColor()}`}
            name="Last Year"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="thisYear"
            fill={`#${randColor()}`}
            name="This Year"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
