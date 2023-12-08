import React from 'react';
import Link from 'next/link';
import { Space } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import PageContent from '@/components/page-content';
import ChatPage from './_components/chat';

export default function Page() {
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
          title: 'CHAT',
        },
      ]}
    >
      <ChatPage />
    </PageContent>
  );
}
