'use client';
import React from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Label,
} from 'recharts';
import { Row, Col, Flex, theme } from 'antd';

const SpendingLabel = (props) => {
  const { cx, cy, stroke } = props;
  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={-15}
        fill={stroke}
        fontSize={10}
        textAnchor="middle"
      >
        Spent
      </text>
      <text
        x={cx}
        y={cy}
        dy={8}
        fill={stroke}
        fontSize={21}
        textAnchor="middle"
      >
        $1200
      </text>
      <text
        x={cx}
        y={cy}
        dy={23}
        fontSize={10}
        fill={stroke}
        textAnchor="middle"
      >
        of $1500
      </text>
    </g>
  );
};

export default function Chart1() {
  const data = [
    { name: 'Food', value: 400 },
    { name: 'Rent', value: 300 },
    { name: 'Entertainment', value: 300 },
    { name: 'Other', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const {
    token: { colorText },
  } = theme.useToken();

  return (
    <Row style={{ height: '100%' }} gutter={16}>
      <Col lg={10} sm={24} xs={24} style={{ height: '150px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart
            width={125}
            height={125}
            margin={{
              top: 0,
            }}
          >
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
              <Label
                position={'center'}
                content={<SpendingLabel cx="50%" cy="50%" stroke={colorText} />}
              ></Label>
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Col>
      <Col lg={12} sm={24} xs={24} style={{ height: '150px' }}>
        <Flex
          vertical
          style={{ height: '100%', width: '100%' }}
          justify="center"
        >
          {data.map((d, i) => (
            <Flex
              key={d.name}
              style={{ width: '100%' }}
              justify="space-between"
              align="center"
            >
              <span>
                <em
                  style={{
                    display: 'inline-block',
                    width: 10,
                    height: 10,
                    backgroundColor: COLORS[i],
                    marginRight: 4,
                  }}
                />
                {d.name}
              </span>
              <span>{d.value}</span>
            </Flex>
          ))}
        </Flex>
      </Col>
    </Row>
  );
}
