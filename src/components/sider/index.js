'use client';
import React from 'react';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  EnvironmentOutlined,
  ContactsOutlined,
  DashboardOutlined,
  ContainerOutlined,
  ShoppingCartOutlined,
  ProfileOutlined,
  SettingOutlined,
  CalendarOutlined,
  LineChartOutlined,
  CopyOutlined,
  LinkOutlined,
  MailOutlined,
  CommentOutlined,
  GoldOutlined,
  StarOutlined,
  ReadOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

import Logo from './logo';
import LogoFull from './logo-full';
import { useTheme } from '@/state/theme/theme-context';

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    <Link href="/dashboard">Dashboard</Link>,
    'Dashboard',
    <DashboardOutlined />,
  ),
  {
    type: 'divider',
  },
  getItem('Crm', 'Crm', <AppstoreOutlined />, [
    getItem(<Link href={'/item'}>Items</Link>, 'Items', <ContainerOutlined />),
    getItem(
      <Link href={'/customer'}>Customers</Link>,
      'Customers',
      <ContactsOutlined />,
    ),
    getItem(
      <Link href={'/order'}>Sale Orders</Link>,
      'Sale Orders',
      <ShoppingCartOutlined />,
    ),
    getItem(
      <Link href={'/invoice'}>Invoices</Link>,
      'Invoices',
      <ProfileOutlined />,
    ),
    getItem(
      <Link href={'/setting'}>Settings</Link>,
      'Settings',
      <SettingOutlined />,
    ),
  ]),
  getItem('Apps', 'apps', <AppstoreOutlined />, [
    getItem(
      <Link href={'/calendar'}>Calendar</Link>,
      'Calendar',
      <CalendarOutlined />,
    ),
    getItem(
      <Link href={'/location'}>Locations</Link>,
      'Locations',
      <EnvironmentOutlined />,
    ),
    getItem(<Link href={'/email'}>Email</Link>, 'Email', <MailOutlined />),
    getItem(<Link href={'/chat'}>Chat</Link>, 'Chat', <CommentOutlined />),
  ]),
  getItem('UI/UX', 'UI/UX', <GoldOutlined />, [
    getItem(
      <Link href={'/elements/antd'}>Antd Components</Link>,
      'Antd Components',
      <StarOutlined />,
    ),
    getItem(
      <Link href={'/elements/table'}>Table</Link>,
      'Table',
      <StarOutlined />,
    ),
    getItem(
      <Link href={'/elements/list-page'}>ListPage</Link>,
      'ListPage',
      <StarOutlined />,
    ),
    getItem(
      <Link href={'/elements/forms'}>Forms</Link>,
      'Forms',
      <StarOutlined />,
    ),
  ]),
  {
    type: 'divider',
  },
  getItem(
    <Link href={'/chart/bar'}>Charts</Link>,
    'Charts',
    <LineChartOutlined />,
  ),
  {
    type: 'divider',
  },
  getItem('Pages', 'pages', <CopyOutlined />, [
    getItem(<Link href={'/pages/404'}>404</Link>, '404', <LinkOutlined />),
    getItem(<Link href={'/pages/403'}>403</Link>, '403', <LinkOutlined />),
    getItem(<Link href={'/pages/500'}>500</Link>, '500', <LinkOutlined />),
    getItem(
      <Link href={'/pages/login'}>Login</Link>,
      'Login',
      <LinkOutlined />,
    ),
    getItem(
      <Link href={'/pages/register'}>Register</Link>,
      'Register',
      <LinkOutlined />,
    ),
    getItem(
      <Link href={'/pages/pricing'}>Pricing</Link>,
      'Pricing',
      <LinkOutlined />,
    ),
  ]),
  getItem(
    <Link target="_blank" href={'https://adkit-admin-panel.netlify.app'}>
      Docs
    </Link>,
    'Docs',
    <ReadOutlined />,
  ),
];

export default function _Sider() {
  const [siderCollapsed, setSiderCollapsed] = React.useState(false);
  const { theme } = useTheme();
  const onCollapse = (collapsed) => {
    setSiderCollapsed(collapsed);
  };
  const logo = React.useMemo(() => {
    if (siderCollapsed)
      return <Logo fill={'#00B96B'} style={{ width: 44, height: 55 }} />;
    return <LogoFull fill={'#00B96B'} style={{ width: '100%', height: 44 }} />;
  }, [siderCollapsed]);

  return (
    <Sider theme={theme} collapsible onCollapse={onCollapse} breakpoint="md">
      <div className="demo-logo-vertical">
        <Link href={'/'}>{logo}</Link>
      </div>
      <Menu
        theme={theme}
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
        style={{
          borderTop: '1px solid rgba(5, 5, 5, 0.06)',
        }}
      />
    </Sider>
  );
}
