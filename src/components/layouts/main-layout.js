import React from 'react';
import { Layout, FloatButton, ConfigProvider } from 'antd';
import { QuestionCircleOutlined, CommentOutlined } from '@ant-design/icons';

import themes from '@/theme/themeConfig';
import { useTheme } from '@/state/theme/theme-context';

import Sider from '@/components/sider';
import Header from '@/components/header';
import Footer from '@/components/footer';

const { Content } = Layout;

export default function MainLayout({ children }) {
  const { theme } = useTheme();

  return (
    <ConfigProvider theme={themes[theme]}>
      <Layout
        style={{
          minHeight: '100vh',
        }}
        hasSider
        className={`theme-${theme}`}
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
    </ConfigProvider>
  );
}
