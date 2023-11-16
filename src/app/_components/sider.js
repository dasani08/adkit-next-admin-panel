import React from 'react';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  EnvironmentOutlined,
  ContactsOutlined,
  HomeOutlined,
  FacebookOutlined,
  InstagramOutlined,
  ContainerOutlined,
  ShoppingCartOutlined,
  ProfileOutlined,
  SettingOutlined,
  CalendarOutlined,
  LineChartOutlined,
  CopyOutlined,
  LinkOutlined,
  CrownOutlined,
  MailOutlined,
  CommentOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';

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
    <HomeOutlined />,
  ),
  getItem(<Link href={'/item'}>Items</Link>, 'Items', <ContainerOutlined />),
  {
    type: 'divider',
  },
  getItem(
    <Link href={'/location'}>Locations</Link>,
    'Locations',
    <EnvironmentOutlined />,
  ),
  getItem(
    <Link href={'/calendar'}>Calendar</Link>,
    'Calendar',
    <CalendarOutlined />,
  ),
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
  getItem('Apps', 'apps', <AppstoreOutlined />, [
    getItem('Facebook', 'Facebook', <FacebookOutlined />),
    getItem('Instagram', 'Instagram', <InstagramOutlined />),
  ]),
  getItem(<Link href={'/email'}>Email</Link>, 'Email', <MailOutlined />),
  getItem(<Link href={'/chat'}>Chat</Link>, 'Chat', <CommentOutlined />),
  getItem(
    <Link href={'/setting'}>Settings</Link>,
    'Settings',
    <SettingOutlined />,
  ),
  {
    type: 'divider',
  },
  getItem(<Link href={'/chart'}>Charts</Link>, 'Charts', <LineChartOutlined />),
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
  ]),
  getItem(<Link href={'/pages/theme'}>Theme</Link>, 'Theme', <CrownOutlined />),
];

export default function _Sider() {
  const [siderCollapsed, setSiderCollapsed] = React.useState(false);
  const onCollapse = (collapsed) => {
    setSiderCollapsed(collapsed);
  };
  const logo = React.useMemo(() => {
    if (siderCollapsed)
      return (
        <Image src="/logo.svg" alt="Adkit" priority width={32} height={32} />
      );
    return (
      <Image src="/logo-full.svg" alt="Adkit" priority width={82} height={32} />
    );
  }, [siderCollapsed]);

  return (
    <Sider collapsible onCollapse={onCollapse} breakpoint="sm">
      <div className="demo-logo-vertical">{logo}</div>
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
      />
    </Sider>
  );
}
