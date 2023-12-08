'use client';
import { Col, Row, Flex, Space, Avatar, Badge, Table, theme } from 'antd';

import StatCard from './card';
import Chart1 from './chart1';
import Chart2 from './chart2';
import Chart3 from './chart3';
import Chart4 from './chart4';

export default function CrmDashboard() {
  const {
    token: { colorTextDescription, colorPrimary },
  } = theme.useToken();

  return (
    <>
      <Row gutter={[8, 8]}>
        <Col lg={12} md={24} sm={24} xs={24}>
          <Row gutter={[8, 8]} wrap={true} justify="center">
            <Col lg={12} md={12} sm={24} xs={24}>
              <StatCard
                title={'Opportunities Won'}
                description="Current month"
                value={215}
                valueColor={'#00B96B'}
                height={150}
              />
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <StatCard
                title={'Value of Won Opportunities'}
                description="Current month"
                value={'$99,999'}
                height={150}
              />
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <StatCard
                title={'Leads'}
                description="Current month"
                value={699}
                height={150}
              />
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <StatCard
                title={'Average Account Health Score'}
                description="Current month"
                value={5}
                valueColor={'#00B96B'}
                height={150}
              />
            </Col>
          </Row>
        </Col>
        <Col lg={12} md={24} sm={24} xs={24}>
          <StatCard
            title={'Top Employees'}
            description="Current month"
            height={308}
          >
            <Flex justify="space-between" align="center">
              <Space direction="vertical" align="center">
                <Badge count="1" offset={[-40, 80]}>
                  <Avatar
                    size={80}
                    src={'/photos/avatar.jpg'}
                    style={{
                      border: `1px solid ${colorPrimary}`,
                      boxShadow: '0 0 9px 0px rgba(0, 185, 107, 1)',
                    }}
                  />
                </Badge>
                <span style={{ color: colorTextDescription }}>Anna Cole</span>
                <span style={{ fontSize: '21pt' }}>$9,999</span>
              </Space>
              <Space direction="vertical" align="center">
                <Badge count="2" offset={[-40, 80]}>
                  <Avatar
                    size={80}
                    src={'/photos/avatar.jpg'}
                    style={{
                      border: `1px solid ${colorPrimary}`,
                      boxShadow: '0 0 9px 0px rgba(0, 185, 107, 1)',
                    }}
                  />
                </Badge>
                <span style={{ color: colorTextDescription }}>Anna Cole</span>
                <span style={{ fontSize: '21pt' }}>$9,999</span>
              </Space>
              <Space direction="vertical" align="center">
                <Badge count="3" offset={[-40, 80]}>
                  <Avatar
                    size={80}
                    src={'/photos/avatar.jpg'}
                    style={{
                      border: `1px solid ${colorPrimary}`,
                      boxShadow: '0 0 9px 0px rgba(0, 185, 107, 1)',
                    }}
                  />
                </Badge>
                <span style={{ color: colorTextDescription }}>Anna Cole</span>
                <span style={{ fontSize: '21pt' }}>$9,999</span>
              </Space>
            </Flex>
          </StatCard>
        </Col>
      </Row>
      <Row gutter={[8, 8]} style={{ marginTop: 8 }}>
        <Col lg={8} md={12} sm={24} xs={24}>
          <StatCard
            title={'Value of Won Opportunities'}
            description="Jan 01, 2022 - Jan 01, 2023"
            height={200}
          >
            <Chart1 />
          </StatCard>
        </Col>
        <Col lg={8} md={12} sm={24} xs={24}>
          <StatCard
            title={'Accounts Subscribed'}
            description="Current Month"
            height={200}
          >
            <Chart2 />
          </StatCard>
        </Col>
        <Col lg={8} md={12} sm={24} xs={24}>
          <StatCard
            title={'Accounts by Health Score'}
            description="Current Month"
            height={200}
          >
            <Chart3 />
          </StatCard>
        </Col>
      </Row>
      <Row gutter={[8, 8]} style={{ marginTop: 8 }}>
        <Col lg={16} md={12} sm={24} xs={24}>
          <StatCard
            title={'Opportunities'}
            description={'Curent month'}
            height={350}
          >
            <Table
              size="small"
              pagination={false}
              columns={[
                {
                  title: '',
                  key: 'idx',
                  render: (_, __, idx) => idx + 1,
                  width: 10,
                },
                {
                  title: 'EMPLOYEE',
                  key: 'EMPLOYEE',
                  dataIndex: 'name',
                },
                {
                  title: 'QUALIFIED',
                  key: 'QUALIFIED',
                  dataIndex: 'qualified',
                },
                {
                  title: 'WON',
                  key: 'WON',
                  dataIndex: 'won',
                },
                {
                  title: 'VALUE',
                  key: 'VALUE',
                  dataIndex: 'value',
                  render: (val) => `$${val}`,
                },
              ]}
              dataSource={[
                {
                  name: 'Kiara Sexton',
                  qualified: 97,
                  won: 23,
                  value: 707,
                },
                {
                  name: 'Noble Warner',
                  qualified: 78,
                  won: 80,
                  value: 988,
                },
                {
                  name: 'Laurel Montgomery',
                  qualified: 6,
                  won: 39,
                  value: 448,
                },
                {
                  name: 'Louis Pierce',
                  qualified: 73,
                  won: 23,
                  value: 367,
                },
                {
                  name: 'Micah King',
                  qualified: 61,
                  won: 3,
                  value: 537,
                },
              ]}
            />
          </StatCard>
        </Col>
        <Col lg={8} md={12} sm={24} xs={24}>
          <StatCard
            title={'Loads by Status'}
            description={'Curent month'}
            height={350}
          >
            <Chart4 />
          </StatCard>
        </Col>
      </Row>
    </>
  );
}
