import React from 'react';
import Link from 'next/link';
import { Card } from 'antd';

import PageContent from '@/components/page-content';
import NewCustomerForm from '@/components/shared/NewCustomerForm';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/dashboard'}>DASHBOARD</Link>,
        },
        {
          title: <Link href={'/customer'}>CUSTOMER</Link>,
        },
        {
          title: 'NEW CUSTOMER',
        },
      ]}
    >
      <Card style={{ margin: '16px 0' }}>
        <NewCustomerForm />
      </Card>
    </PageContent>
  );
}
