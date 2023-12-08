'use client';
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Row, Col, Flex } from 'antd';

export default function Chart4() {
  const data = [
    { name: '62% New', value: 62 },
    { name: '26% Returning', value: 26 },
    { name: '12% Inactive', value: 12 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Row style={{ height: '100%' }} gutter={16}>
      <Col lg={24} md={24} sm={24} xs={24} style={{ height: '100px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={45}
              fill="#8884d8"
              innerRadius={25}
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
      <Col lg={24} md={24} sm={24} xs={24} style={{ height: '100px' }}>
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
