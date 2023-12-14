'use client';
import { Layout, Menu, theme } from 'antd';
import {
  BarChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
  AreaChartOutlined,
  RadarChartOutlined,
  DotChartOutlined,
} from '@ant-design/icons';

import BarChart from './bar';

export default function SubPage() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const menuItems = [
    {
      key: 'Bar Chart',
      label: 'Bar Chart',
      icon: <BarChartOutlined />,
    },
    {
      key: 'Line Chart',
      label: 'Line Chart',
      icon: <LineChartOutlined />,
    },
    {
      key: 'Pie Chart',
      label: 'Pie Chart',
      icon: <PieChartOutlined />,
    },
    {
      key: 'Area Chart',
      label: 'Area Chart',
      icon: <AreaChartOutlined />,
    },
    {
      key: 'Radar Chart',
      label: 'Radar Chart',
      icon: <RadarChartOutlined />,
    },
    {
      key: 'Dot Chart',
      label: 'Dot Chart',
      icon: <DotChartOutlined />,
    },
  ];
  return (
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
        <BarChart />
      </Layout.Content>
    </Layout>
  );
}
