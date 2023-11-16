import React from 'react';
import { Layout, FloatButton } from 'antd';
import { QuestionCircleOutlined, CommentOutlined } from '@ant-design/icons';

import Sider from './sider';
import Header from './header';
import Footer from './footer';

const { Content } = Layout;

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
      hasSider
    >
      <Sider />
      <Layout>
        <Header />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          {children}
        </Content>
        <Footer />
      </Layout>
      <FloatButton.Group
        icon={<QuestionCircleOutlined />}
        type="primary"
        style={{ right: 24 }}
        trigger="click"
      >
        <FloatButton />
        <FloatButton icon={<CommentOutlined />} />
      </FloatButton.Group>
    </Layout>
  );
}
