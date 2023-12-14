'use client';
import React from 'react';
import Link from 'next/link';
import { Space, Layout, Menu, theme } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import {
  BarChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
  AreaChartOutlined,
  RadarChartOutlined,
  DotChartOutlined,
} from '@ant-design/icons';

import PageContent from '@/components/page-content';

export default function ChartLayout({ children }) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const menuItems = [
    {
      key: 'Bar Chart',
      label: <Link href={'/chart'}>Bar Chart</Link>,
      icon: <BarChartOutlined />,
    },
    {
      key: 'Line Chart',
      label: <Link href={'/chart/line'}>Line Chart</Link>,
      icon: <LineChartOutlined />,
    },
    {
      key: 'Pie Chart',
      label: <Link href={'/chart/pie'}>Pie Chart</Link>,
      icon: <PieChartOutlined />,
    },
    {
      key: 'Area Chart',
      label: <Link href={'/chart/area'}>Area Chart</Link>,
      icon: <AreaChartOutlined />,
    },
    {
      key: 'Radar Chart',
      label: <Link href={'/chart/radar'}>Radar Chart</Link>,
      icon: <RadarChartOutlined />,
    },
    {
      key: 'Dot Chart',
      label: <Link href={'/chart/dot'}>Dot Chart</Link>,
      icon: <DotChartOutlined />,
    },
  ];
  return (
    <PageContent
      breadcrumbs={[
        {
          title: (
            <Link href={'/'}>
              <Space>
                <HomeOutlined />
                HOME
              </Space>
            </Link>
          ),
        },
        {
          title: 'CHARTS',
        },
      ]}
    >
      <Layout
        style={{
          padding: '24px 0',
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Layout.Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
            }}
            items={menuItems}
          />
        </Layout.Sider>
        <Layout.Content
          style={{
            padding: '0 24px',
            minHeight: 280,
          }}
        >
          {children}
        </Layout.Content>
      </Layout>
    </PageContent>
  );
}
