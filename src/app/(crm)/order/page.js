import React from 'react';
import Link from 'next/link';

import PageContent from '@/components/page-content';
import ListOrder from './_components/list';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/dashboard'}>DASHBOARD</Link>,
        },
        {
          title: 'SALE ORDERS',
        },
      ]}
    >
      <ListOrder />
    </PageContent>
  );
}
