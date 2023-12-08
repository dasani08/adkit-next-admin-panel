'use client';
import React from 'react';
import { Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Row, Col, Flex } from 'antd';

export default function Chart4() {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Row style={{ height: '100%' }} gutter={16}>
      <Col lg={14} md={12} sm={12} style={{ height: '240px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={500} height={125}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={75}
              fill="#8884d8"
              innerRadius={55}
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
            {/* <Legend verticalAlign="top" height={36} /> */}
          </PieChart>
        </ResponsiveContainer>
      </Col>
      <Col lg={10} md={12} sm={12} style={{ height: '240px' }}>
        <Flex vertical style={{ height: '100%' }} justify="center">
          {data.map((d, i) => (
            <Flex key={d.name} justify="space-between" align="center">
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
