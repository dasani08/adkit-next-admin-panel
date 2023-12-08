import React from 'react';
import Link from 'next/link';
import { Space } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import PageContent from '@/components/page-content';
import CalendarPage from './_components/calendar';

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
          title: 'CALENDAR',
        },
      ]}
    >
      <CalendarPage />
    </PageContent>
  );
}
