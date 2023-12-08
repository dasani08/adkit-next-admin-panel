'use client';
import React from 'react';
import { ConfigProvider } from 'antd';
import light from '@/theme/themeConfig';

import ProtectedRoute from '@/components/protected-route';
import Layout from '@/components/layouts/main-layout';

export default function MainLayout({ children }) {
  return (
    <ProtectedRoute>
      <ConfigProvider theme={light}>
        <Layout>{children}</Layout>
      </ConfigProvider>
    </ProtectedRoute>
  );
}
