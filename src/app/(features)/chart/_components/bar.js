'use client';
import { Card } from 'antd';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Data/Telecom OEM',
    ad1: 1,
  },
  {
    name: 'ERP',
    ad1: 1,
  },
  {
    name: 'Government',
    ad1: 1,
  },
  {
    name: 'Large Enterprise',
    ad1: 1,
  },
  {
    name: 'Optical Networking',
    ad1: 1,
  },
  {
    name: 'Service Provider',
    ad1: 1,
  },
  {
    name: 'Storage Equipment',
    ad1: 1,
    ad2: 1,
  },
];

export default function BarChartPage() {
  return (
    <Card bodyStyle={{ height: 400 }} title="Stack Bar Chart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
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
          <Bar dataKey="ad1" stackId="a" fill={`#00804a`} />
          <Bar dataKey="ad2" stackId="a" fill={`#00B96B`} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
