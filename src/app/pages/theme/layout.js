'use client';
import React from 'react';
import { ConfigProvider } from 'antd';
import theme from '@/theme/themeConfig';

import ProtectedRoute from '@/components/protected-route';
import Layout from '@/app/_components/layout';

export default function MainLayout({ children }) {
  return (
    <ProtectedRoute>
      <ConfigProvider theme={theme}>
        <Layout>{children}</Layout>
      </ConfigProvider>
    </ProtectedRoute>
  );
}
