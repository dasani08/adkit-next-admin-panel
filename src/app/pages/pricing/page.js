import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';

import PageContent from '@/components/page-content';
import Header from './_components/header';
import Pricing from './_components/pricing';

export default function Page() {
  const headerStyle = {
    backgroundColor: '#DFFEEA',
  };

  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/'}>HOME</Link>,
        },
        {
          title: 'PRICING',
        },
      ]}
    >
      <Card
        title={<Header />}
        headStyle={{ backgroundColor: '#00B96B', padding: 32 }}
      >
        <Pricing />
      </Card>
    </PageContent>
  );
}
