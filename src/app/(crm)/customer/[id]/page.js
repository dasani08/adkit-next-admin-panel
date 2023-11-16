import React from 'react';
import Link from 'next/link';

import PageContent from '@/components/page-content';
import NameCard from './_components/name-card';
import CustomerDetail from './_components/detail';

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
      ]}
    >
      <NameCard />
      <CustomerDetail />
    </PageContent>
  );
}
