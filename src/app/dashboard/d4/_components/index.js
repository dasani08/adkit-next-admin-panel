'use client';
import React from 'react';
import {
  Button,
  Col,
  Calendar,
  Row,
  Space,
  Dropdown,
  Table,
  theme,
  Typography,
  Divider,
  Select,
  List,
  Avatar,
  Tag,
  Card,
  Flex,
  Progress,
  Grid,
} from 'antd';
import {
  AccountBookOutlined,
  CheckSquareOutlined,
  ShopOutlined,
  DollarOutlined,
  RiseOutlined,
  FallOutlined,
  SyncOutlined,
} from '@ant-design/icons';

import StatCard from './card';
import Chart4 from './chart4';
import Chart5 from './chart5';
import SaleDynamicReport from './sale-dynamic';
import UserActivityReport from './user-activity';
const { useBreakpoint } = Grid;

export default function Dashboard() {
  const {
    token: { colorSuccessText, colorErrorText },
  } = theme.useToken();

  const renderStatus = (status) => {
    const COLORS = {
      Delivered: '#87d068',
      Pending: '#f50',
      Cancelled: 'volcano',
      Processing: '#108ee9',
    };

    return <Tag color={COLORS[status]}>{status}</Tag>;
  };
  const screens = useBreakpoint();

  const tblScroll = React.useMemo(() => {
    if (screens.xs) return { x: 480 };
    if (screens.sm) return { x: 576 };
    if (screens.md) return { x: 768 };
    if (screens.lg) return { x: 992 };
  }, [screens]);

  return (
    <>
      <Row gutter={[8, 8]}>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Row gutter={[8, 8]}>
            <Col md={12} sm={12} xs={24}>
              <StatCard
                title={'Orders'}
                extra={<AccountBookOutlined style={{ fontSize: 36 }} />}
              >
                <Flex vertical>
                  <Typography.Text strong style={{ fontSize: 24 }}>
                    201
                  </Typography.Text>
                  <Space>
                    <Typography.Text style={{ color: colorSuccessText }}>
                      <RiseOutlined /> 9.2%
                    </Typography.Text>
                    <Typography.Text type="secondary">
                      since last month
                    </Typography.Text>
                  </Space>
                </Flex>
              </StatCard>
            </Col>
            <Col md={12} sm={12} xs={24}>
              <StatCard
                title={'Approved'}
                extra={<CheckSquareOutlined style={{ fontSize: 36 }} />}
              >
                <Flex vertical>
                  <Typography.Text strong style={{ fontSize: 24 }}>
                    201
                  </Typography.Text>
                  <Space>
                    <Typography.Text style={{ color: colorSuccessText }}>
                      <RiseOutlined /> 9.2%
                    </Typography.Text>
                    <Typography.Text type="secondary">
                      since last month
                    </Typography.Text>
                  </Space>
                </Flex>
              </StatCard>
            </Col>
            <Col md={12} sm={12} xs={24}>
              <StatCard
                title={'Month Total'}
                extra={<ShopOutlined style={{ fontSize: 36 }} />}
              >
                <Flex vertical>
                  <Typography.Text strong style={{ fontSize: 24 }}>
                    201
                  </Typography.Text>
                  <Space>
                    <Typography.Text style={{ color: colorErrorText }}>
                      <FallOutlined /> 2.2%
                    </Typography.Text>
                    <Typography.Text type="secondary">
                      since last month
                    </Typography.Text>
                  </Space>
                </Flex>
              </StatCard>
            </Col>
            <Col md={12} sm={12} xs={24}>
              <StatCard
                title={'Revenue'}
                extra={<DollarOutlined style={{ fontSize: 36 }} />}
              >
                <Flex vertical>
                  <Typography.Text strong style={{ fontSize: 24 }}>
                    201
                  </Typography.Text>
                  <Space>
                    <Typography.Text style={{ color: colorErrorText }}>
                      <FallOutlined /> 2.2%
                    </Typography.Text>
                    <Typography.Text type="secondary">
                      since last month
                    </Typography.Text>
                  </Space>
                </Flex>
              </StatCard>
            </Col>
          </Row>
        </Col>
        <Col lg={6} md={12} sm={24} xs={24}>
          <StatCard title={'Users'}>
            <Flex vertical>
              <Typography.Text strong style={{ fontSize: 24 }}>
                4.890
              </Typography.Text>
              <Typography.Text type="secondary">
                since last month
              </Typography.Text>
              <Chart4 />
            </Flex>
          </StatCard>
        </Col>
        <Col lg={6} md={12} sm={24} xs={24}>
          <StatCard title={'Subscriptions'}>
            <Flex vertical>
              <Typography.Text strong style={{ fontSize: 24 }}>
                1.202
              </Typography.Text>
              <Typography.Text type="secondary">
                since last month
              </Typography.Text>
              <Chart5 />
            </Flex>
          </StatCard>
        </Col>
      </Row>
      <Row gutter={[8, 8]} style={{ marginTop: 8 }}>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <StatCard title={'Sales dynamics'} height={300}>
                <SaleDynamicReport />
              </StatCard>
            </Col>
            <Col span={24}>
              <StatCard title={'Overall User Activity'} height={300}>
                <UserActivityReport />
              </StatCard>
            </Col>
          </Row>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <StatCard
                title={'Paid Invoices'}
                extra={
                  <Typography.Text
                    style={{ fontSize: 24, color: colorSuccessText }}
                  >
                    <RiseOutlined /> 9.2%
                  </Typography.Text>
                }
              >
                <Flex vertical>
                  <Typography.Text strong style={{ fontSize: 24 }}>
                    $29,099.23
                  </Typography.Text>
                  <Space>
                    <Typography.Text type="secondary">
                      since last month
                    </Typography.Text>
                  </Space>
                </Flex>
              </StatCard>
            </Col>
            <Col span={12}>
              <StatCard
                title={'Funds received'}
                extra={
                  <Typography.Text
                    style={{ fontSize: 24, color: colorSuccessText }}
                  >
                    <RiseOutlined /> 9.2%
                  </Typography.Text>
                }
              >
                <Flex vertical>
                  <Typography.Text strong style={{ fontSize: 24 }}>
                    $29,099.23
                  </Typography.Text>
                  <Space>
                    <Typography.Text type="secondary">
                      since last month
                    </Typography.Text>
                  </Space>
                </Flex>
              </StatCard>
            </Col>
            <Col span={24}>
              <StatCard title={'Customer order'} extra={<SyncOutlined />}>
                <Table
                  scroll={tblScroll}
                  columns={[
                    {
                      title: 'Profile',
                      key: 'Profile',
                      dataIndex: 'customerName',
                    },
                    {
                      title: 'Order#',
                      key: 'Order#',
                      dataIndex: 'orderNo',
                    },
                    {
                      title: 'Date',
                      key: 'Date',
                      dataIndex: 'orderDate',
                    },
                    {
                      title: 'Status',
                      key: 'Status',
                      dataIndex: 'status',
                      render: renderStatus,
                    },
                    {
                      title: 'Total',
                      key: 'Total',
                      dataIndex: 'total',
                      render: (t) => `$${t}`,
                    },
                  ]}
                  pagination={false}
                  dataSource={[
                    {
                      customerName: 'Kenyon Preston',
                      orderNo: '45XYE3BS',
                      orderDate: 'Jul 20, 2024',
                      status: 'Delivered',
                      total: 295,
                    },
                    {
                      customerName: 'Hedda Kerr',
                      orderNo: '23VXO9LC',
                      orderDate: 'Aug 16, 2023',
                      status: 'Pending',
                      total: 255,
                    },
                    {
                      customerName: 'Ebony Vance',
                      orderNo: '31NAX8JP',
                      orderDate: 'Mar 22, 2024',
                      status: 'Cancelled',
                      total: 661,
                    },
                    {
                      customerName: 'Mercedes Peters',
                      orderNo: '91VVT4UE',
                      orderDate: 'Jul 9, 2024',
                      status: 'Pending',
                      total: 672,
                    },
                    {
                      customerName: 'Julie Roberson',
                      orderNo: '65GHR4NX',
                      orderDate: 'Jan 7, 2023',
                      status: 'Processing',
                      total: 796,
                    },
                  ]}
                />
              </StatCard>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
